import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const brandIconSize = { width: 512, height: 512 };

const padding = 24;

export async function brandIconPng() {
  const source = await readFile(
    path.join(process.cwd(), "public/images/favicon-logo.png"),
  );

  const inner = brandIconSize.width - padding * 2;

  return sharp(source)
    .ensureAlpha()
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}
