# The Reading Room

A simple story archive site. Homepage lists your stories with how many
chapters each has → click a story → see its chapter list → click a
chapter → read it on a page with a background scene and a white "page"
in the middle.

## Publishing to GitHub Pages

1. Create a new GitHub repo and push everything in this folder to it
   (keep the folder structure exactly as it is — `index.html` should
   sit at the root of the repo).
2. In the repo, go to **Settings → Pages**, set "Source" to your main
   branch (root folder), and save.
3. GitHub will give you a URL like `https://yourname.github.io/reponame/`.
   That's your live site — visit it directly rather than opening
   `index.html` from your own computer, since the chapter text loads
   over the web and needs a real server (which GitHub Pages provides
   automatically).

Any time you push new commits (new chapters, new stories), the live
site updates within a minute or two.

## Adding a new chapter (the normal workflow)

1. Open the chapter in Google Docs (or your PDF), select all, copy.
2. Paste the text into a plain `.txt` file. Leave a blank line between
   paragraphs — that's the only formatting rule.
3. Save that `.txt` file into `content/<story-slug>/`, e.g.
   `content/wells-of-thane/04-the-flood-gate.txt`.
4. Open `js/data.js` and add one line to that story's `chapters` list:
   ```js
   { title: "Chapter 4: The Flood Gate", file: "04-the-flood-gate.txt" }
   ```
5. Save. Refresh the page. The new chapter is live, with previous/next
   navigation wired up automatically.

## Adding a whole new story

1. Make a new folder in `content/`, named like `my-new-story` (lowercase,
   dashes instead of spaces).
2. Add its chapter `.txt` files there as above.
3. In `js/data.js`, copy an existing story object, paste it as a new
   entry, and update `slug`, `title`, `blurb`, and `chapters`.

## Using a real photo as the chapter background

Right now the chapter background is a generated dark texture (no image
file needed, works out of the box). If you'd rather use a real photo:

1. Put an image at `assets/chapter-bg.jpg` (create the `assets` folder).
2. Open `css/style.css`, find the commented-out line inside
   `.chapter-scene` (search for `chapter-bg.jpg`), and uncomment it.

## File map

```
index.html            → homepage (story list)
story.html             → chapter list for one story
chapter.html           → reading page for one chapter
css/style.css          → all styling
js/data.js             → ← the file you edit to add stories/chapters
content/<slug>/*.txt   → the actual chapter text
```
