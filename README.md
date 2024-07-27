<h1 align="center">DúöScríbî</h1>

<br>

<div align="center">
  ✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
    - [duoscribi()](#duoscribiinput-string-string)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/duoscribi"
```

<br>

## 🤹🏼 API

### `duoscribi(input: string): string`

*Converts letters with diacritics to regular, ASCII letters.*  

`input: string` - The string to convert.

Returns the converted string or an empty string otherwise.

<br>

> ℹ To see the extensive list of `508` supported characters with diacritics, see the [SUPPORTED_CHARS.md](https://github.com/igorskyflyer/npm-duoscribi/blob/main/SUPPORTED_CHARS.md) file.

---

## ✨ Examples

`example.ts`
```ts
import { duoscribi } from '@igor.dvlpr/duoscribi'

duoscribi('Ťḥė ẅâÿ ţɵ ɡėţ șţãrţėd iș ţɵ quiţ ţālkinɡ ānd bėgin dɵinɡ') // returns 'The way to get started is to quit talking and begin doing'
```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-duoscribi/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-duoscribi/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/keppo](https://www.npmjs.com/package/@igor.dvlpr/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[@igor.dvlpr/str-is-in](https://www.npmjs.com/package/@igor.dvlpr/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igor.dvlpr/encode-entities](https://www.npmjs.com/package/@igor.dvlpr/encode-entities)

> _🏃‍♂️ Fast and simple Map and RegExp based HTML entities encoder. 🍁_

<br>

[@igor.dvlpr/unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_
---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
