'use client';

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ArticleImage({ src, alt }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500 text-lg font-bold px-4 text-center">{alt}</p>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}