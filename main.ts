// Two-Sentence Horror — make.fun entry for @yuhao-qiao.
// The program writes exactly two sentences to /output/entry.txt: the
// scariest horror story we could write in two sentences. The story is
// baked into the code below so the program runs with no network and
// writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story: "The baby monitor crackled, and my daughter's voice
// whispered, 'Mommy, the man in my closet says he misses you.' I
// don't have a daughter." Sentence one builds the dread with a
// familiar, domestic detail — a baby monitor, a child's voice, a man
// in the closet — and sentence two pulls the floor out: there is no
// daughter at all. The horror is not the man in the closet; it is
// that the voice knew to call her Mommy.
const LINE =
  "The baby monitor crackled, and my daughter's voice whispered, \"Mommy, the man in my closet says he misses you.\" I don't have a daughter.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the story and logic are unchanged.
// Second pass: the second sentence is the scare — the first only sets the trap.
// Third note: the monitor is the scariest prop — it is supposed to keep children safe.
