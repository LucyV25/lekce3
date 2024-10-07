/*const jmeno = prompt("Zadej jmeno")
const vek = Number(prompt("zadej věk"))



document.body.innerHTML += "<p>" + jmeno + ", věk: " + vek+ "</p>"
*/

const hodinovka = Number(prompt("hodinovka v Kč"))
const pocetHodin = Number(prompt("pocet hodin"))
const pocetDni = Number(prompt("počet dní"))
const hrubaMzda = Number(hodinovka*pocetHodin*pocetDni)
document.body.innerHTML += "<p>" + "Hrubá mzda je: " + hrubaMzda+ "</p>"