# E-GLAMOUR Website

## Add a publication

Open `content/publications.js`, copy one publication object, and add the new object to the top of `window.GLAMOUR_CONTENT.publications`.

- `title`, `authors`, `venue`, and `links` populate the Publications section; `year` keeps the entry ready for future sorting or grouping.
- `venueUrl` is optional.
- Add a `latest` block to also feature the item in Latest Research. The first three publications with a `latest` block are shown there; `latest.url` controls the feature's main link.
- Put a feature image in `images/graphics/` and reference its relative path from `latest.image`.

## Update Latest Research

Latest Research is generated from `content/publications.js`; there is no second copy of the publication to keep in sync. Add, remove, or reorder a publication's `latest` block to change this section.

## Add or edit a person

Open `content/people.js`. Edit the matching object, or copy one to add a member. Valid groups are listed in `peopleGroups` at the bottom of that file.

- `image`, `role`, `bio`, and `links` are optional.
- Put portraits in `images/people/`.
- A person with a bio or links becomes a clickable card with an accessible profile dialog.
- Link objects use the format `{ label: "Website", url: "https://example.com" }`.