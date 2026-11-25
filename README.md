# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/qyhchy999-jpg/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/qyhchy999-jpg/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

Exactly two sentences — the scariest horror story we could write in two sentences: "The baby monitor crackled, and my daughter's voice whispered, 'Mommy, the man in my closet says he misses you.' I don't have a daughter." Sentence one builds the dread with a familiar, domestic detail — a baby monitor, a child's voice, a man in the closet — and sentence two pulls the floor out: there is no daughter at all. The horror is not the man in the closet; it is that the voice knew to call her Mommy.

## Entry

`main.ts` (Node 22, standard library only) writes the story to `/output/entry.txt`. The story is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of exactly two sentences and at most 400 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: the second sentence is the scare — the first only sets the trap. -->
<!-- Third pass: two sentences only — the third would explain the joke away. -->
