import { describe, expect, test } from "vitest";

import { notionRichTextToMarkdown } from "./index.js";

describe("notionRichTextToMarkdown", () => {
	test.each([
		[{ plain_text: "" }, ""],
		[{ plain_text: "Hello, world!" }, "Hello, world!"],
		[{ plain_text: "**Escaped _ internals~~" }, "**Escaped _ internals~~"],
		[
			{ href: "https://example.com", plain_text: "Hello, world!" },
			"[Hello, world!](https://example.com)",
		],
		[
			{ annotations: { bold: true }, plain_text: "Hello, world!" },
			"**Hello, world!**",
		],
		[
			{ annotations: { code: true }, plain_text: "Hello, world!" },
			"`Hello, world!`",
		],
		[
			{ annotations: { italic: true }, plain_text: "Hello, world!" },
			"_Hello, world!_",
		],
		[
			{ annotations: { strikethrough: true }, plain_text: "Hello, world!" },
			"~~Hello, world!~~",
		],
		[
			{
				annotations: {
					bold: true,
					code: true,
					italic: true,
					strikethrough: true,
				},
				plain_text: "Hello, world!",
			},
			"~~_**`Hello, world!`**_~~",
		],
		[
			{
				annotations: {
					bold: true,
					code: true,
					italic: true,
					strikethrough: true,
				},
				href: "https://example.com",
				plain_text: "Hello, world!",
			},
			"[~~_**`Hello, world!`**_~~](https://example.com)",
		],
	])("%j %o", (input, expected) => {
		expect(notionRichTextToMarkdown(input)).toBe(expected);
	});
});
