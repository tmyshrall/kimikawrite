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
    slug: "wells-of-thane",
    title: "The Wells of Thane",
    blurb: "A dry-country mystery about the town that ran out of water, and the well-diggers who won't say why.",
    chapters: [
      { title: "Chapter 1: The Last Bucket", file: "01-the-last-bucket.txt" },
      { title: "Chapter 2: Crossing the Fen", file: "02-crossing-the-fen.txt" },
      { title: "Chapter 3: The Diggers' Ledger", file: "03-the-diggers-ledger.txt" },
    ],
  },
  {
    slug: "the-last-lighthouse",
    title: "The Last Lighthouse",
    blurb: "The final keeper of a coastline nobody sails anymore, and the light that won't go out.",
    chapters: [
      { title: "Chapter 1: The Handover", file: "01-the-handover.txt" },
      { title: "Chapter 2: Static on the Radio", file: "02-static-on-the-radio.txt" },
    ],
  },
];
