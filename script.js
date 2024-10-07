/*

const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance"))
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "10000" -> 10000
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"


const jmeno = prompt("Zadej jmeno")
const vek = Number(prompt("zadej věk"))



document.body.innerHTML += "<p>" + jmeno + ", věk: " + vek+ "</p>"
*/
/*
const hodinovka = Number(prompt("Hodinová sazba v Kč"))
const pocetHodin = Number(prompt("Počet hodin"))
const pocetDni = Number(prompt("Počet dní"))
const hrubaMzda = Number(hodinovka*pocetHodin*pocetDni)
document.body.innerHTML += "<p>" + "Hrubá mzda je: " + hrubaMzda+ "</p>"
//alert(jmeno + "věk:" + vek)
*/
/*
const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const nazev2 = "Kniha 1"
const autor2 = "Michal Kucera"
const cena2 = 450
const naSklade2 = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}
kniha.jazyk="cestina"
kniha.autor="Jana"

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"
*/
//Realitka
/*
const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };
  apartment.status= 'taken'

  document.body.innerHTML += "<p>Dispozice bytu: " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p>Nájem bez poplatků: " + apartment.price.rent + "</p>"
  document.body.innerHTML += "<p>Výměra: " + JSON.stringify(apartment.area) + "</p>"
  const mestskaCast = apartment.city + "-" +apartment.district
document.body.innerHTML += "<p>Město-městská část: " + mestskaCast+"</p>"
document.body.innerHTML += "<p>Status: " + apartment.status +"</p>"

//Knihovna
const kniha = {
    nazev: "Harry Potter",
    autor: "J.K.Rowling",
    cena: 450,
    naSklade: true,
    pocetStran: 1000,
    jazyk: "čeština",
    publication:{
        rok: 1996,
        vydavatelstvi: "Little, Brown and Company",
        mesto: "New York",
    }
}
const kniha2 = {
    nazev: "1984",
    autor: "George Orwell",
    cena: 350,
    naSklade: false,
    pocetStran: 328,
    jazyk: "angličtina",
    publication: {
        rok: 1949,
        vydavatelstvi: "Secker & Warburg",
        mesto: "Londýn",
    },
};
*/
//očkování
const jmeno = prompt("Zadej krestni jmeno")
const prijmeni = prompt("Zadej prijmeni")
const vek = Number(prompt("Zadej věk"))
const person = {
    jmeno: jmeno + " " + prijmeni,
    vek: vek,
    jazyk: window.navigator.language,
    
}
document.body.innerHTML += "<p>Jmeno: " + person.jmeno +"</p>"
document.body.innerHTML += "<p>Prijmeni: " + person.vek +"</p>"
document.body.innerHTML += "<p>Jazyk: " + person.jazyk +"</p>"
console.log(person)