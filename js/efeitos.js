// Efeitos de entrada e de luz, usados pelas duas páginas (index e lista)
(() => {
  const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- entrada dos blocos ao rolar ----------
  const GRUPOS = [
    ".pilares__lista li", ".sobre__txt", ".sobre__foto", ".cab", ".card", ".rec", ".recursos__cta",
    ".frase > *", ".duvidas__cab", ".faq details", ".contato__in", ".rodape__in > *",
    ".lk-bloco > .kicker", ".lk-titulo", ".lk-apoio", ".agenda__mes", ".agenda > ul > li",
    ".destaque", ".lk-grupo", ".links li", ".lk-fim__frase", ".msg", ".historia__txt", ".historia__foto", ".thai__txt", ".thai__foto", ".empresas__txt", ".empresas__foto", ".parceiros",
  ].join(",");
  const blocos = [...document.querySelectorAll(GRUPOS)];
  if (!calmo && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("visto");
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    blocos.forEach((b) => {
      // atraso em cascata entre irmãos do mesmo tipo
      const irmaos = [...b.parentElement.children].filter((c) => c.matches(GRUPOS));
      const pos = Math.min(irmaos.indexOf(b), 5);
      b.style.transitionDelay = pos * 90 + "ms";
      b.classList.add("revela");
      obs.observe(b);
    });
  }

  // ---------- luz que acompanha o cursor nos cards de vidro ----------
  const LUZ = ".card, .rec, .msg__txt, .links a, .pilares__lista li, .agenda, .destaque, .contato__in, .faq details";
  if (matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(LUZ).forEach((el) => {
      el.classList.add("luz");
      el.addEventListener("pointermove", (ev) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", ev.clientX - r.left + "px");
        el.style.setProperty("--my", ev.clientY - r.top + "px");
      });
    });
  }

  // ---------- hero: texto alinhado ao início do nome ----------
  const hero = document.querySelector(".hero");
  const nome = document.querySelector(".hero__nome");
  function alinha() {
    if (!hero || !nome) return;
    if (innerWidth <= 900) { hero.style.removeProperty("--nome-x"); hero.style.removeProperty("--nome-r"); return; }
    const h = hero.getBoundingClientRect();
    const [a, b] = nome.children;
    hero.style.setProperty("--nome-x", Math.round(a.getBoundingClientRect().left - h.left) + "px");
    hero.style.setProperty("--nome-r", Math.round(h.right - b.getBoundingClientRect().right) + "px");
  }
  if (nome) {
    alinha();
    nome.addEventListener("animationend", alinha);
    document.fonts && document.fonts.ready.then(alinha);
    addEventListener("resize", alinha);
  }

  // ---------- parallax leve no topo ----------
  if (calmo) return;
  const camadas = [
    [".hero__nome", 0.22], [".hero__foto", 0.06], [".hero__fundo", 0.12],
    [".lk-topo__foto", 0.18],
  ].map(([s, f]) => [document.querySelector(s), f]).filter(([el]) => el);
  let pedido = false;
  function move() {
    pedido = false;
    const y = Math.min(scrollY, innerHeight * 1.2);
    camadas.forEach(([el, f]) => el.style.setProperty("translate", `0 ${(y * f).toFixed(1)}px`));
  }
  addEventListener("scroll", () => { if (!pedido) { pedido = true; requestAnimationFrame(move); } }, { passive: true });
})();
