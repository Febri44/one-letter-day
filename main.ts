import { mkdirSync, writeFileSync } from "node:fs";

// One letter, written verbatim by main.ts: the letter is the whole entry.
const line = "Q";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
