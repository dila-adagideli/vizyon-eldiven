import { brandIconPng, brandIconSize } from "@/lib/brand-icon";

export const size = brandIconSize;
export const contentType = "image/png";

export default async function Icon() {
  const png = await brandIconPng();
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
