<h1 align="center">Notion Rich Text to Markdown</h1>

<p align="center">Converts Notion's rich text strings to Markdown. 🪢</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/notion-rich-text-to-markdown/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/notion-rich-text-to-markdown" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/notion-rich-text-to-markdown?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/notion-rich-text-to-markdown/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/notion-rich-text-to-markdown"><img alt="📦 npm version" src="https://img.shields.io/npm/v/notion-rich-text-to-markdown?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i notion-rich-text-to-markdown
```

```ts
import { notionRichTextToMarkdown } from "notion-rich-text-to-markdown";

notionRichTextToMarkdown({
	annotations: {
		italic: true,
	},
	href: "https://hi.joshuakgoldberg.com",
	plain_text: "Click me!",
	type: "text",
});
// Returns:
// "_[Click me!](https://hi.joshuakgoldberg.com)_"
```

`notionRichTextToMarkdown` accepts an object like data in [Notion's Rich Text API response](https://developers.notion.com/reference/rich-text).
That shape is described by the `RichTextItemResponse` in `@notionhq/client`.

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://youtube.com/@MichiganTypeScript"><img src="https://avatars.githubusercontent.com/u/15232461?v=4?s=100" width="100px;" alt="Dimitri Mitropoulos"/><br /><sub><b>Dimitri Mitropoulos</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/notion-rich-text-to-markdown/commits?author=dimitropoulos" title="Code">💻</a> <a href="#content-dimitropoulos" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/notion-rich-text-to-markdown/commits?author=dimitropoulos" title="Documentation">📖</a> <a href="#ideas-dimitropoulos" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-dimitropoulos" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-dimitropoulos" title="Maintenance">🚧</a> <a href="#projectManagement-dimitropoulos" title="Project Management">📆</a> <a href="#tool-dimitropoulos" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/notion-rich-text-to-markdown/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/notion-rich-text-to-markdown/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
