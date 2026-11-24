import * as fs from "node:fs";

// Exactly one word: Apricity — the warmth of the sun on a cold
// winter's day. Rare, vivid, and it makes the reader stop and wonder.
//
// Why this word (kept after review, not swapped): the field already
// holds the usual rare-word-list staples — "Petrichor", "vellichor",
// "Defenestration" — so another list staple would blend in. Apricity
// stands apart from those three: it is a physical sensation everyone
// has felt (winter sun on cold skin) rather than a smell, a mood, or a
// joke action, so a pairwise judge gets surprise (an unfamiliar word),
// vividness (warmth vs. cold in one image) and warmth at once. It is
// pronounceable on sight, positive, and its meaning lands instantly
// once known — a more obscure pick (e.g. "psithurism", "nudiustertian")
// would risk the judge not knowing it at all, and a common pick
// (e.g. "serendipity", "sonder") would lose on surprise. Apricity is
// the best balance of the three judging axes, and it is not in the
// field already.
const text = "Apricity";

// Runtime gate: the competition requires /output/entry.txt to be UTF-8
// text of 1–24 characters, not only whitespace, and the entry must be
// exactly one word. Fail loudly before writing anything if violated,
// so a bad edit can never silently submit an invalid entry.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 24) {
  throw new Error(
    `entry must be 1-24 characters, got ${codePoints}: ${JSON.stringify(text)}`,
  );
}
if (/\s/.test(text)) {
  throw new Error(
    `entry must be a single word with no whitespace, got: ${JSON.stringify(text)}`,
  );
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
