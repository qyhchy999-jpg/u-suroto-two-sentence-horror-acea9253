// Two-Sentence Horror — make.fun entry for @yuhao-qiao.
// The program writes exactly two sentences to /output/entry.txt: the
// scariest horror story we could write in two sentences. The story is
// baked into the code below so the program runs with no network and
// writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story: "Every morning the mirror shows me brushing my teeth,
// and every morning I wave back. Today it waved first." Sentence one
// builds the dread with a familiar, domestic detail — a mirror, a
// morning routine, a wave back — and sentence two pulls the floor out
// in four words: the reflection moved on its own. The horror is not
// the mirror; it is that the waving back was a habit, and the habit
// has been watching longer than you have.
const LINE =
  "Every morning the mirror shows me brushing my teeth, and every morning I wave back. Today it waved first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Rewritten in full in this session; the story replaces the earlier baby-monitor story.
// Second note: four words do the scare — "Today it waved first" needs no third sentence.
// Third note: the first sentence is a habit, and habits are the scariest thing to lose.
