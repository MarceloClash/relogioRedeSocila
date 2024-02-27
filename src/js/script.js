function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  Options = {
    weenkday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("pt-BR", Options);

  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("data").textContent = date;
}
setInterval(updateTime, 1000);
updateTime();
