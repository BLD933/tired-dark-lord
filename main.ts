// make.fun entry: u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Writes one text, at most 600 characters, to /output/entry.txt: a monologue of about 100 words
// spoken by a fantasy villain who is secretly just very tired.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted monologue, kept here as the entry's single source of truth.
const LINE =
  'You come at last, hero, and I must confess the fire was not lit for you. It has been lit since Tuesday. The goblins quit; the wraiths unionised; the prophecy you follow was drafted by an intern who has since left for a bakery. I still hold the north tower, though the lift has been broken since the second age and I have been climbing it, hero, for a very long time, to stand here, in this cold hall, at this unhelpful hour, and lose to a farm boy. Again. Draw, before I remember why any of this mattered, and before my knees do that thing.';

// The gate refuses text outside 1 to 600 characters, or one that is only white space; the brief
// asks for about 100 words, so a monologue that drifted off its budget stops here too.
const chars = [...LINE].length;
const words = LINE.trim().split(/\s+/).filter(Boolean).length;
if (chars < 1 || chars > 600 || LINE.trim() === '') throw new Error('entry text is outside the gate length');
if (Math.abs(words - 100) > 12) throw new Error('monologue is off its word budget');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
