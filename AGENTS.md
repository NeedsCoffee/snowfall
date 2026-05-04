# AGENTS.md

Guidance for agents working in this repository.

## Project Summary

This repo contains the Jekyll-based marketing site for romance author Robin Bayliss and the Snowball Falls series.

The site is content-heavy and relatively small. Most tasks fall into one of these buckets:

- update book metadata or links
- adjust homepage/category layout
- polish static marketing pages
- update styling in Sass
- verify the site still builds locally

## Stack

- Jekyll `4.x`
- `minima`
- Sass
- YAML data files

## Important Constraints

### Keep `minima`

The site is intentionally kept on the GitHub Pages-compatible `minima` stack.

Do not:

- migrate the project away from `minima`
- refactor theme plumbing just to remove Sass deprecation warnings
- "modernize" the build in ways that risk GitHub Pages compatibility unless explicitly asked

Sass deprecation warnings are known and acceptable unless they become actual build blockers.

### Preserve existing content tone

The site voice is warm, playful, cozy, and lightly humorous. When editing copy:

- keep the tone friendly and bookish
- avoid generic corporate phrasing
- avoid over-writing or adding filler
- preserve existing character/series naming exactly unless asked to change it

### Respect content-driven structure

The homepage is driven by data files, not hardcoded release ordering.

- featured “new release” is controlled by the `new-in` category tag in `_data/books.yml`
- homepage category section order and labels are controlled by `_data/categories.yml`

Prefer changing data over hardcoding titles in templates when the content model already supports the behavior.

## Key Files

- `_data/books.yml`: source of truth for book metadata
- `_data/categories.yml`: homepage category order and labels
- `index.md`: homepage markup and Liquid loops
- `library.md`: libraries page
- `about.md`: author page
- `contact.md`: contact page
- `privacy.md`: privacy page
- `_includes/header.html`: navigation
- `_layouts/default.html`: HTML shell and Google Fonts includes
- `assets/css/style.scss`: custom site styling
- `assets/images/`: covers and page images

## Book Data Rules

Each book entry in `_data/books.yml` may include:

- `cover_image`
- `overlay_title`
- `info_title`
- `subtitle`
- `summary`
- `buy_now_url`
- `listen_now_url`
- `season`
- `categories`

Behavioral expectations:

- if `buy_now_url` is blank, the UI should show `Coming Soon`
- if `listen_now_url` is blank, the UI should show `Listen Soon`
- if a book is meant to be the featured homepage release, it should carry the `new-in` category

If adding a new book image, place it in `assets/images/` and update the corresponding `cover_image` field.

## Styling Rules

- Primary styling lives in `assets/css/style.scss`
- Reuse existing spacing, button, and color patterns where possible
- Keep the site visually cozy and legible rather than turning it into a generic app UI
- When changing typography, update Google Fonts includes in `_layouts/default.html` if required

Avoid:

- introducing a JS framework
- adding unnecessary build tooling
- replacing simple Liquid/data solutions with JavaScript

## Contact Page

The contact page may remain partly placeholder if the form backend is not configured.

That is acceptable.

If polishing the contact page:

- make the page look intentional
- do not imply the form is production-ready if it is still a placeholder
- preserve or clarify any status messaging about the form not being wired up yet

## Local Workflow

Install gems:

```powershell
bundle install
```

Run locally:

```powershell
bundle exec jekyll serve --livereload
```

Build:

```powershell
bundle exec jekyll build
```

Open:

```text
http://127.0.0.1:4000/
```

If `ruby`, `bundle`, or `jekyll` are not available in the terminal, this workspace may rely on the local VS Code terminal PATH override.

## Verification Expectations

After making meaningful changes:

1. Run `bundle exec jekyll build` if available.
2. Check the relevant generated page in `_site/` if needed.
3. Confirm no accidental regressions in:
   - featured release selection
   - category rendering
   - fallback button states
   - navigation anchors

Warnings from Sass/minima are expected unless they turn into hard failures.

## Git Hygiene

Do not commit local build artifacts.

Ignored paths include:

- `_site/`
- `.jekyll-cache/`
- `.sass-cache/`
- `.bundle/`
- `vendor/bundle/`

Before committing:

- review `git status`
- make sure unrelated user edits are not swept in by accident
- if there are ambiguous user-made changes, ask before bundling them into your commit

## Deployment

Deployment is push-based from `main`.

Typical flow:

1. make the change
2. build locally
3. commit with a clear message
4. push `main`
