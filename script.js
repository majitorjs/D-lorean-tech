/* =========================================================
   D’LOREAN TECH — JavaScript
   ---------------------------------------------------------
   ► ZONA DE CONFIGURACIÓN (edita aquí tus propios datos)
   ========================================================= */

// 10 imágenes de la galería (ruta dentro de /assets/img/)
const GALLERY = [
  // src = imagen principal (enlace de internet). fallback = imagen local que se muestra si el enlace falla.
  // Para usar tus propias fotos: descárgalas a assets/img/ y pon aquí la ruta, por ejemplo 'assets/img/foto1.jpg'.
  { title: 'Conexión global: mapa de la Tierra futurista', credit: 'Getty Images / Unsplash+',
    src: 'https://plus.unsplash.com/premium_photo-1664297950425-99a968926a74?fm=jpg&q=60&w=1200&auto=format&fit=crop',
    fallback: 'assets/img/mockup-web.svg',
    page: 'https://unsplash.com/es/fotos/el-fondo-abstracto-de-la-tecnologia-del-mapa-de-la-tierra-futurista-representa-el-concepto-de-conexion-global-oU16G3G6WbM' },
  { title: 'Tecnología de red y conexión global', credit: 'Getty Images / Unsplash+',
    src: 'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?fm=jpg&q=60&w=1200&auto=format&fit=crop',
    fallback: 'assets/img/mockup-dashboard.svg',
    page: 'https://unsplash.com/es/fotos/el-fondo-abstracto-de-la-tecnologia-del-mapa-de-la-tierra-futurista-representa-el-concepto-de-conexion-global-m2pxgGc1Yas' },
  { title: 'Internet, conexión y tecnología', credit: 'Pexels',
    src: 'https://images.pexels.com/photos/14553720/pexels-photo-14553720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallback: 'assets/img/mockup-app.svg',
    page: 'https://www.pexels.com/es-es/foto/internet-conexion-tecnologia-ordenador-14553720/' },
  { title: 'Tecnología y desarrollo digital', credit: 'Pexels',
    src: 'https://images.pexels.com/photos/7107487/pexels-photo-7107487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallback: 'assets/img/mockup-tienda.svg' },
  { title: 'Trabajo digital y tecnología', credit: 'Pexels',
    src: 'https://images.pexels.com/photos/29459444/pexels-photo-29459444.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallback: 'assets/img/mockup-codigo.svg' },
  { title: 'Pantalla holográfica de diseño UX/UI', credit: 'iStock',
    src: 'assets/img/captura-inicio.jpg',
    fallback: 'assets/img/captura-inicio.jpg',
    page: 'https://www.istockphoto.com/es/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-gm2212360504-629302598' },
  { title: 'Recurso gráfico de diseño web', credit: 'Pixabay',
    src: 'https://pixabay.com/es/images/download/x-4156934_1920.png',
    fallback: 'assets/img/captura-servicios.jpg' },
  { title: 'Recurso gráfico de tecnología', credit: 'Pixabay',
    src: 'https://pixabay.com/es/images/download/x-3374825_1920.jpg',
    fallback: 'assets/img/captura-nosotros.jpg' },
  { title: 'Tecnología y negocios digitales', credit: 'Unsplash',
    src: 'https://images.unsplash.com/photo-1786466698698-ea3279f1ae6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    fallback: 'assets/img/captura-proyectos.jpg' },
  { title: 'Equilibrio digital: justicia y equidad en el entorno tecnológico', credit: 'iStock',
    src: 'https://media.istockphoto.com/id/2265191306/es/foto/equilibrio-digital-en-la-escala-justicia-y-equidad-en-el-entorno-tecnol%C3%B3gico-moderno-las.webp?a=1&b=1&s=612x612&w=0&k=20&c=zPt1WI7anXEKVcKYjF0W60IQDCPaAW7VUUS_OPNqUb0=',
    fallback: 'assets/img/logo.jpg' }
];

// 5 videos de YouTube. Para cambiar uno, pega su ID (lo que va después de "v=" o de "youtu.be/") en "youtube".
// Ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtube: 'dQw4w9WgXcQ'
const VIDEOS = [
  { type: 'Tutorial',   title: '¿Cómo hacer una página web desde 0? (Tutorial 2026)', desc: 'Canal: Andres Garza',    youtube: 'WUYqYma1qmw' },
  { type: 'Tutorial',   title: 'Cómo crear páginas web increíbles utilizando Claude',  desc: 'Canal: Adrián Sáenz',    youtube: 'UHVR0MqJYfM' },
  { type: 'Tutorial',   title: 'Crea webs con Claude Code (guía definitiva)',          desc: 'Canal: Adrián Sáenz',    youtube: '9oVfhupb77w' },
  { type: 'Explicación', title: '¿Cómo se crean las páginas web? (todas las formas)',  desc: 'Canal: EDteam',          youtube: 'STNnG5K3jdM' },
  { type: 'Explicación', title: '¿Qué es la web? #TeloExplico',                        desc: 'Canal: Teloexplicovideo', youtube: 'kXhXgcVpAU8' }
];

// Correo que recibe el formulario de contacto
const CONTACT_EMAIL = 'dloriantech@gmail.com';

/* ========================================================= */

const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Logo: si no carga assets/img/logo.jpg, se usa esta copia incrustada ---------- */
const LOGO_DATA = 'data:image/jpeg;base64,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';
const fixLogo = img => { if (!img.dataset.logoFixed) { img.dataset.logoFixed = '1'; img.src = LOGO_DATA; } };
document.querySelectorAll('img[src*="logo.jpg"]').forEach(img => {
  img.addEventListener('error', () => fixLogo(img));
  if (img.complete && img.naturalWidth === 0) fixLogo(img);
});
document.querySelectorAll('link[rel="icon"]').forEach(l => { l.href = LOGO_DATA; });

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
    lbContent.innerHTML = `<img src="${it.src}" data-fb="${it.fallback || it.src}" onerror="this.onerror=null;this.src=this.dataset.fb" alt="${it.title}">`;
  }
  lbCaption.textContent = it.title + (it.credit ? ' · Fuente: ' + it.credit : '');
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
  `<button class="g-item reveal" data-i="${i}" data-title="${g.title}" aria-label="Ampliar: ${g.title}"><img src="${g.src}" data-fb="${g.fallback}" onerror="this.onerror=null;this.src=this.dataset.fb" alt="${g.title}" loading="lazy"></button>`).join('');
$('#gallery').addEventListener('click', e => { const b = e.target.closest('.g-item'); if (b) openLb(GALLERY, +b.dataset.i); });
$$('#gallery .reveal').forEach(el => revealer.observe(el));
}

$('#miniGallery').innerHTML = GALLERY.slice(0, 6).map((g, i) =>
  `<button data-i="${i}" aria-label="Ampliar: ${g.title}"><img src="${g.src}" data-fb="${g.fallback}" onerror="this.onerror=null;this.src=this.dataset.fb" alt="" loading="lazy"></button>`).join('');
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
