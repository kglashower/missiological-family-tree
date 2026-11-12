# A Missiological Family Tree

How OneHope's Nine Core Values grew from four roots. MISS 7013 Missional Theology, Assessment 1.1, Southeastern University.

A static site: `index.html`, `styles.css`, `script.js`, and `data.js`. No build step.

- **`data.js`** holds every word on the site: the nodes of the tree, the notes, the bibliography, and the dated table. Edit text there.
- **`design-system.md`** documents the colors, type, and shapes, taken from the OneHope Core Values badges and the Core Values two-pager.
- **`badges/`** holds 400px copies of the Core Values badges used as the fruit.

**Publish on GitHub Pages:** push to `main`, then in Settings → Pages choose "Deploy from a branch", branch `main`, folder `/ (root)`.

**Preview locally:** any static server from this folder, for example `python3 -m http.server 8765`.
