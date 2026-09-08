(function renderEditableContent() {
  const content = window.GLAMOUR_CONTENT || {};
  const publications = content.publications || [];
  const people = content.people || [];
  const peopleGroups = content.peopleGroups || [];
  const publicationsPerPage = 3;

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const slugify = (value) => String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const renderLinks = (links, className) => (links || [])
    .map((link) => `<a href="${escapeHtml(link.url)}" class="${className}">${escapeHtml(link.label)}</a>`)
    .join("");

  const latestList = document.querySelector("[data-latest-list]");
  if (latestList) {
    const latestPublications = publications.filter((publication) => publication.latest).slice(0, 3);
    latestList.innerHTML = latestPublications.map((publication) => {
      const primaryUrl = publication.latest.url || publication.links?.[0]?.url || publication.venueUrl || "#publications";
      return `
        <article class="latest-row">
          <a class="latest-media" href="${escapeHtml(primaryUrl)}">
            <img src="${escapeHtml(publication.latest.image)}" alt="${escapeHtml(publication.latest.imageAlt)}">
          </a>
          <div class="latest-copy">
            <p class="latest-venue">${escapeHtml(publication.venue)}</p>
            <h3><a href="${escapeHtml(primaryUrl)}">${escapeHtml(publication.title)}</a></h3>
            <p class="latest-summary">${escapeHtml(publication.latest.summary)}</p>
            <div class="latest-links">${renderLinks(publication.links, "")}</div>
          </div>
        </article>`;
    }).join("");
  }

  const peopleContainer = document.querySelector("[data-people-groups]");
  if (peopleContainer) {
    peopleContainer.innerHTML = peopleGroups.map((group, groupIndex) => {
      const members = people.filter((person) => person.group === group);
      if (!members.length) return "";

      const cards = members.map((person) => {
        const hasProfile = Boolean(person.bio || person.links?.length);
        const profileId = `person-${slugify(person.name)}`;
        const image = person.image
          ? `<img src="${escapeHtml(person.image)}" alt="${escapeHtml(person.name)}">`
          : "";
        return `
          <article class="profile-card${hasProfile ? " has-profile" : ""}"
            ${hasProfile ? `tabindex="0" role="button" aria-label="View ${escapeHtml(person.name)}'s profile" data-person-profile="${profileId}"` : ""}>
            <div class="profile-image" style="background: ${escapeHtml(person.color || "#d9d9d9")};">${image}</div>
            <h3>${escapeHtml(person.name)}</h3>
            ${person.role ? `<p class="profile-role">${escapeHtml(person.role)}</p>` : ""}
          </article>`;
      }).join("");

      return `
        <div class="people-group${groupIndex === 0 ? " people-group-faculty" : ""}">
          <h3 class="people-group-title">${escapeHtml(group)}</h3>
          <div class="people-grid">${cards}</div>
        </div>`;
    }).join("");
  }

  const publicationsTrack = document.querySelector("[data-publications-track]");
  if (publicationsTrack) {
    const pages = [];
    for (let index = 0; index < publications.length; index += publicationsPerPage) {
      pages.push(publications.slice(index, index + publicationsPerPage));
    }

    publicationsTrack.innerHTML = pages.map((page) => `
      <div class="publications-carousel-page">
        <div class="publications-list">
          ${page.map((publication) => {
            const venue = publication.venueUrl
              ? `<a href="${escapeHtml(publication.venueUrl)}" class="publication-venue">${escapeHtml(publication.venue)}</a>`
              : `<span class="publication-venue">${escapeHtml(publication.venue)}</span>`;
            return `
              <article class="publication-row">
                <div class="publication-info">
                  <h3>${escapeHtml(publication.title)}</h3>
                  <p class="publication-authors">${escapeHtml(publication.authors)}</p>
                </div>
                <div class="publication-meta">
                  ${venue}
                  <div class="publication-links">${renderLinks(publication.links, "publication-link")}</div>
                </div>
              </article>`;
          }).join("")}
        </div>
      </div>`).join("");
  }

  const profileDialog = document.querySelector("[data-profile-dialog]");
  if (profileDialog) {
    const closeButton = profileDialog.querySelector("[data-profile-close]");
    const openProfile = (profileId) => {
      const person = people.find((entry) => `person-${slugify(entry.name)}` === profileId);
      if (!person) return;

      profileDialog.querySelector("[data-profile-name]").textContent = person.name;
      profileDialog.querySelector("[data-profile-role]").textContent = person.role || person.group;
      profileDialog.querySelector("[data-profile-bio]").textContent = person.bio;
      profileDialog.querySelector("[data-profile-links]").innerHTML = renderLinks(person.links, "profile-dialog-link");
      profileDialog.showModal();
    };

    document.querySelectorAll("[data-person-profile]").forEach((card) => {
      card.addEventListener("click", () => openProfile(card.dataset.personProfile));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProfile(card.dataset.personProfile);
        }
      });
    });

    closeButton.addEventListener("click", () => profileDialog.close());
    profileDialog.addEventListener("click", (event) => {
      if (event.target === profileDialog) profileDialog.close();
    });
  }
})();
