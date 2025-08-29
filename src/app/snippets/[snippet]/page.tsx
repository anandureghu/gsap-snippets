import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { snippets } from "@/lib/consts/snippets";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

import CodeIcon from "@/assets/icons/code.svg";
import ArrowTop from "@/assets/icons/arrow-top.svg";
import Copy from "@/components/copy";

export default async function SnippetDetail({
  params,
}: {
  params: Promise<{ snippet: string }>;
}) {
  const { snippet } = await params;
  console.log(process.cwd());
  const filePath = path.join(process.cwd(), "snippets", `${snippet}.tsx`);
  const file = await fs.readFile(filePath, "utf8");

  const detail = snippets.find((s) => s.fileName === snippet);

  if (!detail) return <div>Snippet not found</div>;

  return (
    <div className="pt-[120px]" id="snippet">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-4">{detail.title}</h1>
        <Link href={"#code"} className="flex items-center gap-2">
          code <Image src={CodeIcon} alt="code" width={16} height={16} />
        </Link>
      </div>

      <div className="border border-gray-900 border-dashed">
        <detail.component />
      </div>

      <div className="pt-[100px]" id="code">
        <div className="flex items-center justify-end mb-3">
          <Link href={"#snippet"} className="flex items-center gap-2">
            go to top <Image src={ArrowTop} alt="code" width={16} height={16} />
          </Link>
        </div>
        <div className="border border-gray-900 border-dashed relative py-5">
          <div className="flex items-center justify-end absolute right-5 top-5">
            <Copy value={file} />
          </div>
          <MDXRemote
            source={`\`\`\`tsx:${snippet}.tsx\n${file}\n\`\`\``}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeCodeTitles, rehypePrism],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
