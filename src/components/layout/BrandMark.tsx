import Image from "next/image";
import Link from "next/link";
import logoHorizontal from "../../../public/images/logo-horizontal.png";

type BrandMarkProps = {
  alt?: string;
};

export function BrandMark({ alt = "Vizyon Zımparalı Eldiven" }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="logo-zoom logo-zoom-header relative z-10 block size-[3.75rem] shrink-0 overflow-hidden sm:size-[4.5rem]"
    >
      <Image
        src={logoHorizontal}
        alt={alt}
        fill
        unoptimized
        sizes="128px"
        className="object-cover object-[center_62%] scale-[1.22] translate-y-1"
      />
    </Link>
  );
}
