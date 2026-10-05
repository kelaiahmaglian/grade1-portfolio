# Grade 1 Learning Portfolio

This is a one-page website that shows a Grade 1 student's school projects. For each project it shows the subject, one sentence about it, and a photo.

It is plain HTML, CSS and JavaScript. There is no server, database or build step. To view it, double-click `index.html`.

```
grade1-portfolio/
├── index.html      page layout (you rarely need to edit this)
├── style.css       colors and design
├── script.js       ALL the portfolio content (edit this one)
├── favicon.svg     the little star icon in the browser tab
├── README.md
└── images/         put your photos here
```

---

## How to edit the portfolio

Open `script.js` in any text editor, such as Notepad, TextEdit or VS Code. **Part 1** at the top of the file holds all the content. Change only the words between the quotation marks.

| To change… | Search `script.js` for |
|---|---|
| Student name | `CHANGE STUDENT NAME HERE` |
| School year | `CHANGE SCHOOL YEAR HERE` |
| Projects | `ADD NEW PROJECT HERE` |
| Gallery photos | `ADD GALLERY PHOTO HERE` |
| Parent's message | `CHANGE PARENT MESSAGE HERE` |
| Subjects, achievements, journey | the `subjects`, `achievements` and `journey` lists |

Save the file and refresh the browser to see your changes.

### Add a new project

1. In `script.js`, copy one whole project block, including the comma after it:

   ```js
   {
       title: "My Family Tree",
       subject: "Araling Panlipunan",
       description: "I created a family tree to show the members of my family and how we are related.",
       image: "images/project-1.jpg",
       learned: "I learned that family members have different roles and responsibilities."
   },
   ```

2. Paste it on the line just above `// ADD NEW PROJECT HERE`.
3. Change the words. Keep `description` to one short sentence.
4. `subject` must match one of the subject names exactly: `English`, `Filipino`, `Mathematics`, `Science`, `Araling Panlipunan` or `MAPEH`.
5. `learned` is optional. Write `learned: ""` to hide the "What I Learned" box.

Projects appear on the page in the same order as in the list.

### Change the page title (for browser tabs and shared links)

At the top of `index.html`, update the name and school year in `<title>`, in the `description` line and in the `og:` lines. The page also corrects the tab title automatically from `script.js`. However, search engines and link previews read the version in `index.html`.

---

## Photos

- Put photos in the `images/` folder and use the same file names as in `script.js`. For example, `images/project-9.jpg`.
- File names must match exactly, including capital letters: `Project-1.JPG` is not the same as `project-1.jpg`.
- **Landscape photos (wider than tall) look best.** Project and gallery photos are shown in a 4:3 frame.
- Keep each photo under about 500 KB so the page loads quickly. Resizing to about 1200 px wide is plenty. You can use a free tool such as squoosh.app.
- If a photo is missing, the site shows a neat "Photo coming soon" box instead of a broken image.

---

## Child privacy checklist

- Show only a first name. Do not include an address, phone number, email, school name or exact location.
- **Remove location data from phone photos.** Phone photos often record GPS coordinates in the file.
  - On Windows: right-click the photo → Properties → Details → *Remove Properties and Personal Information*.
  - On iPhone: when sharing, tap *Options* and turn off *Location*.
- Avoid photos that show name tags, uniforms with the school name, or other children's faces, unless you have their parents' permission.
- To keep the site out of Google, open `index.html` and remove the `<!--` and `-->` around this line:
  `<meta name="robots" content="noindex, nofollow">`
- For a private, password-protected site, Cloudflare Pages can sit behind *Cloudflare Access*, which is free for small use.

---

## Put it online (free)

All three services below work with the folder exactly as it is. There is no build command, and the output folder is the folder itself.

**Netlify (easiest)**: go to <https://app.netlify.com/drop> and drag the whole `grade1-portfolio` folder onto the page.

**Cloudflare Pages**: in the Cloudflare dashboard, go to *Workers & Pages → Create → Pages → Upload assets*, then upload the folder. If you connect a Git repository instead, leave the build command empty and set the output directory to `/`.

**GitHub Pages**: upload the files to a GitHub repository. Then open *Settings → Pages*, choose *Deploy from a branch*, and select `main` and `/ (root)`.

---

## Technical notes

- No frameworks or libraries are used. The only outside request is for the Google Fonts Fredoka and Nunito. Without internet, the page falls back to system fonts.
- The page uses semantic sections and a skip link. The mobile menu and filter buttons can be used with the keyboard. The pop-ups use native `<dialog>` modals with Escape-to-close and focus return, and animations turn off for visitors who prefer reduced motion.
- It has been tested at widths of 320, 375, 768, 1024 and 1440 pixels.
