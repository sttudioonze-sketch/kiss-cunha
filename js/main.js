// Todos os botões de agendamento apontam para o mesmo WhatsApp
const WHATSAPP = "5511914801043";
const MENSAGEM = "Olá Dra. Kiss, tudo bem? Gostaria de agendar uma consulta!";
const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;

document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waUrl;
  a.target = "_blank";
  a.rel = "noopener";
});

// Menu mobile
const topo = document.getElementById("topo");
const menuBtn = topo.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const aberto = topo.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
topo.querySelectorAll(".menu a").forEach((a) =>
  a.addEventListener("click", () => {
    topo.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", false);
  })
);

// Borda do topo ao rolar
const marcaRolagem = () => topo.classList.toggle("rolou", scrollY > 10);
addEventListener("scroll", marcaRolagem, { passive: true });
marcaRolagem();

// Botão flutuante some enquanto a seção de contato está na tela
const flutua = document.querySelector(".wa-flutua");
new IntersectionObserver(([e]) => flutua.classList.toggle("oculto", e.isIntersecting), { threshold: 0.2 })
  .observe(document.getElementById("contato"));

// Entrada suave dos blocos
const blocos = document.querySelectorAll(".titulo, .proc, .sobre__txt, .sobre__foto, .faq, .contato > *");
const obs = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visto");
      obs.unobserve(e.target);
    }
  });
}, { rootMargin: "0px 0px -8% 0px" });
blocos.forEach((b) => { b.classList.add("revela"); obs.observe(b); });

document.getElementById("ano").textContent = new Date().getFullYear();
