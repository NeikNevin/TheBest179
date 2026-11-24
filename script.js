/*
  THE BEST 2026 — настройки участников.
  Добавляй участников в king, queen и в нужную мини-номинацию в массиве miniNominations.
  Для каждого укажи имя, фамилию, фото и ссылку на отдельную страницу голосования.
*/

const nominationData = {
  king: {
    title: "THE BEST KING",
    description: "Главная мужская номинация премии. Выбери того, кто, по твоему мнению, достоин короны.",
    nominees: [
      // { name: "Имя Фамилия", photo: "images/nominees/person-1.jpg", voteUrl: "https://example.com/vote/king-1" }
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
    ]
  },
  queen: {
    title: "THE BEST QUEEN",
    description: "Главная женская номинация премии. Выбери ту, кто, по твоему мнению, достойна короны.",
    nominees: [
      // { name: "Имя Фамилия", photo: "images/nominees/person-2.jpg", voteUrl: "https://example.com/vote/queen-1" }
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
    ]
  }
};

/*
  Дополнительные мини-номинации.
  Чтобы добавить категорию, скопируй один объект и измени:
  key, title, shortMark, image и список nominees.
  image можно оставить пустым — появится фирменная графическая заглушка.
*/
const miniNominations = [
  
  {
    key: "humor",
    title: "Человек-МЕМ",
    shortMark: "LOL",
    image: "",
    nominees: []
  },
  
  {
    key: "Teacher",
    title: "Лучший Учитель",
    shortMark: "★",
    image: "",
    nominees: []
  },
  
  {
    key: "personality",
    title: "ЛИЧНОСТЬ ГОДА",
    shortMark: "BEST",
    image: "",
    nominees: []
  },

  {
    key: "styleGirl",
    title: "САМАЯ СТИЛЬНАЯ",
    shortMark: "№1",
    image: "",
    nominees: []
  },

  {
    key: "sex",
    title: "лучшая пара школы",
    shortMark: "♡",
    image: "",
    nominees: []
  },
  
  {
    key: "styleBoy",
    title: "САМЫЙ СТИЛЬНЫЙ",
    shortMark: "№1",
    image: "",
    nominees: []
  },

  {
    key: "csStreamer",
    title: "ЛУЧШИЙ в CS",
    shortMark: "CS",
    image: "", // например: "images/nominations/cs-streamer.png"
    nominees: [
      // { name: "Имя Фамилия", photo: "images/nominees/name.jpg", voteUrl: "https://example.com/vote/cs" }
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
      { name: "Никита Ситдиков", photo: "./img/person697432588.jpg", voteUrl: "https://example.com/vote/king-1" },
    ]
  },

  {
    key: "dotaPlayer",
    title: "ЛУЧШИЙ в DOTA",
    shortMark: "DOTA",
    image: "",
    nominees: []
  },
  
];

/* Картинка или знак в шапке окна номинантов */
const nominationArt = {
  king: { image: "./img/KingLogo.png", mark: "KING" },
  queen: { image: "./img/QueenLogo.png", mark: "QUEEN" }
};

miniNominations.forEach(item => {
  nominationData[item.key] = {
    title: item.title,
    nominees: item.nominees
  };
  nominationArt[item.key] = { image: item.image, mark: item.shortMark };
});

const miniGrid = document.querySelector("#otherNominations");
miniNominations.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "mini-nomination" + (item.nominees.length ? "" : " is-empty");

  const art = document.createElement("div");
  art.className = "mini-nomination-art";

  const number = document.createElement("span");
  number.className = "mini-nomination-number";
  number.textContent = String(index + 3).padStart(2, "0");

  const mark = document.createElement("span");
  mark.className = "mini-art-mark";
  mark.textContent = item.shortMark || "★";
  art.append(number, mark);

  if (item.image) {
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = `Иллюстрация: ${item.title}`;
    image.loading = "lazy";
    image.onload = () => { mark.style.display = "none"; };
    image.onerror = () => { image.remove(); };
    art.appendChild(image);
  }

  const title = document.createElement("h3");
  title.textContent = item.title;

  const button = document.createElement("button");
  button.className = "vote-open";
  button.dataset.nomination = item.key;
  button.innerHTML = 'ПРОГОЛОСОВАТЬ <span>↗</span>';

  card.append(art, title, button);
  miniGrid.appendChild(card);
});


const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const modal = document.querySelector("#voteModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const nomineeList = document.querySelector("#nomineeList");
const modalClose = document.querySelector("#modalClose");
const modalArt = document.querySelector("#modalArt");
const modalArtImg = document.querySelector("#modalArtImg");
const modalArtMark = document.querySelector("#modalArtMark");
const nomineeScroll = document.querySelector("#nomineeScroll");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function openNomination(key) {
  const nomination = nominationData[key];
  if (!nomination) return;

  modalTitle.textContent = nomination.title;
  modalDescription.textContent = nomination.description || "Выбери участника, которого хочешь поддержать своим голосом.";
  nomineeList.innerHTML = "";

  const art = nominationArt[key] || {};
  modalArtMark.textContent = art.mark || "★";
  modalArtMark.hidden = false;
  modalArtImg.hidden = true;
  modalArtImg.onload = () => { modalArtImg.hidden = false; modalArtMark.hidden = true; };
  modalArtImg.onerror = () => { modalArtImg.hidden = true; modalArtMark.hidden = false; };
  if (art.image) {
    modalArtImg.src = art.image;
  } else {
    modalArtImg.removeAttribute("src");
  }

  if (nomination.nominees.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Список участников этой номинации скоро появится.";
    empty.style.cssText = "grid-column:1/-1;color:#c4a58b;font-size:12px;line-height:1.8;padding:22px 0";
    nomineeList.appendChild(empty);
  } else {
    nomination.nominees.forEach((nominee, index) => {
      const card = document.createElement("article");
      card.className = "nominee-card";
      card.style.setProperty("--i", Math.min(index, 12));

      const portrait = document.createElement("div");
      portrait.className = "nominee-portrait";

      const placeholder = document.createElement("span");
      placeholder.className = "nominee-portrait-placeholder";
      placeholder.textContent = "ФОТО НОМИНАНТА";
      portrait.appendChild(placeholder);

      if (nominee.photo) {
        const img = document.createElement("img");
        img.src = nominee.photo;
        img.alt = `Фотография: ${nominee.name}`;
        img.loading = "lazy";
        img.onload = () => { placeholder.style.display = "none"; };
        img.onerror = () => { img.remove(); };
        portrait.appendChild(img);
      }

      const name = document.createElement("h3");
      name.className = "nominee-card-name";
      name.textContent = nominee.name;

      const channel = document.createElement("a");
      channel.className = "nominee-channel";
      channel.textContent = nominee.channelLabel || "КАНАЛ УЧАСТНИКА";
      if (nominee.channelUrl) {
        channel.href = nominee.channelUrl;
        channel.target = "_blank";
        channel.rel = "noopener noreferrer";
      } else {
        channel.href = "#";
        channel.addEventListener("click", event => event.preventDefault());
        channel.classList.add("is-unavailable");
      }

      const vote = document.createElement("button");
      vote.className = "nominee-vote";
      vote.textContent = "ВЫБРАТЬ";
      vote.addEventListener("click", () => {
        if (nominee.voteUrl) {
          window.open(nominee.voteUrl, "_blank", "noopener,noreferrer");
        } else {
          alert("Ссылка голосования для этого участника ещё не добавлена.");
        }
      });

      card.append(portrait, name, channel, vote);
      nomineeList.appendChild(card);
    });
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  nomineeScroll.scrollTop = 0;
  modalClose.focus({ preventScroll: true });
}

let lastFocusedElement = null;

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus({ preventScroll: true });
}

document.addEventListener("click", event => {
  const button = event.target.closest(".vote-open");
  if (button) {
    lastFocusedElement = button;
    openNomination(button.dataset.nomination);
  }
});

modalClose.addEventListener("click", closeModal);
modal.querySelector("[data-close-modal]").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (!modal.classList.contains("is-open")) return;
  if (event.key === "Escape") { closeModal(); return; }

  // Не даём фокусу уходить за пределы окна
  if (event.key === "Tab") {
    const focusable = [...modal.querySelectorAll("a[href], button:not([disabled])")]
      .filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

/* ============================================================
   НАСТРОЙКИ САЙТА
   RESULTS_DATE — дата и время объявления итогов.
   Формат: "2026-12-20T18:00:00+05:00" (+05:00 — Екатеринбург).
   Пока дата не задана, таймер показывает прочерки.
   ============================================================ */
const RESULTS_DATE = "";

document.documentElement.classList.add("js");

/* ---------- Статистика ---------- */
(function initStats() {
  const nominationsCount = 2 + miniNominations.length;
  const nomineesCount = Object.values(nominationData)
    .reduce((sum, item) => sum + item.nominees.length, 0);
  document.querySelector("#statNominations").textContent = nominationsCount;
  document.querySelector("#statNominees").textContent = nomineesCount;
})();

/* ---------- Таймер до итогов ---------- */
(function initCountdown() {
  const box = document.querySelector("#countdown");
  const strip = document.querySelector(".status-strip");
  const label = document.querySelector("#countdownLabel");
  const dateLabel = document.querySelector("#resultsDateLabel");
  const target = RESULTS_DATE ? new Date(RESULTS_DATE) : null;
  const units = {
    days: box.querySelector('[data-unit="days"]'),
    hours: box.querySelector('[data-unit="hours"]'),
    minutes: box.querySelector('[data-unit="minutes"]'),
    seconds: box.querySelector('[data-unit="seconds"]')
  };

  if (!target || isNaN(target)) {
    label.textContent = "ДАТА ИТОГОВ СКОРО ПОЯВИТСЯ";
    return;
  }

  dateLabel.textContent = target.toLocaleDateString("ru-RU", { day: "numeric", month: "long" }).toUpperCase();
  const pad = n => String(n).padStart(2, "0");

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      strip.classList.add("is-finished");
      label.textContent = "ГОЛОСОВАНИЕ ЗАВЕРШЕНО";
      Object.values(units).forEach(el => el.textContent = "00");
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    units.days.textContent = pad(Math.floor(s / 86400));
    units.hours.textContent = pad(Math.floor(s % 86400 / 3600));
    units.minutes.textContent = pad(Math.floor(s % 3600 / 60));
    units.seconds.textContent = pad(s % 60);
  }
  tick();
  const timer = setInterval(tick, 1000);
})();

/* ---------- Появление блоков при прокрутке ---------- */
(function initReveal() {
  const targets = document.querySelectorAll(
    ".nomination-card, .mini-nomination, .faq-list details, .intro-grid > *, .section-heading, .manifesto > :not(.manifesto-bg)"
  );
  targets.forEach(el => el.classList.add("reveal"));
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => observer.observe(el));
})();

/* ---------- Искры в первом экране ---------- */
(function initEmbers() {
  const canvas = document.querySelector("#embers");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let width = 0, height = 0, particles = [], running = true, raf = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, Math.max(24, width / 18)));
    particles = Array.from({ length: count }, () => spawn(true));
  }

  function spawn(initial) {
    return {
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + 10,
      r: Math.random() * 1.8 + 0.5,
      vy: Math.random() * 0.5 + 0.2,
      vx: (Math.random() - 0.5) * 0.3,
      life: Math.random() * Math.PI * 2
    };
  }

  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, i) => {
      p.y -= p.vy;
      p.x += p.vx + Math.sin(p.life) * 0.25;
      p.life += 0.02;
      const alpha = Math.max(0, Math.min(1, p.y / height)) * (0.5 + Math.sin(p.life * 2) * 0.3);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,${130 + Math.round(p.r * 25)},60,${alpha})`;
      ctx.shadowColor = "rgba(255,120,40,.9)";
      ctx.shadowBlur = 8;
      ctx.fill();
      if (p.y < -10) particles[i] = spawn(false);
    });
    raf = requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  new IntersectionObserver(entries => {
    running = entries[0].isIntersecting;
    if (running) { cancelAnimationFrame(raf); frame(); }
  }).observe(canvas);
  frame();
})();
