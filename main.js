// tady je místo pro náš program

//Jmeno Prijmeni a vek
/*let Jmeno = prompt("Jake je Vase krestni jmeno?");
let Prijmeni = prompt("Jake je Vase prijmeni?");
let Narozen = prompt("Jaky je Vas rok narozeni?");
let Colour = prompt("What is your favourite colour?");

document.body.innerHTML += "<p id=odstavec>" + Jmeno + " " + Prijmeni + ", vek: " + (2023-Narozen) + "</p>";

odstavec.style.color = Colour */


//Parsování data

/*Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. */

const parseDate = (datum) => {
	return {
		den: Number(datum.slice(0, 2)),
		mesic: Number(datum.slice(3, 5)),
		rok: Number(datum.slice(6)),
	}
}

let datumNarozeni = ('19.07.1985')

console.log(parseDate(datumNarozeni))

/*let day = day.padStart(2,"0")
let month = month.padStart(2,"0")

const formatDate = (day,month,year) => {
    return {
        date: Number(day,month,year)
    }
}*/

/*Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt 
představující datum v následujícím formátu.
{ day: 12, month: 3, year: 2015 }*/

const formatDate = (datum) => {
    let den = String(datum.day)
    let mesic = String(datum.month)
    let rok = String(datum.year)
    

    return den.padStart(2,'0') + '.' + mesic.padStart(2,'0') + '.' + rok.padStart(4,'20')
}

let mojeLetosniNarozeniny = { day: 19, month: 7, year: 23 }

console.log(formatDate(mojeLetosniNarozeniny))



/*Napište proto funkci jménem round, která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel.

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. Tedy například 3.5 se zaokrouhlí na 4, naopak 2.5 se zaokrouhlí na 2.*/

/*const round = (cislo) => {
	const celeCislo = Math.trunc(cislo)
	const zaDesetinnouCarkou = cislo - celeCislo
	if (Math.abs(zaDesetinnouCarkou) === 0.5) {
		if (celeCislo % 2 === 0) {
			return celeCislo
		} else {
			return celeCislo + 2 * zaDesetinnouCarkou
		}
	}
	return Math.round(cislo)
}*/

const round = (cislo) => {
	const celaCast = Math.trunc(cislo)
	const necelaCast = cislo - celaCast
	if (Math.abs(necelaCast) === 0.5) {
		if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast + 2 * necelaCast
		}
	}
	return Math.round(cislo)
}

let cislo = ('3.5')

console.log(round(cislo))