"""Record every text in tools/voice/*.json with the natural voice (Kokoro 82M, voice "bm_george", British English).
Writes docs/voice/<key>.mp3 (mono, 24 kHz, 40 kbit/s). Resumable: existing files are skipped.
Usage: python3 tools/voice-make.py /path/to/kokoro-v1.0.onnx /path/to/voices-v1.0.bin
Model files: https://github.com/thewh1teagle/kokoro-onnx/releases (model-files-v1.0). Kokoro is Apache-2.0.
"""
import json, os, re, subprocess, sys, time, glob
import numpy as np, onnxruntime as ort, soundfile as sf
from kokoro_onnx import Kokoro

R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(R, 'docs', 'voice'); os.makedirs(OUT, exist_ok=True)
so = ort.SessionOptions(); so.intra_op_num_threads = os.cpu_count() or 2; so.inter_op_num_threads = 1
k = Kokoro.from_session(ort.InferenceSession(sys.argv[1], sess_options=so, providers=['CPUExecutionProvider']), sys.argv[2])

texts = {}
for f in sorted(glob.glob(os.path.join(R, 'tools', 'voice', '*.json'))):
    texts.update(json.load(open(f, encoding='utf8')))
# shortest first: words and sentences are ready early, long reading paragraphs last
todo = sorted([(key, t) for key, t in texts.items() if not os.path.exists(os.path.join(OUT, key + '.mp3'))], key=lambda x: len(x[1]))
print(len(texts), 'texts,', len(todo), 'to record', flush=True)

def speakable(t):
    t = t.replace(' / ', ' or ').replace('/', ' or ')
    t = re.sub(r'[✔✖✓✗☑✕→←↺⭐🎲]', ' ', t)
    t = re.sub(r'_{2,}', 'blank', t)
    return re.sub(r'\s+', ' ', t).strip()

tmp = os.path.join(OUT, '.tmp.wav'); t0 = time.time()
for i, (key, t) in enumerate(todo):
    try:
        s, sr = k.create(speakable(t), voice='bm_george', speed=0.9, lang='en-gb')
        s = np.concatenate([np.zeros(int(sr * 0.05), dtype=s.dtype), s, np.zeros(int(sr * 0.12), dtype=s.dtype)])
        sf.write(tmp, s, sr)
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tmp, '-ac', '1', '-ar', '24000', '-b:a', '40k', os.path.join(OUT, key + '.mp3')], check=True)
    except Exception as e:
        print('FAILED', key, repr(t[:60]), e, flush=True)
    if i % 100 == 0: print(i, '/', len(todo), round(time.time() - t0), 's', flush=True)
if os.path.exists(tmp): os.remove(tmp)
print('done', round(time.time() - t0), 's', flush=True)
