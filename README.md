# Web Development Notes

A website for all kind of notes about web development.

[Live preview](https://webdevelopmentnotes.francispelletier.ca/)

## Table of Contents

<!-- vim-markdown-toc GFM -->

- [Requirements](#requirements)
  - [Node js LTS](#node-js-lts)
- [Installation](#installation)
  - [Development](#development)
  - [Install Dependency](#install-dependency)
  - [Development Server](#development-server)
  - [Production](#production)
  - [Deployment](#deployment)
- [Usage](#usage)
  - [Feature overview](#feature-overview)
  - [How to create new notes](#how-to-create-new-notes)
  - [Syntax highlighting for code block](#syntax-highlighting-for-code-block)

<!-- vim-markdown-toc -->

## Requirements

- `Node js LTS` ([Node.js](https://nodejs.org/en/download/))

### Node js LTS

Assuming you have [Node Version Manager](https://github.com/nvm-sh/nvm) installed

```
$ nvm install --lts
```

## Installation

### Development

Clone the repository

```
$ git clone https://github.com/fpelletier-gh/web-development-notes
```

Change directory

```
$ cd web-development-notes
```

### Install Dependency

Install node module

```
$ npm install
```

### Development Server

Launch the development server

```
$ npm run dev
```

### Production

Create the production build

```
$ npm run build
```

### Deployment

Some Deployment options

- [Vercel](https://vercel.com/) (Recomended)
- [Netlify](https://netlify.com/)

## Usage

### Feature overview

- The `/posts` folder is where all the notes are located
- It will recursively search in subfolder for all `.mdx` [(MDX)](https://mdxjs.com/docs/) and create pages for every files
- The URL will match the folder structure
- The folder structure will represent the side menu navigation (the subfolder will become submenu)
- **Snake_case is required as a naming convention for file and folder name**
- File and folder name will be converted to title case and "and" will be converted to "&"
- Styling for the generated pages will be done automatically
- Code block will have syntax highlighting (more info)

### How to create new notes

Create a `.mdx`[(MDX)](https://mdxjs.com/docs/) file in the `/posts` folder.

The side menu navigation will be generated from the folder structure inside the `/posts` directory.

> ex. `/posts/javascript/algorithm_and_data-structure.mdx` will create a submenu named `Javascript` with a link named `Algorithm & Data Structure` inside it

### Syntax highlighting for code block

To enable syntax highlighting for code block in `.mdx` files you need to specify the language

> ex. The following code block will have syntax highlighting enable for javascript

````
```js
console.log("Syntax highlighting for javascript")

```
````
