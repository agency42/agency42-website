"use client";

interface HeroVideoProps {
  src: string;
  alt: string;
  link?: string;
  name: string;
  client: string;
  year: string;
  details: string;
}

export default function HeroVideo({ src, alt, link, name, client, year, details }: HeroVideoProps) {
  const videoContent = (
    <>
      <div className="h-[200px] overflow-hidden">
        <video
          src={src}
          loop
          muted
          playsInline
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
          className="w-full h-full group-hover:opacity-90 transition object-cover scale-110"
        />
      </div>
      <div className="pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
          <div className="flex-1">
            <h2 className="text-lg font-medium group-hover:underline">{name}</h2>
            <p className="text-xs text-gray-400 mt-1">{client}</p>
          </div>
          <div className="text-xs text-gray-500">{year}</div>
        </div>
        <p className="text-sm text-gray-400 mt-2">{details}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group mb-10">
        {videoContent}
      </a>
    );
  }

  return (
    <div className="block mb-10">
      {videoContent}
    </div>
  );
}
