export interface RichTextAnnotationsLike {
	bold?: boolean;
	code?: boolean;
	italic?: boolean;
	strikethrough?: boolean;
}

/**
 * A permissive version of the `@notionhq/client` `RichTextItemResponse` type.
 */
export interface RichTextItemResponseLike {
	annotations?: Partial<RichTextAnnotationsLike>;
	href?: null | string;
	plain_text: string;
}

function escapeMarkdown(text: string) {
	return text
		.replaceAll("(", "\\(")
		.replaceAll(")", "\\)")
		.replaceAll("<", "\\<")
		.replaceAll(">", "\\>");
}

function processAnnotations(item: RichTextItemResponseLike) {
	const { annotations = {} } = item;
	let text = item.plain_text;

	if (annotations.code) {
		text = `\`${text}\``;
	}

	if (annotations.bold) {
		text = `**${text}**`;
	}

	if (annotations.italic) {
		text = `_${text}_`;
	}

	if (annotations.strikethrough) {
		text = `~~${text}~~`;
	}

	return text;
}

export function notionRichTextToMarkdown(item: RichTextItemResponseLike) {
	const value = escapeMarkdown(processAnnotations(item));

	return item.href ? `[${value}](${item.href})` : value;
}
