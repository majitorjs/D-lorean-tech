/* =========================================================
   D’LOREAN TECH — JavaScript
   ---------------------------------------------------------
   ► ZONA DE CONFIGURACIÓN (edita aquí tus propios datos)
   ========================================================= */

// 10 imágenes de la galería (ruta dentro de /assets/img/)
const GALLERY = [
  { src: 'assets/img/logo.jpg',               title: 'Logo D’Lorean Tech' },
  { src: 'assets/img/captura-inicio.jpg',     title: 'Captura: página de inicio' },
  { src: 'assets/img/captura-servicios.jpg',  title: 'Captura: servicios' },
  { src: 'assets/img/captura-nosotros.jpg',   title: 'Captura: sobre nosotros' },
  { src: 'assets/img/captura-proyectos.jpg',  title: 'Captura: proyectos de demostración' },
  { src: 'assets/img/mockup-web.svg',         title: 'Mockup: página web corporativa' },
  { src: 'assets/img/mockup-app.svg',         title: 'Mockup: aplicación móvil' },
  { src: 'assets/img/mockup-dashboard.svg',   title: 'Mockup: dashboard administrativo' },
  { src: 'assets/img/mockup-tienda.svg',      title: 'Mockup: tienda en línea' },
  { src: 'assets/img/mockup-codigo.svg',      title: 'Código HTML, CSS y JavaScript' }
];

// 5 videos. Pega el ID de YouTube (lo que va después de "v=") en "youtube".
// Ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtube: 'dQw4w9WgXcQ'
const VIDEOS = [
  { type: 'Presentación', title: 'Presentación de D’Lorean Tech',  desc: 'Quiénes somos y qué hacemos.',               youtube: '' },
  { type: 'Demostración', title: 'Demo: sitio para un restaurante', desc: 'Recorrido por un proyecto de ejemplo.',      youtube: '' },
  { type: 'Demostración', title: 'Demo: tienda en línea',           desc: 'Catálogo, filtros y pago en línea.',         youtube: '' },
  { type: 'Tutorial',     title: 'Tutorial: cómo usar tu panel',    desc: 'Guía rápida para el cliente final.',         youtube: '' },
  { type: 'Sustentación', title: 'Sustentación del proyecto',       desc: 'Presentación final ante el instructor.',     youtube: '' }
];

// Correo que recibe el formulario de contacto
const CONTACT_EMAIL = 'dloriantech@gmail.com';

/* ========================================================= */

const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Menú lateral móvil ---------- */
const burger = $('#burger');
const toggleMenu = open => {
  document.body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', String(open));
};
burger.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
$('#scrim').addEventListener('click', () => toggleMenu(false));
$$('.sidebar a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

/* ---------- Barra superior con sombra + botón subir ---------- */
const topbar = $('#topbar'), toTop = $('#toTop');
addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', scrollY > 20);
  toTop.classList.toggle('show', scrollY > 700);
}, { passive: true });
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

/* ---------- PESTAÑA ACTIVA ----------
   Cada pestaña es un archivo .html distinto. Aquí solo se resalta el enlace de la página actual. */
const PAGE = document.body.dataset.page || 'index.html';
const NAV_PAGE = { 'info.html': 'perfil.html', 'identidad.html': 'perfil.html', 'descripcion.html': 'perfil.html', 'entorno.html': 'perfil.html' };
$$('.side-tabs a, .topnav a').forEach(a => {
  const f = a.getAttribute('href').split('#')[0];
  const on = f === (NAV_PAGE[PAGE] || PAGE) || (PAGE === 'videos.html' && f === 'galeria.html' && a.closest('.topnav'));
  a.classList.toggle('active', on);
  if (on) a.setAttribute('aria-current', 'page');
});
$$('.subtabs a').forEach(a => {
  const on = a.getAttribute('href') === PAGE; a.classList.toggle('active', on);
  if (on) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ inline: 'center', block: 'nearest' }); }
});

/* ---------- Animación de aparición ---------- */
const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); } });
}, { threshold: .12 });
$$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 6) * 60 + 'ms'; revealer.observe(el); });

/* ---------- Contadores del hero ---------- */
$$('[data-count]').forEach(el => {
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  if (reduceMotion) { el.textContent = target + suffix; return; }
  let n = 0; const step = Math.max(1, Math.ceil(target / 40));
  const t = setInterval(() => { n = Math.min(target, n + step); el.textContent = n + suffix; if (n >= target) clearInterval(t); }, 35);
});

/* ---------- Efecto de escritura del subtítulo ---------- */
(() => {
  const el = $('#typed'); if (!el || reduceMotion) return;
  const text = el.textContent; el.textContent = ''; let i = 0;
  const t = setInterval(() => { el.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(t); }, 38);
})();

/* ---------- Fondo animado del hero (red de partículas / circuitos) ---------- */
(() => {
  const c = $('#bgCanvas'); if (!c) return;
  const ctx = c.getContext('2d'); let w, h, pts = [], raf;
  const resize = () => {
    w = c.width = c.offsetWidth; h = c.height = c.offsetHeight;
    pts = Array.from({ length: Math.min(80, Math.floor(w * h / 18000)) }, () => ({
      x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .45, vy: (Math.random() - .5) * .45
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fillStyle = 'rgba(120,200,255,.8)'; ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) { ctx.strokeStyle = `rgba(110,140,255,${.28 * (1 - d / 130)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
    });
    raf = requestAnimationFrame(draw);
  };
  resize(); addEventListener('resize', resize);
  if (reduceMotion) { draw(); cancelAnimationFrame(raf); return; }
  draw();
  // Pausa la animación cuando el hero no se ve (ahorra batería)
  new IntersectionObserver(([e]) => { cancelAnimationFrame(raf); if (e.isIntersecting) { resize(); draw(); } }).observe(c);
})();

/* ---------- Fotos de estudiantes: si no existe el archivo, se muestran las iniciales ---------- */
$$('.avatar').forEach(av => {
  const img = $('img', av);
  const fail = () => av.classList.add('no-photo');
  img.addEventListener('error', fail);
  if (img.complete && img.naturalWidth === 0) fail();
});
(() => {
  const img = $('.team-photo'); if (!img) return;
  const ph = () => {
    const d = document.createElement('div');
    d.className = 'team-photo ph';
    d.innerHTML = '<i class="fa-solid fa-camera"></i><span>Fotografía del equipo<br><small>Guarda tu foto como assets/img/equipo.jpg</small></span>';
    img.replaceWith(d);
  };
  img.addEventListener('error', ph);
  if (img.complete && img.naturalWidth === 0) ph();
})();

/* ---------- Catálogo: búsqueda + filtros ---------- */
(() => {
  if (!$('#svcSearch')) return;
  const cards = $$('.svc'), input = $('#svcSearch'), none = $('#noResults');
  let cat = 'all';
  const apply = () => {
    const q = input.value.trim().toLowerCase(); let shown = 0;
    cards.forEach(c => {
      const ok = (cat === 'all' || c.dataset.cat === cat) && c.textContent.toLowerCase().includes(q);
      c.hidden = !ok; if (ok) shown++;
    });
    none.hidden = shown > 0;
  };
  input.addEventListener('input', apply);
  $('#svcFilters').addEventListener('click', e => {
    const b = e.target.closest('.fbtn'); if (!b) return;
    $$('.fbtn').forEach(x => x.classList.toggle('active', x === b));
    cat = b.dataset.cat; apply();
  });
})();

/* ---------- Galería + miniaturas laterales + lightbox ---------- */
const lb = $('#lightbox'), lbContent = $('#lbContent'), lbCaption = $('#lbCaption');
let lbItems = [], lbIndex = 0, lastFocus = null;

const renderLb = () => {
  const it = lbItems[lbIndex];
  if (it.video !== undefined) {
    lbContent.innerHTML = it.video
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(it.video)}?autoplay=1&rel=0" title="${it.title}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
      : `<div class="video-empty"><i class="fa-solid fa-film" style="font-size:2rem;color:var(--cyan)"></i><b>Video pendiente</b><span>Abre <code>script.js</code> y pega el ID de YouTube en el arreglo <code>VIDEOS</code>.</span></div>`;
  } else {
    lbContent.innerHTML = `<img src="${it.src}" alt="${it.title}">`;
  }
  lbCaption.textContent = it.title;
  const multi = lbItems.length > 1;
  $('#lbPrev').hidden = $('#lbNext').hidden = !multi;
};
const openLb = (items, i) => { lbItems = items; lbIndex = i; lastFocus = document.activeElement; renderLb(); lb.hidden = false; document.body.style.overflow = 'hidden'; $('#lbClose').focus(); };
const closeLb = () => { lb.hidden = true; lbContent.innerHTML = ''; document.body.style.overflow = ''; lastFocus && lastFocus.focus(); };
const stepLb = d => { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; renderLb(); };

$('#lbClose').addEventListener('click', closeLb);
$('#lbPrev').addEventListener('click', () => stepLb(-1));
$('#lbNext').addEventListener('click', () => stepLb(1));
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowLeft') stepLb(-1); if (e.key === 'ArrowRight') stepLb(1);
});

if ($('#gallery')) {
$('#gallery').innerHTML = GALLERY.map((g, i) =>
  `<button class="g-item reveal" data-i="${i}" data-title="${g.title}" aria-label="Ampliar: ${g.title}"><img src="${g.src}" alt="${g.title}" loading="lazy"></button>`).join('');
$('#gallery').addEventListener('click', e => { const b = e.target.closest('.g-item'); if (b) openLb(GALLERY, +b.dataset.i); });
$$('#gallery .reveal').forEach(el => revealer.observe(el));
}

$('#miniGallery').innerHTML = GALLERY.slice(0, 6).map((g, i) =>
  `<button data-i="${i}" aria-label="Ampliar: ${g.title}"><img src="${g.src}" alt="" loading="lazy"></button>`).join('');
$('#miniGallery').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { toggleMenu(false); openLb(GALLERY, +b.dataset.i); } });

/* ---------- Videos ---------- */
if ($('#videoGrid')) {
$('#videoGrid').innerHTML = VIDEOS.map((v, i) => `
  <article class="vid reveal">
    <button class="vid-thumb" data-i="${i}" aria-label="Reproducir: ${v.title}">
      ${v.youtube ? `<img src="https://i.ytimg.com/vi/${encodeURIComponent(v.youtube)}/hqdefault.jpg" alt="" loading="lazy">` : ''}
      <span class="play"><i class="fa-solid fa-play"></i></span>
    </button>
    <div class="vid-body"><span class="vid-type">${v.type}</span><h3>${v.title}</h3><p>${v.desc}</p></div>
  </article>`).join('');
$$('#videoGrid .reveal').forEach(el => revealer.observe(el));
$('#videoGrid').addEventListener('click', e => {
  const b = e.target.closest('.vid-thumb'); if (!b) return;
  openLb(VIDEOS.map(v => ({ title: v.title, video: v.youtube })), +b.dataset.i);
});
}

/* ---------- Certificados sin enlace: avisar en vez de saltar al inicio ---------- */
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-placeholder]'); if (!a) return;
  e.preventDefault(); alert('Este espacio está vacío. Abre evidencias.html y reemplaza href="#" por el enlace real (PDF o URL) y borra data-placeholder="true".');
});

/* ---------- Botones de plan → preseleccionan el formulario ---------- */
$$('[data-plan]').forEach(b => b.addEventListener('click', () => { $('#plan').value = b.dataset.plan; }));

/* ---------- Formulario de contacto (validación + envío por correo) ---------- */
(() => {
  const form = $('#contactForm'), status = $('#formStatus');
  if (!form) return;
  const rules = {
    nombre:  v => v.trim().length >= 3 || 'Escribe tu nombre (mínimo 3 letras).',
    correo:  v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Escribe un correo válido.',
    mensaje: v => v.trim().length >= 10 || 'Cuéntanos un poco más (mínimo 10 caracteres).'
  };
  const check = name => {
    const f = form.elements[name], r = rules[name](f.value), box = f.closest('.field');
    box.classList.toggle('invalid', r !== true); $('.err', box).textContent = r === true ? '' : r;
    return r === true;
  };
  Object.keys(rules).forEach(n => form.elements[n].addEventListener('blur', () => check(n)));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = Object.keys(rules).map(check).every(Boolean);
    if (!ok) { status.className = 'form-status'; status.textContent = 'Revisa los campos marcados.'; return; }
    const d = Object.fromEntries(new FormData(form));
    const body = `Nombre: ${d.nombre}\nCorreo: ${d.correo}\nPlan de interés: ${d.plan || 'No definido'}\n\n${d.mensaje}`;
    // Sin servidor: se abre el cliente de correo del usuario con el mensaje listo.
    // Para envío automático, conecta un servicio como Formspree o EmailJS aquí.
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Contacto web — ' + d.nombre)}&body=${encodeURIComponent(body)}`;
    status.className = 'form-status ok'; status.textContent = '¡Gracias! Se abrió tu correo con el mensaje listo para enviar.';
    form.reset();
  });
})();

/* ---------- Chatbot de preguntas frecuentes (demo sin servidor) ---------- */
(() => {
  const box = $('#chatBox'), msgs = $('#chatMsgs'), quick = $('#chatQuick'), input = $('#chatInput');
  const KB = [
    { k: ['precio', 'costo', 'cuanto', 'plan', 'valor', 'cotiz'], a: 'Tenemos tres planes: Emprende (desde $350.000), Pyme (desde $900.000) y Corporativo (desde $2.200.000 COP). Cotizamos según tus necesidades en la sección Contacto.' },
    { k: ['servicio', 'hacen', 'ofrecen', 'catalogo', 'modulo'], a: 'Creamos páginas web y aplicaciones a la medida: catálogo, pagos en línea, inventario, panel administrativo, chatbot y más de 31 módulos. Mira la sección Servicios.' },
    { k: ['contacto', 'correo', 'email', 'telefono', 'whatsapp', 'instagram'], a: 'Escríbenos a dloriantech@gmail.com, por WhatsApp al 320 608 1230 o en Instagram @dlorean.tech.' },
    { k: ['necesito', 'requisito', 'datos', 'empezar', 'iniciar'], a: 'Para empezar necesitamos: nombre de tu empresa o local, datos de contacto y dirección, propósito del negocio e información de tus servicios.' },
    { k: ['tiempo', 'demora', 'entrega', 'cuando'], a: 'El tiempo depende del alcance. Una página sencilla puede estar lista en pocas semanas. Cuéntanos tu idea y te damos un cronograma claro.' },
    { k: ['quienes', 'equipo', 'sena', 'estudiante', 'aprendiz'], a: 'Somos cinco aprendices del Técnico en Programación de Software del SENA (Ficha 3201615), con el acompañamiento del instructor Fredy Osbaldo Lemus Solano.' },
    { k: ['hola', 'buenas', 'hey', 'saludos'], a: '¡Hola! Soy el asistente de D’Lorean Tech. ¿Quieres saber de precios, servicios o cómo contactarnos?' }
  ];
  const add = (t, who) => { const m = document.createElement('div'); m.className = 'msg ' + who; m.textContent = t; msgs.append(m); msgs.scrollTop = msgs.scrollHeight; };
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const reply = q => {
    const n = norm(q), hit = KB.find(e => e.k.some(k => n.includes(k)));
    setTimeout(() => add(hit ? hit.a : 'Aún no tengo esa respuesta, pero el equipo te ayudará: escríbenos en la sección Contacto o por WhatsApp al 320 608 1230.', 'bot'), 450);
  };
  const ask = q => { add(q, 'user'); reply(q); };
  ['Precios', 'Servicios', '¿Qué necesito para empezar?', 'Contacto'].forEach(t => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = t; b.addEventListener('click', () => ask(t)); quick.append(b);
  });
  $('#chatFab').addEventListener('click', () => { box.hidden = !box.hidden; if (!box.hidden && !msgs.children.length) add('¡Hola! Soy el asistente virtual de D’Lorean Tech. ¿En qué te puedo ayudar?', 'bot'); if (!box.hidden) input.focus(); });
  $('#chatClose').addEventListener('click', () => { box.hidden = true; });
  $('#chatForm').addEventListener('submit', e => { e.preventDefault(); const q = input.value.trim(); if (q) { ask(q); input.value = ''; } });
})();

/* ---------- Año automático en el pie de página ---------- */
$('#year').textContent = new Date().getFullYear();
