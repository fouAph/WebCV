import { storage } from './storage.js';

const state = {
  theme: localStorage.getItem('webcv_theme') || 'dark',
  filter: 'All'
};

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('webcv_theme', theme);
  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.textContent = theme === 'light' ? 'Theme: Light' : 'Theme: Dark';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderSkills(skills) {
  const container = document.getElementById('skill-chips');
  if (!container || !Array.isArray(skills)) return;
  container.innerHTML = skills.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('');
}

function renderGames(games, filter = 'All') {
  const container = document.getElementById('games-container');
  if (!container) return;

  let filtered = games;
  if (filter === 'Roblox') {
    filtered = games.filter(g => g.platform?.toLowerCase().includes('roblox'));
  } else if (filter === 'Unity') {
    filtered = games.filter(g => g.platform?.toLowerCase().includes('unity'));
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; color: var(--text-tertiary); padding: 1.5rem 0;">No projects in this category.</p>`;
    return;
  }

  container.innerHTML = filtered.map(game => {
    const tagsHtml = Array.isArray(game.tags)
      ? game.tags.map(t => `<span class="skill-chip">${escapeHtml(t)}</span>`).join('')
      : '';

    let actionBtn = '';
    if (game.isUnreleased) {
      actionBtn = `<span class="game-action muted">Unreleased Prototype</span>`;
    } else if (game.playUrl) {
      const btnLabel = game.playUrl.includes('github.com')
        ? 'View on GitHub ↗'
        : (game.playUrl.includes('steampowered.com')
          ? 'View on Steam ↗'
          : (game.playUrl.includes('itch.io') ? 'Play on Itch.io ↗' : `Play on ${escapeHtml(game.platform || 'Roblox')} ↗`));
      actionBtn = `<a href="${escapeHtml(game.playUrl)}" target="_blank" rel="noopener noreferrer" class="game-action">
          <span>${btnLabel}</span>
        </a>`;
    } else {
      actionBtn = `<span class="game-action muted">${escapeHtml(game.status || 'Active Project')}</span>`;
    }

    const hasMultipleImages = Array.isArray(game.images) && game.images.length > 1;

    let previewHtml = '';
    if (hasMultipleImages) {
      previewHtml = `
        <div class="game-preview game-preview-carousel" data-game-id="${escapeHtml(game.id)}">
          <div class="carousel-track">
            ${game.images.map((imgSrc, idx) => `
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(game.title)} screenshot ${idx + 1}" class="carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}" loading="lazy">
            `).join('')}
          </div>
          <span class="platform-tag">${escapeHtml(game.platform || 'Roblox')}</span>
          <span class="carousel-counter">1/${game.images.length}</span>
          <button type="button" class="carousel-btn prev" aria-label="Previous screenshot" data-dir="-1">&#10094;</button>
          <button type="button" class="carousel-btn next" aria-label="Next screenshot" data-dir="1">&#10095;</button>
          <div class="carousel-dots">
            ${game.images.map((_, idx) => `
              <button type="button" class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (game.thumbnail) {
      previewHtml = `
        <div class="game-preview">
          <img src="${escapeHtml(game.thumbnail)}" alt="${escapeHtml(game.title)}" loading="lazy" onerror="this.parentElement.style.display='none'">
          <span class="platform-tag">${escapeHtml(game.platform || 'Roblox')}</span>
        </div>
      `;
    } else if (game.isUnreleased) {
      previewHtml = `
        <div class="game-preview game-preview-nda">
          <div class="nda-badge-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>Confidential • NDA Protected</span>
          </div>
          <span class="platform-tag">${escapeHtml(game.platform || 'Roblox')}</span>
        </div>
      `;
    } else {
      previewHtml = `
        <div class="game-preview game-preview-noimage">
          <div class="noimage-badge-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg>
            <span>Preview Unavailable</span>
          </div>
          <span class="platform-tag">${escapeHtml(game.platform || 'Roblox')}</span>
        </div>
      `;
    }

    return `
      <article class="game-item ${game.isUnreleased ? 'is-unreleased' : ''}" id="game-${escapeHtml(game.id)}">
        ${previewHtml}
        <div class="game-body">
          <h3 class="game-name">${escapeHtml(game.title)}</h3>
          <p class="game-summary">${escapeHtml(game.description)}</p>
          <div class="game-tech-row">${tagsHtml}</div>
          ${actionBtn}
        </div>
      </article>
    `;
  }).join('');
}

function renderExperiences(experiences) {
  const container = document.getElementById('experience-container');
  if (!container || !Array.isArray(experiences)) return;

  container.innerHTML = experiences.map(exp => {
    const pointsHtml = Array.isArray(exp.highlights)
      ? `<ul class="entry-points">
          ${exp.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>`
      : '';

    const tagsHtml = Array.isArray(exp.tags)
      ? `<div style="display:flex; flex-wrap:wrap; gap:0.3rem; margin-top:0.75rem;">
          ${exp.tags.map(t => `<span class="skill-chip">${escapeHtml(t)}</span>`).join('')}
        </div>`
      : '';

    return `
      <div class="experience-entry">
        <div class="entry-top">
          <div>
            <h3 class="entry-role">${escapeHtml(exp.role)}</h3>
            <div class="entry-company">${escapeHtml(exp.company)} • ${escapeHtml(exp.type || 'Onsite')}</div>
          </div>
          <span class="entry-dates">${escapeHtml(exp.period)}</span>
        </div>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.4rem;">${escapeHtml(exp.description)}</p>
        ${pointsHtml}
        ${tagsHtml}
      </div>
    `;
  }).join('');
}

function renderCredentials(education, certifications) {
  const container = document.getElementById('credentials-container');
  if (!container) return;

  const eduCards = (education || []).map(edu => `
    <div class="cred-box">
      <div class="cred-type">Degree</div>
      <h3 class="cred-name">${escapeHtml(edu.degree)}</h3>
      <div class="cred-issuer-text">${escapeHtml(edu.institution)} • ${escapeHtml(edu.period)}</div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.5rem;">${escapeHtml(edu.description)}</p>
    </div>
  `);

  const certCards = (certifications || []).map(cert => `
    <div class="cred-box">
      <div class="cred-type">${escapeHtml(cert.badge || 'Certification')}</div>
      <h3 class="cred-name">${escapeHtml(cert.title)}</h3>
      <div class="cred-issuer-text">${escapeHtml(cert.issuer)}</div>
      ${cert.verifyUrl ? `<a href="${escapeHtml(cert.verifyUrl)}" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.65rem; font-size:0.75rem; color:var(--accent-primary); text-decoration:none; font-family:var(--font-mono); font-weight:600;">Verify Credential ↗</a>` : ''}
    </div>
  `);

  container.innerHTML = [...certCards, ...eduCards].join('');
}

function init() {
  applyTheme(state.theme);

  const data = storage.getAll();
  renderSkills(data.profile.skills);
  renderGames(data.games, state.filter);
  renderExperiences(data.experiences);
  renderCredentials(data.education, data.certifications);

  // Theme toggle button
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  }

  // Filter buttons
  const filterContainer = document.getElementById('category-filters');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-button');
      if (!btn) return;
      filterContainer.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      renderGames(storage.getAll().games, state.filter);
    });
  }

  // Carousel Prev/Next & Dots Navigation
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.carousel-btn');
    if (btn) {
      e.stopPropagation();
      e.preventDefault();
      const carousel = btn.closest('.game-preview-carousel');
      if (!carousel) return;
      const slides = carousel.querySelectorAll('.carousel-slide');
      const dots = carousel.querySelectorAll('.carousel-dot');
      const counter = carousel.querySelector('.carousel-counter');
      if (!slides.length) return;

      let currentIdx = 0;
      slides.forEach((s, idx) => {
        if (s.classList.contains('active')) currentIdx = idx;
      });

      const dir = parseInt(btn.dataset.dir, 10) || 1;
      const nextIdx = (currentIdx + dir + slides.length) % slides.length;

      slides[currentIdx].classList.remove('active');
      slides[nextIdx].classList.add('active');

      if (dots.length > nextIdx) {
        dots[currentIdx]?.classList.remove('active');
        dots[nextIdx]?.classList.add('active');
      }

      if (counter) {
        counter.textContent = `${nextIdx + 1}/${slides.length}`;
      }
      return;
    }

    const dot = e.target.closest('.carousel-dot');
    if (dot) {
      e.stopPropagation();
      e.preventDefault();
      const carousel = dot.closest('.game-preview-carousel');
      if (!carousel) return;
      const slides = carousel.querySelectorAll('.carousel-slide');
      const dots = carousel.querySelectorAll('.carousel-dot');
      const counter = carousel.querySelector('.carousel-counter');
      const targetIdx = parseInt(dot.dataset.index, 10);
      if (isNaN(targetIdx) || targetIdx < 0 || targetIdx >= slides.length) return;

      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));

      slides[targetIdx].classList.add('active');
      dot.classList.add('active');

      if (counter) {
        counter.textContent = `${targetIdx + 1}/${slides.length}`;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

