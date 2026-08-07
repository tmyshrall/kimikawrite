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
      { title: "Chapter 2: The Student Council President", file: "02-the-student-council-president.txt" },
      { title: "Chapter 3: New Faces", file: "03-new-faces.txt" },
      { title: "Chapter 4: Jewelry Box", file: "04-jewelry-box.txt" },
      { title: "Chapter 5: Caught In The Rain", file: "05-caught-in-the-rain.txt" },
      { title: "Chapter 6: Reasons We Stay", file: "06-reasons-we-stay.txt" },
      { title: "Chapter 7: Cheers To You", file: "07-cheers-to-you.txt" },
      { title: "Chapter 8: Things Can't Stay Unfinished", file: "08-things-cant-stay-unfinished.txt" },
      { title: "Chapter 9: All Of Me", file: "09-all-of-me.txt" },
      { title: "Chapter 10: Words You Want To Say", file: "10-words-you-want-to-say.txt" },
      { title: "Chapter 11: A Stranger", file: "11-a-stranger.txt" },
      { title: "Chapter 12: To Relearn", file: "12-to-relearn.txt" },
      { title: "Chapter 13: If You Could Save Yourself", file: "13-if-you-could-save-yourself.txt" },
      { title: "Chapter 14: A Wonderful Life", file: "14-a-wonderful-life.txt" },
    ],
  },
];
