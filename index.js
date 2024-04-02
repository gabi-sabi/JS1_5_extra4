const updateSkill = ("id", 0) => {
  const skillProgressHTML = document.querySelector("id");
  return skillProgressHTML.style.width = "0%";
};
  
  const promptHTML = Number(prompt("Ohodnoťte své znalosti HTML na stupnici od 0 do 100:"));
  const promptCSS = Number(prompt("Ohodnoťte své znalosti CSS na stupnici od 0 do 100:"));
  const promptJS = Number(prompt("Ohodnoťte své znalosti JavaScriptu na stupnici od 0 do 100:"));

  const idHTML = "#skill1 .skill__progress";
  const change = updateSkill(idHTML, promptHTML)

  /* MY VERSION - WITHOUT FUNCTION
  const promptHTML = Number(prompt("Ohodnoťte své znalosti HTML na stupnici od 0 do 100:"));
  const promptCSS = Number(prompt("Ohodnoťte své znalosti CSS na stupnici od 0 do 100:"));
  const promptJS = Number(prompt("Ohodnoťte své znalosti JavaScriptu na stupnici od 0 do 100:"));

  const skillProgressHTML = document.querySelector("#skill1 .skill__progress");
  const skillValueHTML = document.querySelector("#skill1 .skill__value");
  const skillProgressCSS = document.querySelector("#skill2 .skill__progress");
  const skillValueCSS = document.querySelector("#skill2 .skill__value");
  const skillProgressJS = document.querySelector("#skill3 .skill__progress");
  const skillValueJS = document.querySelector("#skill3 .skill__value");

  skillValueHTML.textContent = `${promptHTML} / 100`;
  skillProgressHTML.style.width = `${promptHTML}%`;
  skillValueCSS.textContent = `${promptCSS} / 100`;
  skillProgressCSS.style.width = `${promptCSS}%`;
  skillValueJS.textContent = `${promptJS} / 100`;
  skillProgressJS.style.width = `${promptJS}%`;
*/
