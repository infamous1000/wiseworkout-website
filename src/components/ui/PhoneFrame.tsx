import Image from "next/image";

/* Real app screenshots are 415x900 after processing. */
const RATIO = 900 / 415;

/**
 * Holds a real screenshot of the app. The frame carries the one shadow on the
 * site heavier than the 0.04 whisper stack — the product is the only thing
 * allowed to sit above the page.
 */
export default function PhoneFrame({
  src,
  alt,
  width = 260,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 rounded-[2.2rem] bg-ink p-[3px] ${className}`.trim()}
      style={{
        width,
        boxShadow:
          "0 40px 80px -24px rgba(0,0,0,0.28), 0 12px 24px -12px rgba(0,0,0,0.16)",
      }}
    >
      <div className="overflow-hidden rounded-[2rem] bg-white">
        <Image
          src={src}
          alt={alt}
          width={415}
          height={900}
          priority={priority}
          sizes={`${width}px`}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

export { RATIO };
