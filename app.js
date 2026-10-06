const D = window.ODYSSEY_DATA;
const app = document.getElementById('app');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const header = document.getElementById('siteHeader');
const cache = new Map();

const esc = (s='') => s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const mission = id => D.missions[id];
const subject = key => D.subjects.find(x => x.key === key) || D.subjects[0];

function setRoute(route) {
  const clean = (route || '#home').replace(/^#/, '');
  render(clean || 'home');
  window.scrollTo({top:0, behavior:'instant'});
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${clean}`));
}

function imgBlock(query, alt, cls='image-frame') {
  return `<div class="${cls} nasa-image" data-nasa-query="${esc(query)}" data-alt="${esc(alt)}"><div class="image-loader"><span></span><span></span><span></span></div></div>`;
}

function render(route) {
  header.classList.toggle('header-solid', route !== 'home');
  if (route === 'home') return renderHome();
  if (route === 'explore') return renderExplore();
  if (route === 'archive') return renderArchive();
  if (route === 'about') return renderAbout();
  const match = route.match(/^mission\/([a-z0-9_-]+)\/?(\d+)?$/i);
  if (match && D.missions[match[1]]) return renderMission(match[1], Math.max(1, Math.min(6, Number(match[2] || 1))));
  renderHome();
}

function renderHome() {
  app.innerHTML = `
    <section class="hero home-hero">
      <div class="hero-orbit orbit-1"></div><div class="hero-orbit orbit-2"></div><div class="hero-planet"></div>
      <div class="hero-content">
        <div class="eyebrow reveal">NASA SPACE APPS 2026 · STORYTELLING</div>
        <h1 class="display reveal delay-1">ABANDONED.<br/><em>NOT FORGOTTEN.</em></h1>
        <p class="hero-lede reveal delay-2">They went to other worlds. They never came home.<br/>But their stories did.</p>
        <div class="hero-actions reveal delay-3">
          <a class="btn btn-primary" href="#explore">ENTER THE STORY <span>→</span></a>
          <a class="btn btn-ghost" href="${D.githubUrl}" target="_blank" rel="noopener noreferrer">VIEW GITHUB <span>↗</span></a>
        </div>
        <div class="hero-meta reveal delay-4"><span>6 EXPLORERS</span><i></i><span>2 WORLDS</span><i></i><span>1 NASA ARCHIVE</span></div>
      </div>
      <div class="scroll-cue"><span></span>SCROLL TO EXPLORE</div>
    </section>

    <section class="manifesto section-pad">
      <div class="section-kicker">THE CHALLENGE</div>
      <div class="manifesto-grid">
        <h2 class="section-title">Hardware can be<br/><em>history.</em></h2>
        <div class="manifesto-copy"><p>NASA has left machines across the solar system. Some are still on the Moon. Others are still on Mars. Their signals ended — but their measurements, images, and questions remain.</p><p>Odyssey & Orbit turns six of those machines into first-person stories, using NASA evidence to connect <b>Astrophysics</b>, <b>Planets & Moons</b>, and <b>Space Exploration</b>.</p><a class="text-link" href="https://www.spaceappschallenge.org/2026/" target="_blank" rel="noopener noreferrer">NASA SPACE APPS 2026 ↗</a></div>
      </div>
    </section>

    <section class="subject-strip section-pad">
      <div class="section-kicker">THREE SCIENCE LENSES</div>
      <div class="subject-grid">
        ${D.subjects.map(s => `<article class="subject-card"><span class="subject-icon">${s.icon}</span><div><b>${s.label}</b><p>${s.desc}</p></div></article>`).join('')}
      </div>
    </section>

    <section class="choose-section section-pad">
      <div class="section-kicker">BEGIN HERE</div>
      <h2 class="section-title centered">Which world<br/><em>do you want to enter?</em></h2>
      <div class="world-pair">
        ${worldCard('moon')}
        ${worldCard('mars')}
      </div>
    </section>

    <section class="end-card section-pad">
      <div class="end-card-inner"><div><div class="section-kicker">WHEN THE STORIES END</div><h2>THE ARCHIVE<br/><em>KEEPS GOING.</em></h2><p>Go beyond our six stories. Search NASA’s Image & Video Library for missions, photographs, videos, and the evidence behind them.</p></div><a class="btn btn-primary" href="#archive">ENTER NASA ARCHIVE →</a></div>
    </section>
  `;
  bindImageLoaders();
}

function worldCard(key) {
  const w = D.worlds[key];
  const isMoon = key === 'moon';
  return `<a class="world-card ${isMoon ? 'moon-card':'mars-card'}" href="#explore/${key}" aria-label="Explore ${w.label}">
    <div class="world-art"><div class="world-glow"></div><div class="world-sphere"></div><div class="world-label">${isMoon ? 'MOON' : 'MARS'}</div></div>
    <div class="world-copy"><div><small>${w.eyebrow}</small><h3>${w.label}</h3><p>${w.sub}</p></div><span class="circle-arrow">→</span></div>
  </a>`;
}

function renderExplore() {
  const query = location.hash.match(/^#explore\/([a-z]+)/);
  const worldKey = query ? query[1] : null;
  if (!worldKey || !D.worlds[worldKey]) {
    app.innerHTML = `
      <section class="page-hero"><div class="section-kicker">EXPLORE MODE</div><h1 class="display page-display">CHOOSE<br/><em>YOUR WORLD.</em></h1><p>Start with the Moon, or follow the longer journey to Mars.</p></section>
      <section class="section-pad"><div class="world-pair">${worldCard('moon')}${worldCard('mars')}</div></section>
    `;
    return;
  }
  const w = D.worlds[worldKey];
  app.innerHTML = `
    <section class="page-hero compact"><div class="section-kicker">WORLD · ${w.label}</div><h1 class="display page-display">ENTER<br/><em>${w.label}.</em></h1><p>${w.sub}</p><a class="back-link" href="#explore">← CHOOSE ANOTHER WORLD</a></section>
    <section class="mission-list section-pad ${worldKey === 'mars' ? 'martian-list':''}">
      <div class="mission-list-head"><div><div class="section-kicker">${w.equipment.length} EQUIPMENT STORIES</div><h2>${worldKey === 'moon' ? 'The machines that opened the Moon.' : 'The machines that kept asking about Mars.'}</h2></div><div class="world-counter">${String(w.equipment.length).padStart(2,'0')} STORIES</div></div>
      <div class="mission-grid">${w.equipment.map(id => missionCard(id)).join('')}</div>
    </section>
  `;
  bindImageLoaders();
}

function missionCard(id) {
  const m = mission(id);
  const s = subject(m.chapters[0].subject);
  return `<article class="mission-card" style="--delay:${Number(m.number)*70}ms">
    <div class="mission-visual">${imgBlock(m.imageQuery, m.name, 'image-frame card-image')}<div class="mission-number">${m.number}</div><div class="mission-year">${m.date}</div></div>
    <div class="mission-card-body"><div class="tag-row"><span>${m.type}</span><span class="tag-subject">${s.label}</span></div><h3>${m.name}</h3><div class="mission-question">${m.tagline}</div><p>${m.intro}</p><a class="btn btn-small" href="#mission/${m.id}/1">OPEN STORY <span>→</span></a></div>
  </article>`;
}

function renderMission(id, chapterNumber) {
  const m = mission(id);
  const chapter = m.chapters[chapterNumber - 1];
  const s = subject(chapter.subject);
  const prev = chapterNumber > 1 ? `#mission/${id}/${chapterNumber-1}` : `#explore/${m.world}`;
  const next = chapterNumber < m.chapters.length ? `#mission/${id}/${chapterNumber+1}` : `#explore/${m.world}`;
  app.innerHTML = `
    <section class="story-shell ${m.world === 'mars' ? 'story-mars':'story-moon'}">
      <div class="story-topline"><a href="#explore/${m.world}">← ${m.world === 'mars' ? 'MARS':'MOON'}</a><span>${m.number} · ${m.name.toUpperCase()}</span><span>CHAPTER ${chapterNumber} / 6</span></div>
      <div class="story-grid">
        <div class="story-visual-wrap">${imgBlock(chapter.imageQuery, `${m.name} — ${chapter.title}`, 'story-image')}<div class="visual-caption">NASA IMAGE & VIDEO LIBRARY <span>· LIVE SEARCH</span></div></div>
        <div class="story-copy">
          <div class="section-kicker">${esc(chapter.kicker)}</div>
          <h1>${esc(chapter.title.split(' ').slice(0,-1).join(' '))} <em>${esc(chapter.title.split(' ').slice(-1).join(' '))}</em></h1>
          <div class="narrator"><span class="dot"></span><span>${m.name} · FIRST-PERSON STORY</span></div>
          <p class="story-text">“${esc(chapter.story)}”</p>
          <div class="science-panel"><div class="science-head"><span>${s.icon}</span><div><small>SCIENCE THREAD</small><b>${s.label}</b></div></div><p>${s.desc}</p><div class="evidence-list">${chapter.evidence.map(e => `<button class="evidence-chip" data-evidence="${esc(e)}">${esc(e)} <span>+</span></button>`).join('')}</div></div>
          <div class="story-actions"><a class="btn btn-ghost" href="${prev}">${chapterNumber === 1 ? '← BACK TO EQUIPMENT':'← PREVIOUS'}</a>${chapterNumber < 6 ? `<a class="btn btn-primary" href="${next}">NEXT CHAPTER <span>→</span></a>` : `<a class="btn btn-primary" href="${next}">RETURN TO ${m.world === 'mars' ? 'MARS':'MOON'} <span>→</span></a>`}</div>
        </div>
      </div>
      <div class="chapter-rail">${m.chapters.map((c, i) => `<a href="#mission/${m.id}/${i+1}" class="chapter-dot ${i+1===chapterNumber?'active':''}" title="${esc(c.title)}"><span>${String(i+1).padStart(2,'0')}</span></a>`).join('')}</div>
      <div class="story-footer"><span>${m.name.toUpperCase()} · ${m.date}</span><a href="${m.nasaUrl}" target="_blank" rel="noopener noreferrer">READ NASA MISSION PAGE ↗</a></div>
    </section>
  `;
  bindImageLoaders();
  document.querySelectorAll('.evidence-chip').forEach(btn => btn.addEventListener('click', () => openEvidence(m, chapter, btn.dataset.evidence)));
}

function openEvidence(m, chapter, item) {
  modalBody.innerHTML = `<div class="modal-kicker">NASA EVIDENCE</div><h2 id="modalTitle">${esc(item)}</h2><p>This story point is grounded in the NASA mission record. Use the source links below to move from the narrative layer into the underlying evidence.</p><div class="modal-source"><b>MISSION</b><span>${esc(m.name)}</span></div><div class="modal-source"><b>SCIENCE THREAD</b><span>${esc(subject(chapter.subject).label)}</span></div><div class="modal-actions"><a class="btn btn-primary" href="${m.nasaUrl}" target="_blank" rel="noopener noreferrer">OPEN NASA MISSION PAGE ↗</a><a class="btn btn-ghost" href="${D.nasaLibraryUrl}" target="_blank" rel="noopener noreferrer">OPEN NASA ARCHIVE ↗</a></div>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}

function renderArchive() {
  app.innerHTML = `
    <section class="page-hero archive-hero"><div class="section-kicker">NASA ARCHIVE</div><h1 class="display page-display">KEEP<br/><em>EXPLORING.</em></h1><p>Our six stories are only a doorway. Search NASA’s public Image & Video Library for the missions, images, and recordings behind them.</p></section>
    <section class="archive section-pad">
      <div class="archive-search"><div><div class="section-kicker">LIVE NASA SEARCH</div><h2>What do you want to see?</h2></div><div class="search-box"><input id="archiveInput" type="search" placeholder="Try: Viking 1 Mars, Earthrise, Opportunity rover…"/><button id="archiveBtn">SEARCH →</button></div></div>
      <div class="archive-pills"><button data-q="Surveyor 1">Surveyor 1</button><button data-q="Lunar Orbiter 1">Lunar Orbiter 1</button><button data-q="Viking 1 Mars">Viking 1</button><button data-q="Sojourner rover">Sojourner</button><button data-q="Spirit rover Mars">Spirit</button><button data-q="Opportunity rover Mars">Opportunity</button></div>
      <div class="archive-status" id="archiveStatus">Search NASA’s public archive.</div>
      <div class="archive-grid" id="archiveResults"></div>
    </section>
  `;
  const input = document.getElementById('archiveInput');
  const btn = document.getElementById('archiveBtn');
  const search = () => searchNASA(input.value.trim() || 'Mars rover');
  btn.addEventListener('click', search);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') search(); });
  document.querySelectorAll('.archive-pills button').forEach(p => p.addEventListener('click', () => { input.value = p.dataset.q; search(); }));
}

async function searchNASA(q) {
  const status = document.getElementById('archiveStatus');
  const grid = document.getElementById('archiveResults');
  if (!status || !grid) return;
  status.textContent = 'Searching NASA…'; grid.innerHTML = '<div class="archive-loading">LOADING ARCHIVE RESULTS<span>···</span></div>';
  try {
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image&year_start=1960&page_size=12`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const items = (data.collection?.items || []).slice(0, 12);
    if (!items.length) { status.textContent = 'No image results found. Try a broader search.'; grid.innerHTML=''; return; }
    status.textContent = `${items.length} results from NASA Image & Video Library`;
    grid.innerHTML = items.map((x, i) => {
      const d = (x.data || [])[0] || {}; const link = (x.links || [])[0]?.href || '';
      return `<article class="archive-item"><div class="archive-thumb"><img loading="lazy" src="${link}" alt="${esc(d.title || q)}"/><span>${i+1}</span></div><div class="archive-copy"><b>${esc(d.title || 'NASA image')}</b><small>${esc(d.photographer || d.secondary_creator || 'NASA')}</small><p>${esc((d.description || '').replace(/<[^>]*>/g,'').slice(0,150))}${(d.description||'').length>150?'…':''}</p><a href="https://images.nasa.gov/search?q=${encodeURIComponent(d.title || q)}" target="_blank" rel="noopener noreferrer">VIEW IN NASA LIBRARY ↗</a></div></article>`;
    }).join('');
  } catch (e) {
    status.textContent = 'NASA archive search is temporarily unavailable. The story pages still work with their official source links.';
    grid.innerHTML = '';
  }
}

function renderAbout() {
  app.innerHTML = `
    <section class="page-hero compact"><div class="section-kicker">ABOUT ODYSSEY & ORBIT</div><h1 class="display page-display">STORIES<br/><em>WITH EVIDENCE.</em></h1><p>A NASA Space Apps 2026 storytelling experience created around six machines left on the Moon and Mars.</p></section>
    <section class="about-grid section-pad">
      <article class="about-panel"><div class="section-kicker">OUR METHOD</div><h2>Story first.<br/><em>Evidence always.</em></h2><p>Each equipment story is told in first person, but the narrative is anchored to documented NASA mission facts. Every chapter connects the machine to at least one of this year’s integrated subjects: Astrophysics, Planets & Moons, or Space Exploration.</p></article>
      <article class="about-panel"><div class="section-kicker">THE SIX</div><div class="six-list">${Object.values(D.missions).map(m => `<a href="#mission/${m.id}/1"><span>${m.number}</span><b>${m.name}</b><em>${m.tagline}</em>→</a>`).join('')}</div></article>
    </section>
    <section class="section-pad sources-band"><div class="section-kicker">PRIMARY SOURCES</div><div class="source-cards"><a href="${D.challengeUrl}" target="_blank" rel="noopener noreferrer"><b>NASA SPACE APPS 2026</b><span>Challenge & event information ↗</span></a><a href="${D.nasaScienceUrl}" target="_blank" rel="noopener noreferrer"><b>NASA SCIENCE</b><span>Mission records & science resources ↗</span></a><a href="${D.nasaLibraryUrl}" target="_blank" rel="noopener noreferrer"><b>NASA IMAGE & VIDEO LIBRARY</b><span>Searchable public archive ↗</span></a></div></section>
  `;
}

async function bindImageLoaders() {
  const nodes = [...document.querySelectorAll('.nasa-image')];
  await Promise.all(nodes.map(loadNASAImage));
}

async function loadNASAImage(node) {
  const q = node.dataset.nasaQuery;
  if (!q) return;
  try {
    let data = cache.get(q);
    if (!data) {
      const res = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image&page_size=5`);
      if (!res.ok) throw new Error('search failed');
      data = await res.json(); cache.set(q, data);
    }
    const item = data.collection?.items?.[0];
    const href = item?.links?.find(l => l.rel === 'preview')?.href || item?.links?.[0]?.href;
    const meta = item?.data?.[0] || {};
    if (!href) throw new Error('no image');
    const img = document.createElement('img'); img.src = href; img.alt = node.dataset.alt || meta.title || q; img.loading = 'lazy';
    img.addEventListener('load', () => node.classList.add('loaded'));
    img.addEventListener('error', () => node.classList.add('failed'));
    node.replaceChildren(img);
    const credit = document.createElement('div'); credit.className='image-credit'; credit.innerHTML = `<span>${esc(meta.title || q)}</span><span>${esc(meta.center || 'NASA')}</span>`; node.appendChild(credit);
  } catch (e) {
    node.classList.add('failed');
    node.innerHTML = `<div class="image-fallback"><span>NASA ARCHIVE IMAGE</span><b>${esc(q)}</b><small>Open the mission archive below to view the official asset.</small></div>`;
  }
}

modal.addEventListener('click', e => { if (e.target.matches('[data-close-modal], .modal-backdrop')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
window.addEventListener('hashchange', () => { const h = location.hash || '#home'; if (h.startsWith('#explore/')) renderExplore(); else setRoute(h); });
if (!location.hash) location.hash = '#home'; else setRoute(location.hash);
