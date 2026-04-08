document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");
const sections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  progressBar.style.transform = `scaleX(${progress})`;
};

const updateActiveLink = () => {
  const marker = window.scrollY + window.innerHeight * 0.28;

  sections.forEach((section) => {
    const isCurrent =
      marker >= section.offsetTop &&
      marker < section.offsetTop + section.offsetHeight;

    const id = section.getAttribute("id");
    const link = document.querySelector(`.site-nav a[href="#${id}"]`);

    if (link) {
      link.classList.toggle("is-active", isCurrent);
    }
  });
};

const updateGlow = (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--glow-x", `${x}%`);
  document.documentElement.style.setProperty("--glow-y", `${y}%`);
};

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateActiveLink();
});

window.addEventListener("resize", updateActiveLink);
window.addEventListener("pointermove", updateGlow);

updateScrollProgress();
updateActiveLink();
