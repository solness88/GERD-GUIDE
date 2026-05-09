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
        <div className="aspect-video w-full flex flex-col items-center justify-center bg-gray-200 rounded">
        <p className="text-gray-600 text-3xl font-bold px-4 text-center">逆流性食道炎ガイド</p>
        <p className="text-gray-400 text-2xl mt-2">gerd-guide.com</p>
      </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={`w-full h-auto ${loaded ? 'block' : 'hidden'}`}
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}