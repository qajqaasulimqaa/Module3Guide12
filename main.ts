{const img = document.querySelector<HTMLImageElement>("img");

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (!img) return;

  const left = parseInt(img.style.left || "0");
  const top = parseInt(img.style.top || "0");

  if (event.key === "ArrowLeft") {
    img.style.left = `${left - 10}px`;
  }

  if (event.key === "ArrowRight") {
    img.style.left = `${left + 10}px`;
  }

  if (event.key === "ArrowUp") {
    img.style.top = `${top - 10}px`;
  }

  if (event.key === "ArrowDown") {
    img.style.top = `${top + 10}px`;
  }
});
}