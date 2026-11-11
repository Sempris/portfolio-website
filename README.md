# Portfolio Website

Personal portfolio of Wadim Skworzow, full-stack developer (Vue 3 / TypeScript, Laravel / PHP) in Dortmund. The site is
bilingual: every piece of content exists in German and English, and visitors can switch between them.

## Structure

| File         | Purpose                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| `index.html` | All content: intro, work, reference, career, toolkit, languages, contact      |
| `styles.css` | Layout and typography; the Archivo and Source Serif 4 fonts are embedded      |
| `script.js`  | Language switch, page title per language, highlighting the current nav entry |

It is plain HTML, CSS and JavaScript, with no build step and no dependencies. The portrait and fonts are inlined, so
the three files are the whole site.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Editing content

Each piece of text appears twice, once per language:

```html
<p lang="de">Deutscher Text</p>
<p lang="en">English text</p>
```

CSS hides whichever language isn't active (`html[data-lang]`). Text that is the same in both languages, such as names
or tech tags, needs no `lang` attribute. An element with the `dual` class stays visible in both languages; the
intro statement and the German originals of the reference quotes use it.

The starting language follows the browser (German if it's set to German, otherwise English). After that, the switch
in the sidebar changes it.

## Deployment

The site is static, so any static host works (GitHub Pages, Netlify and others): publish the repository root.
