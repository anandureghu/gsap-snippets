import { ISnippet } from "@/lib/types/snippet.type";
import Image from "next/image";
import React from "react";

const SnippetPreview = ({ snippet }: { snippet: ISnippet }) => {
  return (
    <div className="mb-10 max-w-1/2 w-[calc(50%-20px)] relative">
      <div className="relative h-[400px] border border-gray-900 rounded-lg mb-4 overflow-hidden">
        <Image
          src={snippet.preview}
          alt={snippet.title}
          fill={true}
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-2xl font-medium mb-2">{snippet.title}</h2>
      <p className="mb-4">{snippet.description}</p>
    </div>
  );
};

export default SnippetPreview;
