/* ==========================================================================
   GRADE 1 LEARNING PORTFOLIO
   --------------------------------------------------------------------------
   PARENTS: Everything you need to change is in PART 1 below.
   Only change the words between the quotation marks "like this".
   You do not need to touch PART 2. It builds the page for you.
   ========================================================================== */


/* ==========================================================================
   PART 1 — PORTFOLIO CONTENT (edit this part)
   ========================================================================== */

// ---------------------------------------------------------------------------
// ABOUT THE STUDENT
// ---------------------------------------------------------------------------
const student = {
    // CHANGE STUDENT NAME HERE
    name: "Kelaiah",

    grade: "Grade 1",

    // CHANGE SCHOOL YEAR HERE
    schoolYear: "2026–2027",

    // Profile photo. Put the photo in the "images" folder with this name.
    photo: "images/profile.jpg",

    // Shown after "Hi! I'm Kelaiah." at the top of the page.
    intro: "This portfolio shows some of the projects, activities, and things I learned during Grade 1."
};


// ---------------------------------------------------------------------------
// MY LEARNING PROJECTS
//
// To add a project:
//   1. Copy one whole { ... } block, including the comma after it.
//   2. Paste it where it says "ADD NEW PROJECT HERE".
//   3. Change the words.
//
// title       - the project name
// subject     - must match a subject name from the SUBJECTS list below
// description - ONE short sentence about the project
// image       - the photo of the project inside the "images" folder
// moreImages  - (optional) extra photos shown when the project is opened.
//               Leave it out if there is only one photo.
// learned     - (optional) one short sentence. Use "" to hide it.
// ---------------------------------------------------------------------------
const projects = [
    {
        title: "My House Model",
        subject: "Araling Panlipunan",
        description: "I built a model house with a roof and a ladder using popsicle sticks and cardboard.",
        image: "images/araling-panlipunan.jpg",
        learned: "I learned that a home is where a family lives, stays safe, and takes care of each other."
    },
    {
        title: "Kelaiah's Store",
        subject: "Mathematics",
        description: "I made a pretend store with prices and answered math questions about buying things.",
        image: "images/math-2.jpg",
        moreImages: [
            { image: "images/math-1.jpg", caption: "Solving a problem on my whiteboard" }
        ],
        learned: "I learned how to add, subtract, and compare prices in pesos."
    },
    {
        title: "Police and the Thief",
        subject: "English",
        description: "I wrote my own storybook called \"Police and the Thief.\"",
        image: "images/english.jpg",
        moreImages: [
            { image: "images/english-draft.jpg", caption: "Writing my first draft" }
        ],
        learned: "I learned that a story has a beginning, a middle, and an end."
    },
    {
        title: "Ang Pusa Kong si Mochi",
        subject: "Filipino",
        description: "I wrote a true story in Filipino about my cat, Mochi.",
        image: "images/filipino.jpg",
        moreImages: [
            { image: "images/filipino-draft.jpg", caption: "Writing my first draft" }
        ],
        learned: "I learned how to write simple sentences in Filipino."
    },
    {
        title: "Solar System Model",
        subject: "Science",
        description: "I put together and painted a model of the solar system.",
        image: "images/science-1.jpg",
        moreImages: [
            { image: "images/science-2.jpg", caption: "Painting the planets" }
        ],
        learned: "I learned the names of the planets and that they move around the Sun."
    },
    {
        title: "Bottle Shakers",
        subject: "MAPEH",
        description: "I filled bottles with shells and decorated them to make my own shakers.",
        image: "images/mapeh.jpg",
        moreImages: [
            { image: "images/mapeh-2.jpg", caption: "Decorating my shakers" }
        ],
        learned: "I learned that I can make music and keep a beat with things I made myself."
    },
    {
        title: "My Christian Values",
        subject: "Values Education",
        description: "I made a poster about prayer, love, kindness, and respect.",
        image: "images/values-2.jpg",
        moreImages: [
            { image: "images/values-1.jpg", caption: "Gluing the pictures on my poster" }
        ],
        learned: "I learned to show kindness and respect to my family and friends."
    },
    // ADD NEW PROJECT HERE
];


// ---------------------------------------------------------------------------
// SUBJECTS ("What I Learned" section + the filter buttons)
//
// color can be: "peach", "mint", "sky", "lemon", "lavender", or "pink"
// ---------------------------------------------------------------------------
const subjects = [
    {
        name: "English",
        icon: "📖",
        color: "sky",
        description: "I practiced reading, phonics, spelling, and writing simple sentences."
    },
    {
        name: "Filipino",
        icon: "✏️",
        color: "pink",
        description: "I learned to read, write, and say simple Filipino words and sentences."
    },
    {
        name: "Mathematics",
        icon: "🧮",
        color: "lemon",
        description: "I practiced numbers, addition, subtraction, shapes, and measurement."
    },
    {
        name: "Science",
        icon: "🔬",
        color: "mint",
        description: "I explored animals, plants, my body, and the world around me."
    },
    {
        name: "Araling Panlipunan",
        icon: "🏡",
        color: "peach",
        description: "I learned about myself, my family, my school, and my community."
    },
    {
        name: "MAPEH",
        icon: "🎨",
        color: "lavender",
        description: "I sang, danced, made art, played games, and learned healthy habits."
    },
    {
        name: "Values Education",
        icon: "🙏",
        color: "pink",
        description: "I learned about prayer, love, kindness, and respect."
    }
];


// ---------------------------------------------------------------------------
// MY ACHIEVEMENTS
// To add one, copy a line and change the icon and words.
// ---------------------------------------------------------------------------
const achievements = [
    { icon: "⭐", title: "Completed Grade 1 Projects" },
    { icon: "📚", title: "Improved Reading Skills" },
    { icon: "🎨", title: "Completed Creative Activities" },
    { icon: "🧮", title: "Practiced Math Skills" },
    { icon: "🏆", title: "Participated in School Activities" }
];


// ---------------------------------------------------------------------------
// MY GRADE 1 JOURNEY (keep each one short)
// ---------------------------------------------------------------------------
const journey = [
    { month: "June", text: "Started Grade 1" },
    { month: "July", text: "Learned new routines" },
    { month: "August", text: "Completed new projects" },
    { month: "September", text: "Discovered new skills" },
    { month: "October", text: "Created more school activities" },
    { month: "November", text: "Continued learning" },
    { month: "December", text: "Celebrated my progress" },
    { month: "January", text: "Started new lessons" },
    { month: "February", text: "Completed more projects" },
    { month: "March", text: "Finished Grade 1" }
];


// ---------------------------------------------------------------------------
// GALLERY (extra photos of school activities and learning moments)
//
// image   - the photo inside the "images" folder
// alt     - describes the photo for people who cannot see it
// caption - a few words shown under the photo
// ---------------------------------------------------------------------------
const gallery = [
    {
        image: "images/actual-english.jpg",
        alt: "Writing answers to reading questions in an English worksheet",
        caption: "English: Answering reading questions"
    },
    {
        image: "images/actual-math.jpg",
        alt: "Writing the numbers that come between in a math book",
        caption: "Math: Numbers that come between"
    },
    {
        image: "images/actual-math-1.jpg",
        alt: "Answering a math worksheet about skip counting and ordinal numbers",
        caption: "Math: Skip counting and ordinal numbers"
    },
    {
        image: "images/actual-science.jpg",
        alt: "Holding a Moon model next to a globe in the sunlight",
        caption: "Science: The Sun, Earth, and Moon"
    },
    {
        image: "images/actual-science-1.jpg",
        alt: "Using a magnifying glass to focus sunlight on the ground",
        caption: "Science: Focusing sunlight with a magnifying glass"
    },
    {
        image: "images/actual-mapeh.jpg",
        alt: "Playing Row, Row, Row Your Boat on a keyboard from a music book",
        caption: "MAPEH: Playing \"Row, Row, Row Your Boat\""
    },
    {
        image: "images/actual-values.jpg",
        alt: "Writing answers about King Josiah in a Bible lesson worksheet",
        caption: "Values: Learning about King Josiah"
    },
    {
        image: "images/actual-values-1.jpg",
        alt: "Writing Bible verses on a small whiteboard during Bible study",
        caption: "Values: Writing Bible verses"
    },
    // ADD GALLERY PHOTO HERE
];


// ---------------------------------------------------------------------------
// CHANGE PARENT MESSAGE HERE
// Each line in "message" becomes its own paragraph.
// ---------------------------------------------------------------------------
const parentNote = {
    greeting: "To Kelaiah,",
    message: [
        "We are so proud of everything you learned, created, and accomplished during Grade 1.",
        "Keep learning, keep asking questions, and always be curious.",
        "We love you!"
    ],
    closing: "Love,",
    signature: "Mom & Dad ❤️"
};

// Shown at the very bottom of the page.
const footerCredit = "Made with ❤️ by Mom & Dad";


/* ==========================================================================
   PART 2 — PAGE BUILDER (no need to edit below this line)
   ========================================================================== */
(function () {
    "use strict";

    const TINTS = ["peach", "mint", "sky", "lemon", "lavender", "pink"];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const $ = (selector) => document.querySelector(selector);

    /* ---------- Small helpers ---------- */

    function make(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text != null) node.textContent = text;
        return node;
    }

    function icon(name) {
        const ns = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(ns, "svg");
        svg.setAttribute("class", "icon");
        svg.setAttribute("aria-hidden", "true");
        const use = document.createElementNS(ns, "use");
        use.setAttribute("href", "#i-" + name);
        svg.appendChild(use);
        return svg;
    }

    function setTint(node, color) {
        const tint = TINTS.includes(color) ? color : "sky";
        node.style.setProperty("--tint", "var(--" + tint + ")");
        node.style.setProperty("--tint-strong", "var(--" + tint + "-strong)");
    }

    function findSubject(name) {
        const wanted = String(name || "").trim().toLowerCase();
        return subjects.find((s) => s.name.toLowerCase() === wanted);
    }

    function projectsIn(subjectName) {
        const wanted = subjectName.toLowerCase();
        return projects.filter((p) => String(p.subject).trim().toLowerCase() === wanted);
    }

    function plural(count, word) {
        return count + " " + word + (count === 1 ? "" : "s");
    }

    /* ---------- Images (with a friendly placeholder if a photo is missing) ---------- */

    function defaultPlaceholder(alt) {
        const box = make("div", "img-placeholder");
        box.setAttribute("role", "img");
        box.setAttribute("aria-label", alt);
        box.appendChild(icon("photo"));
        box.appendChild(make("span", "", "Photo coming soon"));
        return box;
    }

    function imageFrame(src, alt, options) {
        const opts = options || {};
        const frame = make("div", "img-frame");
        const showPlaceholder = () => {
            frame.classList.add("is-missing");
            frame.replaceChildren((opts.placeholder || defaultPlaceholder)(alt));
        };

        if (!src) {
            showPlaceholder();
            return frame;
        }

        const img = document.createElement("img");
        img.alt = alt;
        img.decoding = "async";
        if (opts.lazy !== false) img.loading = "lazy";
        img.addEventListener("error", showPlaceholder, { once: true });
        img.src = src;
        frame.appendChild(img);
        return frame;
    }

    /* ---------- Student details ---------- */

    function fillStudentDetails() {
        const values = {
            name: student.name,
            grade: student.grade,
            schoolYear: student.schoolYear,
            intro: student.intro,
            footerCredit: footerCredit
        };
        document.querySelectorAll("[data-bind]").forEach((node) => {
            const value = values[node.dataset.bind];
            if (value) node.textContent = value;
        });

        document.title = student.name + "'s " + student.grade + " Learning Portfolio | " + student.schoolYear;

        const photo = $("#profile-photo");
        photo.replaceChildren(imageFrame(student.photo, "Photo of " + student.name, {
            lazy: false,
            placeholder: (alt) => {
                const box = make("div", "img-placeholder img-placeholder--initial", student.name.charAt(0));
                box.setAttribute("role", "img");
                box.setAttribute("aria-label", alt);
                return box;
            }
        }));
    }

    /* ---------- Projects ---------- */

    const projectGrid = $("#project-grid");
    const filterBar = $("#project-filters");
    const filterStatus = $("#filter-status");
    const emptyState = $("#empty-state");
    const projectItems = [];

    function renderProjects() {
        projects.forEach((project, index) => {
            const subject = findSubject(project.subject);
            const item = make("li", "reveal");
            item.style.setProperty("--delay", (index % 4) * 70 + "ms");
            item.dataset.subject = String(project.subject).trim().toLowerCase();

            const card = make("article", "project-card");
            setTint(card, subject && subject.color);

            const cardMedia = imageFrame(project.image, "Photo of the project: " + project.title);
            const photoCount = 1 + (project.moreImages || []).length;
            if (photoCount > 1) {
                const badge = make("span", "photo-badge");
                badge.appendChild(icon("photo"));
                badge.appendChild(document.createTextNode(photoCount + " photos"));
                cardMedia.appendChild(badge);
            }
            card.appendChild(cardMedia);

            const body = make("div", "project-body");

            const title = make("h3", "project-title");
            const open = make("button", "project-open", project.title);
            open.type = "button";
            open.setAttribute("aria-haspopup", "dialog");
            open.addEventListener("click", () => openProject(index, open));
            title.appendChild(open);

            const subjectLine = make("p", "project-subject");
            subjectLine.appendChild(make("span", "project-subject-label", "Subject:"));
            subjectLine.appendChild(make("span", "subject-pill", project.subject));

            const more = make("span", "project-more", "View project");
            more.setAttribute("aria-hidden", "true");
            more.appendChild(icon("arrow"));

            body.append(title, subjectLine, make("p", "project-desc", project.description), more);
            card.appendChild(body);
            item.appendChild(card);
            projectGrid.appendChild(item);
            projectItems.push(item);
        });
    }

    function renderFilters() {
        const options = [{ name: "All" }].concat(subjects);
        options.forEach((option) => {
            const button = make("button", "filter-button");
            button.type = "button";
            button.dataset.filter = option.name;
            button.setAttribute("aria-pressed", option.name === "All" ? "true" : "false");
            if (option.name !== "All") {
                setTint(button, option.color);
                const dot = make("span", "filter-dot");
                dot.setAttribute("aria-hidden", "true");
                button.appendChild(dot);
            }
            button.appendChild(document.createTextNode(option.name));
            button.addEventListener("click", () => applyFilter(option.name));
            filterBar.appendChild(button);
        });
    }

    function applyFilter(subjectName) {
        const showAll = subjectName === "All";
        const wanted = subjectName.toLowerCase();
        let shown = 0;

        projectItems.forEach((item) => {
            const match = showAll || item.dataset.subject === wanted;
            item.hidden = !match;
            if (match) shown++;
        });

        filterBar.querySelectorAll(".filter-button").forEach((button) => {
            button.setAttribute("aria-pressed", button.dataset.filter === subjectName ? "true" : "false");
        });

        emptyState.hidden = shown > 0;
        filterStatus.textContent = showAll
            ? "Showing all " + plural(shown, "project")
            : "Showing " + shown + " " + subjectName + " " + (shown === 1 ? "project" : "projects");
    }

    /* ---------- Subjects ---------- */

    function renderSubjects() {
        const grid = $("#subject-grid");
        subjects.forEach((subject, index) => {
            const item = make("li", "reveal");
            item.style.setProperty("--delay", (index % 3) * 70 + "ms");
            const card = make("article", "subject-card");
            setTint(card, subject.color);

            const emoji = make("span", "subject-emoji", subject.icon);
            emoji.setAttribute("aria-hidden", "true");

            card.append(emoji, make("h3", "", subject.name), make("p", "", subject.description));

            const count = projectsIn(subject.name).length;
            if (count > 0) {
                const link = make("button", "subject-link", "See " + plural(count, "project"));
                link.type = "button";
                link.setAttribute("aria-label", "See " + plural(count, subject.name + " project"));
                link.appendChild(icon("arrow"));
                link.addEventListener("click", () => {
                    applyFilter(subject.name);
                    const heading = $("#projects-title");
                    $("#projects").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
                    heading.focus({ preventScroll: true });
                });
                card.appendChild(link);
            } else {
                card.appendChild(make("p", "subject-none", "Projects coming soon"));
            }

            item.appendChild(card);
            grid.appendChild(item);
        });
    }

    /* ---------- Achievements, journey, note ---------- */

    function renderAchievements() {
        const grid = $("#achievement-grid");
        achievements.forEach((achievement, index) => {
            const item = make("li", "reveal");
            item.style.setProperty("--delay", (index % 5) * 70 + "ms");
            const card = make("div", "achievement-card");
            setTint(card, TINTS[index % TINTS.length]);
            const emoji = make("span", "achievement-emoji", achievement.icon);
            emoji.setAttribute("aria-hidden", "true");
            card.append(emoji, make("h3", "", achievement.title));
            item.appendChild(card);
            grid.appendChild(item);
        });
    }

    function renderJourney() {
        const list = $("#timeline");
        journey.forEach((step, index) => {
            const item = make("li", "timeline-item reveal");
            setTint(item, TINTS[index % TINTS.length]);
            const card = make("div", "timeline-card");
            card.append(make("span", "timeline-month", step.month), make("span", "timeline-text", step.text));
            item.appendChild(card);
            list.appendChild(item);
        });
    }

    function renderNote() {
        const body = $("#note-body");
        body.appendChild(make("p", "note-greeting", parentNote.greeting));
        parentNote.message.forEach((line) => body.appendChild(make("p", "", line)));
        body.appendChild(make("p", "note-closing", parentNote.closing));
        body.appendChild(make("p", "note-signature", parentNote.signature));
    }

    /* ---------- Dialogs (project details + lightbox) ---------- */

    let returnFocusTo = null;

    function openDialog(dialog, trigger) {
        returnFocusTo = trigger || document.activeElement;
        // showModal() keeps keyboard focus inside the box and lets Escape close it
        dialog.showModal();
        root.classList.add("modal-open");
        const close = dialog.querySelector("[data-close]");
        if (close) close.focus();
    }

    function setupDialog(dialog) {
        dialog.querySelectorAll("[data-close]").forEach((button) => {
            button.addEventListener("click", () => dialog.close());
        });
        // Click on the dark area outside the box closes it
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) dialog.close();
        });
        dialog.addEventListener("close", () => {
            root.classList.remove("modal-open");
            if (returnFocusTo && document.contains(returnFocusTo)) {
                returnFocusTo.focus();
            }
        });
    }

    const projectModal = $("#project-modal");

    function openProject(index, trigger) {
        const project = projects[index];
        const subject = findSubject(project.subject);
        setTint(projectModal, subject && subject.color);

        const photos = [{ image: project.image, caption: "My finished project" }]
            .concat(project.moreImages || []);
        const media = $("#modal-media");
        const showModalPhoto = (photo) => {
            const alt = "Photo of the project: " + project.title + (photo.caption ? " (" + photo.caption + ")" : "");
            media.replaceChildren(imageFrame(photo.image, alt, { lazy: false }));
        };
        showModalPhoto(photos[0]);

        const thumbs = $("#modal-thumbs");
        thumbs.replaceChildren();
        thumbs.hidden = photos.length < 2;
        if (photos.length > 1) {
            photos.forEach((photo, photoIndex) => {
                const thumb = make("button", "modal-thumb");
                thumb.type = "button";
                thumb.setAttribute("aria-label", "Show photo: " + (photo.caption || "photo " + (photoIndex + 1)));
                thumb.setAttribute("aria-pressed", photoIndex === 0 ? "true" : "false");
                thumb.appendChild(imageFrame(photo.image, "", { lazy: false }));
                if (photo.caption) thumb.appendChild(make("span", "modal-thumb-caption", photo.caption));
                thumb.addEventListener("click", () => {
                    showModalPhoto(photo);
                    thumbs.querySelectorAll(".modal-thumb").forEach((other) => {
                        other.setAttribute("aria-pressed", other === thumb ? "true" : "false");
                    });
                });
                thumbs.appendChild(thumb);
            });
        }
        $("#modal-subject").textContent = project.subject;
        $("#modal-title").textContent = project.title;
        $("#modal-description").textContent = project.description;

        const hasLearned = Boolean(project.learned && project.learned.trim());
        $("#modal-learned-box").hidden = !hasLearned;
        $("#modal-learned").textContent = hasLearned ? project.learned : "";

        openDialog(projectModal, trigger);
        projectModal.querySelector(".modal-scroll").scrollTop = 0;
    }

    /* ---------- Gallery ---------- */

    const lightbox = $("#lightbox");
    let lightboxIndex = 0;

    function renderGallery() {
        const grid = $("#gallery-grid");
        gallery.forEach((photo, index) => {
            const item = make("li", "gallery-item reveal");
            item.style.setProperty("--delay", (index % 3) * 70 + "ms");
            setTint(item, TINTS[(index + 2) % TINTS.length]);

            const button = make("button", "gallery-button");
            button.type = "button";
            button.setAttribute("aria-haspopup", "dialog");
            button.setAttribute("aria-label", "View larger photo: " + photo.caption);
            button.appendChild(imageFrame(photo.image, photo.alt));
            button.appendChild(make("span", "gallery-caption", photo.caption));
            button.addEventListener("click", () => {
                showPhoto(index);
                openDialog(lightbox, button);
            });

            item.appendChild(button);
            grid.appendChild(item);
        });
    }

    function showPhoto(index) {
        lightboxIndex = (index + gallery.length) % gallery.length;
        const photo = gallery[lightboxIndex];
        setTint(lightbox, TINTS[(lightboxIndex + 2) % TINTS.length]);
        $("#lightbox-media").replaceChildren(imageFrame(photo.image, photo.alt, { lazy: false }));
        $("#lightbox-caption").textContent = photo.caption;
        $("#lightbox-count").textContent = (lightboxIndex + 1) + " / " + gallery.length;
    }

    function setupLightbox() {
        const single = gallery.length < 2;
        $("#lightbox-prev").hidden = single;
        $("#lightbox-next").hidden = single;
        $("#lightbox-prev").addEventListener("click", () => showPhoto(lightboxIndex - 1));
        $("#lightbox-next").addEventListener("click", () => showPhoto(lightboxIndex + 1));
        lightbox.addEventListener("keydown", (event) => {
            if (single) return;
            if (event.key === "ArrowLeft") showPhoto(lightboxIndex - 1);
            if (event.key === "ArrowRight") showPhoto(lightboxIndex + 1);
        });
    }

    /* ---------- Mobile menu ---------- */

    function setupNav() {
        const toggle = $(".nav-toggle");
        const nav = $("#site-nav");

        const setOpen = (open) => {
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            nav.classList.toggle("is-open", open);
        };

        toggle.addEventListener("click", () => {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        nav.addEventListener("click", (event) => {
            if (event.target.closest("a")) setOpen(false);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && nav.classList.contains("is-open")) {
                setOpen(false);
                toggle.focus();
            }
        });

        document.addEventListener("click", (event) => {
            if (nav.classList.contains("is-open") && !event.target.closest(".header-inner")) {
                setOpen(false);
            }
        });

        // Highlight the menu link for the section on screen
        if (!("IntersectionObserver" in window)) return;
        const links = Array.from(nav.querySelectorAll("a"));
        const sections = links
            .map((link) => document.querySelector(link.getAttribute("href")))
            .filter(Boolean);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((link) => {
                    if (link.getAttribute("href") === "#" + entry.target.id) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            });
        }, { rootMargin: "-40% 0px -55% 0px" });

        sections.forEach((section) => observer.observe(section));
    }

    /* ---------- Gentle fade-in on scroll ---------- */

    function setupReveal() {
        const items = document.querySelectorAll(".reveal");
        if (reduceMotion || !("IntersectionObserver" in window)) {
            items.forEach((item) => item.classList.add("is-visible"));
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
        items.forEach((item) => observer.observe(item));
    }

    /* ---------- Build the page ---------- */

    fillStudentDetails();
    renderFilters();
    renderProjects();
    applyFilter("All");
    renderSubjects();
    renderAchievements();
    renderJourney();
    renderGallery();
    renderNote();
    setupDialog(projectModal);
    setupDialog(lightbox);
    setupLightbox();
    setupNav();
    setupReveal();
})();
