import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGemoji from 'remark-gemoji'
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default {
    shikiConfig: {
        theme: "one-dark-pro",
    },
    remarkPlugins: [
        [remarkToc, { tight: true, ordered: true }],
        remarkMath,
        remarkGemoji,
    ],
    rehypePlugins: [
        rehypeHeadingIds,
        rehypeKatex,
        [
            rehypeToc,
            {
                headings: ["h1", "h2", "h3"],
                cssClasses: {
                    toc: "toc-post",
                    link: "toc-link",
                },
            },
        ],
        [
            rehypeExternalLinks,
            {
                target: "_blank",
                rel: ["noopener", "noreferrer"],
            },
        ],
        [
            rehypeAutolinkHeadings, 
            { behavior: "wrap" }
        ],
    ],
};
