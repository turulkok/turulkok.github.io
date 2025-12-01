function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleProjects() {
  const moreProjects = document.getElementById("more-projects");
  const btn = document.getElementById("toggle-btn");

  if (
    moreProjects.style.display === "none" ||
    moreProjects.style.display === ""
  ) {
    moreProjects.style.display = "flex"; // Gizli projeleri aç
    btn.innerText = "Daha Az Göster"; // Buton yazısını değiştir
  } else {
    moreProjects.style.display = "none"; // Gizli projeleri kapat
    btn.innerText = "Daha Fazla Göster"; // Buton yazısını değiştir
  }
}
