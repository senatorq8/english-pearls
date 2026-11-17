"""Turn the natural-voice recordings (docs/voice/<key>.mp3, George) into the teacher's own voice with kNN-VC.
Writes docs/voice-a/<key>.mp3 (mono, 16 kHz, 32 kbit/s). Resumable: existing files are skipped.
The teacher's reference recording is NOT kept in this repository; pass its matching set (made once from his
recording with WavLM-Large) as an argument.
Usage: python3 tools/voice-convert.py /path/to/knn-vc /path/to/matching_set.pt
"""
import os, sys, glob, subprocess, time, io
import numpy as np, soundfile as sf, torch

R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(R, 'docs', 'voice'); OUT = os.path.join(R, 'docs', 'voice-a'); os.makedirs(OUT, exist_ok=True)
sys.path.insert(0, sys.argv[1]); torch.set_num_threads(os.cpu_count() or 2)
from hubconf import knn_vc
m = knn_vc(pretrained=True, progress=False, prematched=True, device='cpu')
ms = torch.load(sys.argv[2])

def load16k(p):
    r = subprocess.run(['ffmpeg', '-v', 'error', '-i', p, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'], capture_output=True, check=True)
    return np.frombuffer(r.stdout, dtype=np.float32).copy()

def level(y):
    rms = float(np.sqrt(np.mean(y ** 2)) + 1e-9); y = y * (10 ** (-20 / 20) / rms)
    pk = float(np.abs(y).max() + 1e-9)
    return y * (0.95 / pk) if pk > 0.95 else y

todo = [k for k in sorted(os.path.basename(p)[:-4] for p in glob.glob(os.path.join(SRC, '*.mp3'))) if not os.path.exists(os.path.join(OUT, k + '.mp3'))]
print(len(todo), 'to convert', flush=True); t0 = time.time()
for i, k in enumerate(todo):
    x = load16k(os.path.join(SRC, k + '.mp3'))
    with torch.inference_mode():
        y = m.match(m.get_features(torch.from_numpy(x)[None]), ms, topk=4).cpu().numpy()
    y = level(y.astype(np.float32))
    tmp = os.path.join(OUT, k + '.tmp.mp3')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'f32le', '-ar', '16000', '-ac', '1', '-i', '-', '-c:a', 'libmp3lame', '-b:a', '32k', tmp], input=y.tobytes(), check=True)
    os.replace(tmp, os.path.join(OUT, k + '.mp3'))
    if i % 200 == 0: print(i, '/', len(todo), int(time.time() - t0), 's', flush=True)
print('done', int(time.time() - t0), 's', flush=True)
