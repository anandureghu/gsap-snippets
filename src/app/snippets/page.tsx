import SnippetPreview from "@/components/snippet-preview";
import { snippets } from "@/lib/consts/snippets";
import React from "react";

const page = () => {
  return (
    <div className="overflow-y-auto flex flex-wrap justify-between pt-[120px]">
      {snippets.map((snippet, index) => (
        <SnippetPreview key={index} snippet={snippet} />
      ))}
    </div>
  );
};

export default page;
