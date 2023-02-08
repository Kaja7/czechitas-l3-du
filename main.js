// tady je místo pro náš program

//Jmeno Prijmeni a vek
let Jmeno = prompt("Jake je Vase krestni jmeno?");
let Prijmeni = prompt("Jake je Vase prijmeni?");
let Narozen = prompt("Jaky je Vas rok narozeni?");
let Colour = prompt("What is your favourite colour?");

document.body.innerHTML += "<p id=odstavec>" + Jmeno + " " + Prijmeni + ", vek: " + (2023-Narozen) + "</p>";

odstavec.style.color = Colour 


