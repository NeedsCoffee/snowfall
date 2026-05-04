# Snowfall

Marketing site for romance author Robin Bayliss and the Snowball Falls series. The site is built with Jekyll and deployed as a static site at `https://robinbayliss.com`.

## Stack

- Jekyll `4.x`
- Minima theme
- Sass for custom styling
- YAML data files for book and category content

## Project Structure

- [_config.yml](/c:/Projects/snowfall/_config.yml:1): site config, plugins, Sass settings
- [index.md](/c:/Projects/snowfall/index.md:1): homepage
- [library.md](/c:/Projects/snowfall/library.md:1): library/borrowing page
- [about.md](/c:/Projects/snowfall/about.md:1): author page
- [privacy.md](/c:/Projects/snowfall/privacy.md:1): privacy policy
- [_data/books.yml](/c:/Projects/snowfall/_data/books.yml:1): book metadata, summaries, buy/audio links, category tags
- [_data/categories.yml](/c:/Projects/snowfall/_data/categories.yml:1): homepage category order and labels
- [_includes/header.html](/c:/Projects/snowfall/_includes/header.html:1): top navigation
- [_layouts/default.html](/c:/Projects/snowfall/_layouts/default.html:1): base HTML shell and font includes
- [assets/css/style.scss](/c:/Projects/snowfall/assets/css/style.scss:1): site styling
- [assets/images](/c:/Projects/snowfall/assets/images): covers and page artwork

## Local Development

### Requirements

- Ruby 4.x
- Bundler

### Install dependencies

```powershell
bundle install
```

### Run the site locally

```powershell
bundle exec jekyll serve --livereload
```

Open:

```text
http://127.0.0.1:4000/
```

If Ruby is not on your `PATH`, either open a fresh terminal after install or use the local workspace terminal configuration already added for VS Code.

### Build the site

```powershell
bundle exec jekyll build
```

Generated output goes to `_site/`.

## Content Editing

### Add or update a book

Edit [_data/books.yml](/c:/Projects/snowfall/_data/books.yml:1).

Each book entry can include:

- `cover_image`
- `info_title`
- `subtitle`
- `summary`
- `buy_now_url`
- `listen_now_url`
- `season`
- `categories`

Notes:

- If `listen_now_url` is empty, the homepage shows `Listen Soon`.
- If `buy_now_url` is empty, the homepage shows `Coming Soon`.
- The homepage featured release is driven by the `new-in` category tag.

### Change homepage category sections

Edit [_data/categories.yml](/c:/Projects/snowfall/_data/categories.yml:1).

This controls:

- section order
- section titles
- optional kickers such as `Browse by category`

Book-to-category assignment is still done per book in `books.yml`.

### Add images

Place new assets in [assets/images](/c:/Projects/snowfall/assets/images).

Typical uses:

- book covers for homepage cards and featured sections
- supporting page imagery such as the libraries page
- collection graphics

## Styling Notes

- Most custom design work lives in [assets/css/style.scss](/c:/Projects/snowfall/assets/css/style.scss:1).
- The site currently uses Google Fonts loaded in [_layouts/default.html](/c:/Projects/snowfall/_layouts/default.html:1).
- Jekyll compiles Sass automatically during `serve` and `build`.

## Git Notes

Ignored local artifacts are defined in [`.gitignore`](/c:/Projects/snowfall/.gitignore:1), including:

- `_site/`
- `.jekyll-cache/`
- `.sass-cache/`
- `.bundle/`
- `vendor/bundle/`

## Deployment

The site is committed from `main` and published as a static site behind the custom domain in [CNAME](/c:/Projects/snowfall/CNAME:1).

Typical workflow:

1. Update content or styles.
2. Run `bundle exec jekyll build` or `bundle exec jekyll serve --livereload`.
3. Commit changes.
4. Push `main`.

## Known Maintenance Items

- Sass builds currently emit deprecation warnings from both local styles and the `minima` theme.
- The site is intentionally kept on the GitHub Pages-compatible `minima` stack, so these warnings are not a priority unless they become actual build blockers.
- Do not refactor the theme away from `minima` just to remove warnings. Compatibility with the GitHub-hosted setup takes precedence.
