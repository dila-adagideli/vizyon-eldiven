import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const brandIconSize = { width: 512, height: 512 };

export async function brandIconPng() {
  const source = await readFile(
    path.join(process.cwd(), "public/images/logo-horizontal.png"),
  );

  const { data, info } = await sharp(source)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h } = info;
  let minx = w;
  let miny = h;
  let maxx = -1;
  let maxy = -1;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 20) {
        if (x < minx) minx = x;
        if (y < miny) miny = y;
        if (x > maxx) maxx = x;
        if (y > maxy) maxy = y;
      }
    }
  }

  return sharp(source)
    .extract({
      left: minx,
      top: miny,
      width: maxx - minx + 1,
      height: maxy - miny + 1,
    })
    .resize(brandIconSize.width, brandIconSize.height, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}
