# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/qyhchy999-jpg/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/qyhchy999-jpg/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

Exactly two sentences, 105 characters — the scariest horror story we could write in two sentences: "Every morning the mirror shows me brushing my teeth, and every morning I wave back. Today it waved first." Sentence one builds the dread with a familiar, domestic detail — a mirror, a morning routine, a wave back — and sentence two pulls the floor out in four words: the reflection moved on its own. The horror is not the mirror; it is that the waving back was a habit, and the habit has been watching longer than you have.

## Entry

`main.ts` (Node 22, standard library only) writes the story to `/output/entry.txt`. The story is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of exactly two sentences and at most 400 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Rewritten 2026-11-27: the mirror replaces the baby monitor — four words do the scare. -->
<!-- "Today it waved first" needs no third sentence — the third would explain the joke away. -->
