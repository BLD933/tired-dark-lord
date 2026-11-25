// make.fun entry: u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Writes one text, at most 600 characters, to /output/entry.txt: a monologue of about 100 words
// spoken by a fantasy villain who is secretly just very tired.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted monologue, kept here as the entry's single source of truth. The tiredness sits in
// the small logistics (an unlocked gate, a sticking cabinet, a dragon's dinner) and never in a
// stated feeling; the sting is that he asks to be hurt where he can still feel it.
const LINE =
  "The gate opens. Of course it does; I stopped locking it in the spring. You've come for the amulet. It's in the cabinet, second shelf, behind the tax ledger, and the cabinet sticks, so lift. I would stand, but the throne is where the heating is, and the dragon eats at nine, which is now. Take the sword with the blue hilt. The other one is ceremonial, like the war, which I have been losing, hero, in instalments, since the second age. Go on. Hit me somewhere I can still feel.";

// The gate refuses text outside 1 to 600 characters, or one that is only white space; the brief
// asks for about 100 words, so a monologue that drifted off its budget stops here too.
const chars = [...LINE].length;
const words = LINE.trim().split(/\s+/).filter(Boolean).length;
if (chars < 1 || chars > 600 || LINE.trim() === '') throw new Error('entry text is outside the gate length');
if (Math.abs(words - 100) > 12) throw new Error('monologue is off its word budget');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
