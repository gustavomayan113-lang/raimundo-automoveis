// Número do WhatsApp da loja (DDI + DDD + número, só dígitos)
const WHATSAPP = "5571999999999";

const carros = [
  { nome: "Renault Sandero 1.0", ano: 2019, km: "48.000 km", cambio: "Manual", preco: 52900, tipo: "hatch", img: "img/car1.jpg" },
  { nome: "Fiat Doblò Cargo 1.4", ano: 2018, km: "72.000 km", cambio: "Manual", preco: 64900, tipo: "utilitario", img: "img/car2.jpg" },
  { nome: "Chevrolet Onix Plus LT", ano: 2021, km: "35.000 km", cambio: "Automático", preco: 79900, tipo: "sedan", img: "img/car3.jpg" },
  { nome: "Renault Sandero Stepway", ano: 2020, km: "41.000 km", cambio: "Manual", preco: 61900, tipo: "hatch", img: "img/car1.jpg" },
  { nome: "Chevrolet Onix Plus Premier", ano: 2022, km: "22.000 km", cambio: "Automático", preco: 92900, tipo: "sedan", img: "img/car3.jpg" },
  { nome: "Fiat Doblò Essence 1.8", ano: 2019, km: "60.000 km", cambio: "Manual", preco: 74900, tipo: "utilitario", img: "img/car2.jpg" }
];

const real = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const linkZap = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function render(tipo) {
  const grade = document.getElementById("grade");
  grade.innerHTML = carros
    .filter((c) => tipo === "todos" || c.tipo === tipo)
    .map((c) => `
      <article class="card">
        <div class="card-img"><img src="${c.img}" alt="${c.nome}" loading="lazy"><span class="ano">${c.ano}</span></div>
        <div class="card-corpo">
          <h3>${c.nome}</h3>
          <p class="info">${c.km} • ${c.cambio}</p>
          <p class="preco">${real(c.preco)}</p>
          <a class="btn btn-zap" target="_blank" href="${linkZap(`Olá! Tenho interesse no ${c.nome} ${c.ano} (${real(c.preco)}) que vi no site da Raimundo Automóveis.`)}">Tenho interesse • WhatsApp</a>
        </div>
      </article>`)
    .join("");
}

document.querySelectorAll(".filtro").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelector(".filtro.ativo").classList.remove("ativo");
    b.classList.add("ativo");
    render(b.dataset.tipo);
  })
);

document.getElementById("zapFlutuante").href = linkZap("Olá! Vim pelo site da Raimundo Automóveis e gostaria de mais informações.");
render("todos");
