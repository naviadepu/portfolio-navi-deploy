import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoStripProps {
  photos: Photo[];
}

export default function PhotoStrip({ photos }: PhotoStripProps) {
  return (
    <div
      className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-8 sm:px-8"
      style={{ scrollbarWidth: "none" }}
    >
      {photos.map((photo, i) => (
        <figure key={i} className="shrink-0 flex flex-col gap-2">
          <div className="relative w-44 h-52 sm:w-52 sm:h-64 overflow-hidden rounded-sm bg-border">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 176px, 208px"
            />
          </div>
          {photo.caption && (
            <figcaption className="font-mono text-[11px] text-ink-mute tracking-wide max-w-[11rem] sm:max-w-[13rem] leading-relaxed">
              {photo.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
