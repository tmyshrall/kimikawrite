/*
  ============================================================
  STORY REGISTRY
  ============================================================
  This is the only file you need to edit to add a new story
  or a new chapter.

  HOW TO ADD A NEW CHAPTER TO AN EXISTING STORY
  ----------------------------------------------
  1. Open your chapter in Google Docs (or your PDF).
  2. Select all the text, copy it.
  3. Open a plain text editor (Notepad, TextEdit, VS Code, etc.)
     and paste the text in. Save it as a .txt file inside the
     matching folder in /content/<story-slug>/
     e.g. content/wells-of-thane/03-the-hollow-road.txt
     (Leave a blank line between paragraphs — that's how the
     site knows where one paragraph ends and the next begins.)
  4. Add one line for it in the "chapters" array below, e.g:
       { title: "Chapter 3: The Hollow Road", file: "03-the-hollow-road.txt" }
  5. Save this file and refresh the page. Done!

  HOW TO ADD A BRAND NEW STORY
  -----------------------------
  1. Make a new folder inside /content/ for it, using a short
     lowercase, dash-separated name (a "slug"), e.g. content/my-new-story/
  2. Add chapter .txt files into that folder as described above.
  3. Copy one of the story objects below, paste it as a new
     entry in the STORIES array, and update slug / title / chapters.
  ============================================================
*/

const STORIES = [
  {
    slug: "nerina-eternal-its-a-wonderful-life",
    title: "Nerina Eternal It's a Wonderful Life",
    status: "ongoing",
    chapters: [
      { title: "Chapter 1: To The Place Called Home", file: "01-to-the-place-called-home.txt" },
    ],
  },
];
