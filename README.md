<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-duoscribi/main/media/duoscribi.png" alt="Icon of DúöScríbî (DuoScribi) - a TypeScript package for converting diacritics to ASCII letters" width="256" height="256">
  <h1>DúöScríbî (DuoScribi)</h1>
</div>

<blockquote align="center">Blazing‑Fast Conversion • ASCII‑Clean Output • Zero‑Noise Normalization • Trusted by Devs Worldwide</blockquote>

<h4 align="center">
  ✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- 🚀 Blazing‑fast at `~900K ops/sec`[^1] across `508` Unicode chars
- ⚡ Converts `diacritics` to plain `ASCII` instantly
- 🧠 Handles full `Unicode` range with mapped rules
- 🧹 Cleans up noisy input for search and indexing
- 🔤 Preserves `letter` case while `normalizing` text
- 🛠 Built with `TypeScript` for strong typing
- 🧩 Uses a modular `replacer` ([**@igorskyflyer/mapped-replacer**](https://www.npmjs.com/package/@igorskyflyer/mapped-replacer)) for easy rule extension
- 🚫 Returns `empty` string on `invalid` input
- 📦 `Lightweight` and ready for npm projects

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/duoscribi
```

```bash
yarn add @igorskyflyer/duoscribi
```

```bash
npm i @igorskyflyer/duoscribi
```

<br>
<br>

## 🤹🏼 API

### `duoscribi(input: string): string`

*Converts letters with diacritics to regular, ASCII letters.*  

`input: string` - The string to convert.

Returns the converted string or an empty string otherwise.

<br>

> ### 💡 TIP
>
> #### Supported Characters
>
> To see the extensive list of `508` supported characters with diacritics, see the [SUPPORTED_CHARS.md](https://github.com/igorskyflyer/npm-duoscribi/blob/main/SUPPORTED_CHARS.md) file.
>

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { duoscribi } from '@igorskyflyer/duoscribi'

duoscribi('Ťḥė ẅâÿ ţɵ ɡėţ șţãrţėd iș ţɵ quiţ ţālkinɡ ānd bėgin dɵinɡ')
// returns 'The way to get started is to quit talking and begin doing'
```

<br>
<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-duoscribi/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-duoscribi/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[**@igorskyflyer/keppo**](https://www.npmjs.com/package/@igorskyflyer/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[**@igorskyflyer/str-is-in**](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[**@igorskyflyer/encode-entities**](https://www.npmjs.com/package/@igorskyflyer/encode-entities)

> _🏃‍♂️ Fast and simple Map and RegExp based HTML entities encoder. 🍁_

<br>

[**@igorskyflyer/unc-path**](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[**@igorskyflyer/strip-html**](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.

[^1]: tested on an `AMD 5825u`.
