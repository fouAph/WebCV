/**
 * UI Rendering and DOM Manipulation Engine
 */

export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Toast Notification System
 */
export function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✓';
  if (type === 'error') icon = '✕';

  toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Render Profile / Hero Section
 */
export function renderProfile(profile) {
  const avatarEl = document.getElementById('hero-avatar');
  const nameEl = document.getElementById('hero-name');
  const titleEl = document.getElementById('hero-title');
  const bioEl = document.getElementById('hero-bio');
  const statusEl = document.getElementById('hero-status-text');
  const locationEl = document.getElementById('hero-location');
  const emailEl = document.getElementById('hero-email');
  const skillsContainer = document.getElementById('hero-skills');
  const socialLinksContainer = document.getElementById('hero-socials');

  if (avatarEl && profile.avatarUrl) avatarEl.src = profile.avatarUrl;
  if (nameEl) nameEl.textContent = profile.name || '';
  if (titleEl) titleEl.textContent = profile.title || '';
  if (bioEl) bioEl.textContent = profile.bio || '';
  if (statusEl) statusEl.textContent = profile.statusText || 'Available for opportunities';
  if (locationEl) locationEl.textContent = profile.location || '';
  
  if (emailEl && profile.email) {
    emailEl.href = `mailto:${profile.email}`;
    emailEl.textContent = profile.email;
  }

  // Render Skill Tags
  if (skillsContainer && Array.isArray(profile.skills)) {
    skillsContainer.innerHTML = profile.skills
      .map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`)
      .join('');
  }

  // Render Social Links
  if (socialLinksContainer && profile.socials) {
    const s = profile.socials;
    const links = [];
    if (s.github) links.push(`<a href="${escapeHtml(s.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub</a>`);
    if (s.linkedin) links.push(`<a href="${escapeHtml(s.linkedin)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">LinkedIn</a>`);
    if (s.website) links.push(`<a href="${escapeHtml(s.website)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Website</a>`);
    socialLinksContainer.innerHTML = links.join('');
  }
}

/**
 * Render Work Experience Timeline
 */
export function renderExperiences(experiences) {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  if (!experiences || experiences.length === 0) {
    container.innerHTML = `<p class="section-desc">No work experiences added yet. Click "+ Add Experience" above.</p>`;
    return;
  }

  container.innerHTML = experiences.map(exp => {
    const highlightsHtml = Array.isArray(exp.highlights) && exp.highlights.length > 0
      ? `<ul class="timeline-highlights">
          ${exp.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>`
      : '';

    const tagsHtml = Array.isArray(exp.tags) && exp.tags.length > 0
      ? `<div class="hero-skills-wrap" style="margin-top:0.75rem;">
          ${exp.tags.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')}
        </div>`
      : '';

    return `
      <div class="timeline-item ${exp.isCurrent ? 'is-current' : ''} animate-fade-in" data-id="${escapeHtml(exp.id)}">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="item-action-overlay edit-trigger">
            <button class="btn btn-secondary btn-sm btn-edit-exp" data-id="${escapeHtml(exp.id)}" title="Edit Entry">✎ Edit</button>
            <button class="btn btn-secondary btn-sm btn-del-exp" data-id="${escapeHtml(exp.id)}" title="Delete Entry" style="color:var(--accent-pink);">✕</button>
          </div>
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
              <div class="timeline-company">${escapeHtml(exp.company)}</div>
            </div>
            <span class="timeline-period">${escapeHtml(exp.period)}</span>
          </div>
          <p class="timeline-desc">${escapeHtml(exp.description)}</p>
          ${highlightsHtml}
          ${tagsHtml}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Education Cards
 */
export function renderEducation(education) {
  const container = document.getElementById('education-grid');
  if (!container) return;

  if (!education || education.length === 0) {
    container.innerHTML = `<p class="section-desc">No education entries added yet.</p>`;
    return;
  }

  container.innerHTML = education.map(edu => {
    return `
      <div class="education-card animate-fade-in" data-id="${escapeHtml(edu.id)}">
        <div class="item-action-overlay edit-trigger">
          <button class="btn btn-secondary btn-sm btn-edit-edu" data-id="${escapeHtml(edu.id)}" title="Edit Entry">✎ Edit</button>
          <button class="btn btn-secondary btn-sm btn-del-edu" data-id="${escapeHtml(edu.id)}" title="Delete Entry" style="color:var(--accent-pink);">✕</button>
        </div>
        <h3 class="education-degree">${escapeHtml(edu.degree)}</h3>
        <div class="education-inst">${escapeHtml(edu.institution)}</div>
        ${edu.honor ? `<span class="education-honor">${escapeHtml(edu.honor)}</span>` : ''}
        <div class="timeline-period" style="display:inline-block; margin-bottom:0.75rem;">${escapeHtml(edu.period)}</div>
        <p class="section-desc" style="font-size:0.9rem;">${escapeHtml(edu.description)}</p>
      </div>
    `;
  }).join('');
}

/**
 * Render Project Showcase
 */
export function renderProjects(projects, activeCategory = 'All') {
  const gridContainer = document.getElementById('projects-grid');
  const tabsContainer = document.getElementById('project-filter-tabs');
  if (!gridContainer) return;

  // Extract unique categories for filter tabs
  if (tabsContainer) {
    const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="filter-chip ${cat === activeCategory ? 'active' : ''}" data-category="${escapeHtml(cat)}">
        ${escapeHtml(cat)}
      </button>
    `).join('');
  }

  // Filter projects
  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    gridContainer.innerHTML = `<p class="section-desc" style="grid-column: 1 / -1;">No projects in this category.</p>`;
    return;
  }

  gridContainer.innerHTML = filtered.map(proj => {
    const tagsHtml = Array.isArray(proj.tags)
      ? proj.tags.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')
      : '';

    const linksHtml = [];
    if (proj.liveUrl) {
      linksHtml.push(`
        <a href="${escapeHtml(proj.liveUrl)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
          <span>Live Demo</span> ↗
        </a>
      `);
    }
    if (proj.repoUrl) {
      linksHtml.push(`
        <a href="${escapeHtml(proj.repoUrl)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
          <span>Source Code</span> ↗
        </a>
      `);
    }

    return `
      <div class="project-card animate-fade-in" style="--card-accent: ${escapeHtml(proj.accentColor || '#6366f1')};" data-id="${escapeHtml(proj.id)}">
        <div class="item-action-overlay edit-trigger">
          <button class="btn btn-secondary btn-sm btn-edit-proj" data-id="${escapeHtml(proj.id)}" title="Edit Project">✎ Edit</button>
          <button class="btn btn-secondary btn-sm btn-del-proj" data-id="${escapeHtml(proj.id)}" title="Delete Project" style="color:var(--accent-pink);">✕</button>
        </div>
        <div class="project-top">
          <span class="project-category">${escapeHtml(proj.category || 'Project')}</span>
          ${proj.featured ? `<span class="project-badge-feat">★ Featured</span>` : ''}
        </div>
        <div>
          <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          <p class="project-desc">${escapeHtml(proj.description)}</p>
        </div>
        <div class="project-bottom">
          <div class="project-tags">${tagsHtml}</div>
          ${linksHtml.length > 0 ? `<div class="project-links">${linksHtml.join('')}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Personal Vault / Knowledge Base
 */
export function renderVault(vaultItems, filterType = 'All', searchQuery = '') {
  const container = document.getElementById('vault-grid');
  if (!container) return;

  let filtered = [...vaultItems];

  // Category Filter
  if (filterType !== 'All') {
    filtered = filtered.filter(item => {
      if (filterType === 'Snippets') return item.type === 'snippet';
      if (filterType === 'Notes') return item.type === 'note';
      if (filterType === 'Bookmarks') return item.type === 'bookmark';
      return item.category === filterType;
    });
  }

  // Search Filter
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => {
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchContent = (item.content || '').toLowerCase().includes(q);
      const matchCategory = (item.category || '').toLowerCase().includes(q);
      const matchTags = Array.isArray(item.tags) && item.tags.some(t => t.toLowerCase().includes(q));
      return matchTitle || matchContent || matchCategory || matchTags;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p class="section-desc" style="grid-column: 1 / -1;">No vault items found matching your criteria.</p>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    let badgeClass = 'badge-note';
    let typeLabel = 'Note';
    if (item.type === 'snippet') {
      badgeClass = 'badge-snippet';
      typeLabel = 'Code Snippet';
    } else if (item.type === 'bookmark') {
      badgeClass = 'badge-bookmark';
      typeLabel = 'Bookmark';
    }

    let contentHtml = '';
    if (item.type === 'snippet') {
      contentHtml = `
        <div class="snippet-wrapper">
          <button class="btn-copy" data-copy="${escapeHtml(item.content)}">Copy Code</button>
          <pre class="snippet-content"><code>${escapeHtml(item.content)}</code></pre>
        </div>
      `;
    } else if (item.type === 'bookmark') {
      contentHtml = `
        <p class="vault-note-text">${escapeHtml(item.content)}</p>
        ${item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="vault-bookmark-link">Visit Link ↗ ${escapeHtml(item.url)}</a>` : ''}
      `;
    } else {
      contentHtml = `<p class="vault-note-text">${escapeHtml(item.content)}</p>`;
    }

    const tagsHtml = Array.isArray(item.tags)
      ? item.tags.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')
      : '';

    return `
      <div class="vault-card animate-fade-in" data-id="${escapeHtml(item.id)}">
        <div class="item-action-overlay edit-trigger">
          <button class="btn btn-secondary btn-sm btn-edit-vault" data-id="${escapeHtml(item.id)}" title="Edit Item">✎ Edit</button>
          <button class="btn btn-secondary btn-sm btn-del-vault" data-id="${escapeHtml(item.id)}" title="Delete Item" style="color:var(--accent-pink);">✕</button>
        </div>
        <div class="vault-card-header">
          <span class="vault-type-badge ${badgeClass}">${typeLabel}</span>
          <span class="vault-date">${escapeHtml(item.date || '')}</span>
        </div>
        <h3 class="vault-title">${escapeHtml(item.title)}</h3>
        ${contentHtml}
        <div class="hero-skills-wrap" style="margin-top: auto; padding-top: 0.75rem;">${tagsHtml}</div>
      </div>
    `;
  }).join('');
}
