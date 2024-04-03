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

  /*POKUS
  const updateSkill = (id, number) => {
    let number = 0;
    if (number === promptHTML) {
      let id = "#skill1"
    } else if (number === promptCSS) {
      let id = "#skill2"
    } else if (number === promptJS) {
      let id = "#skill3"
    } else {
      alert("Zkuste zadat hodnoty znovu")
    }

  const skillProgressHTML = document.querySelector(id);
  const skillValueHTML = document.querySelector(id);
  const skillProgressCSS = document.querySelector(id);
  const skillValueCSS = document.querySelector(id);
  const skillProgressJS = document.querySelector(id);
  const skillValueJS = document.querySelector(id);

  skillValueHTML.textContent = number / 100;
  skillProgressHTML.style.width = number + "%";
  skillValueCSS.textContent = number / 100;
  skillProgressCSS.style.width = number + "%";
  skillValueJS.textContent = number / 100;
  skillProgressJS.style.width = number + "%";
  }

    const userInput = (promptHTML, promptCSS, promptJSJS) => {
    const promptHTML = Number(prompt("Ohodnoťte své znalosti HTML na stupnici od 0 do 100:"));
    const promptCSS = Number(prompt("Ohodnoťte své znalosti CSS na stupnici od 0 do 100:"));
    const promptJS = Number(prompt("Ohodnoťte své znalosti JavaScriptu na stupnici od 0 do 100:"));
   return promptHTML, promptCSS, promptJS; 
  }

  const userSkill = updateSkill("#skill1", userInput);*/

