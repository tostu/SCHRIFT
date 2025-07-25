import { writeFile } from "fs/promises";

const url = "https://fonts.google.com/metadata/fonts";
const outputPath = "src/lib/fonts.json";

try {
  const res = await fetch(url);
  const text = await res.text();

  // Remove anti-hijacking prefix
  const cleaned = text.replace(/^]\)\}'\n/, "");
  const json = JSON.parse(cleaned);

  await writeFile(outputPath, JSON.stringify(json, null, 2));
  console.log(`Saved ${outputPath}`);
} catch (err) {
  console.error("Error:", err);
}
