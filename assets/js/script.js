const SERVER_LINK = "https://www.roblox.com/games/INSERISCI-ID-GIOCO/NEW-YORK-ITA-RP";
const DISCORD_LINK = "https://discord.gg/INSERISCI-LINK";
const TOTAL_MEMBERS = "250+";
const VERSIONE = "v1.0";

document.querySelectorAll("[data-server-link]").forEach(a => a.href = SERVER_LINK);
document.querySelectorAll("[data-discord-link]").forEach(a => a.href = DISCORD_LINK);
document.querySelectorAll("[data-members]").forEach(el => el.textContent = TOTAL_MEMBERS);
document.querySelectorAll("[data-version]").forEach(el => el.textContent = VERSIONE);

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
if(btn && nav){ btn.addEventListener("click", () => nav.classList.toggle("open")); }
