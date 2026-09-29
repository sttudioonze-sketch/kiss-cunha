// Os links de WhatsApp ([data-wa]) são montados em i18n.js, na língua escolhida

// Menu: fundo ao rolar, drawer no celular
const nav = document.getElementById("nav");
const menuBtn = nav.querySelector(".menu-btn");
const fecha = () => { nav.classList.remove("aberto"); menuBtn.setAttribute("aria-expanded", false); };
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("aberto")));
nav.querySelectorAll(".menu a").forEach((a) => a.addEventListener("click", fecha));
const aoRolar = () => nav.classList.toggle("rolou", scrollY > 40);
addEventListener("scroll", aoRolar, { passive: true });
aoRolar();

// Item ativo do menu conforme a seção na tela
const links = [...nav.querySelectorAll(".menu a[href^='#']")].filter((a) => a.getAttribute("href").length > 1);
const obsMenu = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
links.forEach((a) => { const s = document.querySelector(a.getAttribute("href")); if (s) obsMenu.observe(s); });

// FAQ: uma resposta aberta por vez
const itens = document.querySelectorAll(".faq details");
itens.forEach((d) => d.addEventListener("toggle", () => {
  if (d.open) itens.forEach((o) => { if (o !== d) o.open = false; });
}));

// Botão flutuante some na hero e no contato
const flutua = document.querySelector(".wa-flutua");
const naTela = new Set();
const obsFlutua = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => (e.isIntersecting ? naTela.add(e.target) : naTela.delete(e.target)));
  flutua.classList.toggle("oculto", naTela.size > 0);
}, { threshold: 0.15 });
document.querySelectorAll(".hero, .contato").forEach((el) => obsFlutua.observe(el));

document.getElementById("ano").textContent = new Date().getFullYear();
