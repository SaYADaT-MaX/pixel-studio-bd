// Pixel Studio BD - update this number to your WhatsApp number (international format, no +)
const WHATSAPP_NUMBER = "8801336478777";
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", () => {
    const opened = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
  });
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.addEventListener("click", event => {
      if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.includes("YOUR")) {
        event.preventDefault();
        alert("Please set your WhatsApp number in script.js first.");
      } else if (el.tagName === "A") {
        const message = el.dataset.message || "Hello Pixel Studio BD! I want to discuss a website project.";
        el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      }
    });
  });
  const form = document.querySelector("#contactForm");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "Hello Pixel Studio BD! I want to discuss a website project.",
      `Name: ${data.get("name")}`,
      `Business/brand: ${data.get("business") || "Not provided"}`,
      `Website type: ${data.get("type")}`,
      `Budget: ${data.get("budget") || "Not decided"}`,
      `Details: ${data.get("details") || "Not provided"}`
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
  const chips = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    cards.forEach(card => card.hidden = !(filter === "all" || card.dataset.category === filter));
  }));
});
