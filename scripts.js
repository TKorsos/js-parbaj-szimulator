// console.log-ok és felesleges kommentek törlése

// HP számítás darabszám szerint majd aszerint sebezzen 241023-1230
// darabszám frissítését is meg kell oldani hogy aszerint menjen a ciklus tovább

let megjelenito = document.querySelector(".js-megjelenit");
let kezdesMegjelenito = document.querySelector(".js-start-container");
let kivalasztoMegjelenito = document.querySelector(".js-valaszto-container");
let tamadasGomb = document.querySelector(".js-tamad");
let jatekIndit = document.querySelector(".js-start");

// sebzés kiírás módosítása
/*
number - sebzés minimum
number - sebzés maximum
kiírásban lehet string kiszámítás után és kötőjellel összekötve
pl "3-5"
*/
let ellensegek = [
    {
        ellensegNev: "Kobold",
        ellensegFegyverNev: "Tüskés buzogány",
        sebzesAlapSzorzo: 2,
        sebzesAlapNovelo: 1,
        eletero: 5,
        alapEletero: 5,
        sebzesKiiras: "1-2",
    },
    {
        ellensegNev: "Farkaslovas",
        ellensegFegyverNev: "Kard és éles fogak",
        sebzesAlapSzorzo: 3,
        sebzesAlapNovelo: 2,
        eletero: 10,
        alapEletero: 10,
        sebzesKiiras: "2-4",
    },
    {
        ellensegNev: "Ork",
        ellensegFegyverNev: "Dobóbalta",
        sebzesAlapSzorzo: 4,
        sebzesAlapNovelo: 2,
        eletero: 15,
        alapEletero: 15,
        sebzesKiiras: "2-5",
    },
    {
        ellensegNev: "Ogre",
        ellensegFegyverNev: "Bunkósbot",
        sebzesAlapSzorzo: 7,
        sebzesAlapNovelo: 6,
        eletero: 40,
        alapEletero: 40,
        sebzesKiiras: "6-12",
    },
    {
        ellensegNev: "Roc",
        ellensegFegyverNev: "Hatalmas csőr és éles karmok",
        sebzesAlapSzorzo: 5,
        sebzesAlapNovelo: 11,
        eletero: 60,
        alapEletero: 60,
        sebzesKiiras: "11-15",
    },
    {
        ellensegNev: "Küklopsz",
        ellensegFegyverNev: "Hatalmas szikla",
        sebzesAlapSzorzo: 5,
        sebzesAlapNovelo: 16,
        eletero: 70,
        alapEletero: 70,
        sebzesKiiras: "16-20",
    },
    {
        ellensegNev: "Behemót",
        ellensegFegyverNev: "Éles nagy karmok",
        sebzesAlapSzorzo: 21,
        sebzesAlapNovelo: 30,
        eletero: 160,
        alapEletero: 160,
        sebzesKiiras: "30-50",
    },
]

let induloAlapok = {
    jatekosEletero: ellensegek[0].eletero,
    jatekosSablon: ellensegek[0],
    ellensegSablon: ellensegek[0],
    jatekosLenyAlapEletero: ellensegek[0],
    ellenfelLenyAlapEletero: ellensegek[0],
    sebzes: 0,
    ellenfelSebzes: 0,
    darabszam: 1,
    ellenfelDarabszam: 1,
    talalat: 0,
    vedoTalalat: 0,
    talalatiSzorzo: 10,
    tamadoTalalatSzazalek: 5,
    vedoTalalatSzazalek: 5,
    kezdes: false,
    tamadoTortenet: '',
    vedoTortenet: '',
    tamadasTortenet: ["balról suhint és eltalálja.", "jobbról suhint és eltalálja.", "egy hírtelen mozdulattal felülről lecsap és eltalálja.", "egy hírtelen mozdulattal előreszúr és eltalálja."],
    vedesTortenet: ["balról suhint és eltalálja.", "jobbról suhint és eltalálja.", "egy hírtelen mozdulattal előreszúr és eltalálja."],
}

// !!!!darabszám kiszámítása és az alapján sebezzen a következő körben!!!!
let tamadoVeletlenSebzes = () => {
    induloAlapok.sebzes = 0;

    for(let i = 1; i <= induloAlapok.darabszam; ++i) {
        induloAlapok.talalat = Math.floor(Math.random() * induloAlapok.talalatiSzorzo);

        induloAlapok.sebzes += induloAlapok.talalat < induloAlapok.tamadoTalalatSzazalek ? 0 : Math.floor((Math.random() * induloAlapok.jatekosSablon.sebzesAlapSzorzo) + induloAlapok.jatekosSablon.sebzesAlapNovelo);

        // teszt
        console.log("Játékos: " + induloAlapok.darabszam);
    }
    
    return induloAlapok.sebzes;
}

// !!!!darabszám kiszámítása és az alapján sebezzen a következő körben!!!!
let vedoVeletlenSebzes = () => {
    induloAlapok.ellenfelSebzes = 0;

    for(let i = 1; i <= induloAlapok.ellenfelDarabszam; ++i) {
        induloAlapok.vedoTalalat = Math.floor(Math.random() * induloAlapok.talalatiSzorzo);

        induloAlapok.ellenfelSebzes += induloAlapok.vedoTalalat < induloAlapok.vedoTalalatSzazalek ? 0 : Math.floor((Math.random() * induloAlapok.ellensegSablon.sebzesAlapSzorzo) + induloAlapok.ellensegSablon.sebzesAlapNovelo);

        // teszt
        console.log("Ellenfél: " + induloAlapok.ellenfelDarabszam);
    }
    
    return induloAlapok.ellenfelSebzes;
}

let veletlenTamadasTortenet = () => {
    induloAlapok.tamadoTortenet = induloAlapok.jatekosSablon.ellensegNev + ' ' + induloAlapok.vedesTortenet[Math.floor(Math.random() * induloAlapok.vedesTortenet.length)];

    return induloAlapok.tamadoTortenet;
}

let veletlenVedesTortenet = () => {
    induloAlapok.vedoTortenet = induloAlapok.ellensegSablon.ellensegNev + ' ' + induloAlapok.tamadasTortenet[Math.floor(Math.random() * induloAlapok.tamadasTortenet.length)];

    return induloAlapok.vedoTortenet;
}

let sebzesTortenet = (talalat, talalatSzazalek, kezdes, ellenseg, sebzes) => {
    if(talalat < talalatSzazalek && kezdes === false) {
        return "A párbaj hamarosan elkezdődik.";
    }
    else {
        return 'A(z) '+ellenseg+' által okozott sebzés: <span class="sebzes-szin">'+sebzes+'</span> pont';
    }
}

function jatekBeallitasok() {
    // lényszám megadása
    induloAlapok.darabszam = Number(document.querySelector(".js-jatekos-darabszam").value);
    induloAlapok.ellenfelDarabszam = Number(document.querySelector(".js-ellenfel-darabszam").value);
    induloAlapok.jatekosSablon = ellensegek[Number(document.querySelector(".js-fegyver").value)];
    induloAlapok.jatekosEletero = ellensegek[Number(document.querySelector(".js-fegyver").value)].eletero;
    induloAlapok.ellensegSablon = ellensegek[Number(document.querySelector(".js-ellenfel").value)];
    jatekIndit.classList.add("gomb-elrejt");
    kezdesMegjelenito.classList.add("gomb-elrejt");
    // életerő kiszámítása
    induloAlapok.jatekosEletero = induloAlapok.darabszam * induloAlapok.jatekosEletero;
    induloAlapok.ellensegSablon.eletero = induloAlapok.ellenfelDarabszam * induloAlapok.ellensegSablon.eletero;
    // sebzés kiszámítása jatekos és ellefel részéről is! majd hasonlóan az életerőhöz ezt is frissíteni kell ahogy fogynak a lények

    // teszt
    // bug: mirror meccseknél nem jól írja ki? néha átvált több lénybe mint amennyi van?
    // bug megoldva?
    induloAlapok.jatekosLenyAlapEletero = ellensegek[Number(document.querySelector(".js-fegyver").value)].alapEletero;
    induloAlapok.ellenfelLenyAlapEletero = ellensegek[Number(document.querySelector(".js-ellenfel").value)];

    render();
}

function sebzesGomb() {
    // darabszám változása sebzés után mindig ellenőrizze hogy hány darab lény él még aminek 0-nál nagyobb életereje van
    // Math.ceil(eletero / leny_eletero) = egesz szam ( ahány darab lény él )
    // bug: mirror meccseknél nem jól írja ki? néha átvált több lénybe mint amennyi van?
    // bug megoldva?
    induloAlapok.darabszam = Math.ceil(induloAlapok.jatekosEletero / induloAlapok.jatekosLenyAlapEletero);
    induloAlapok.ellenfelDarabszam = Math.ceil(induloAlapok.ellensegSablon.eletero / induloAlapok.ellenfelLenyAlapEletero.alapEletero);

    // sebzés kiszámítása jatekos és ellefel részéről is! majd hasonlóan az életerőhöz ezt is frissíteni kell ahogy fogynak a lények

    induloAlapok.jatekosEletero -= vedoVeletlenSebzes();
    induloAlapok.ellensegSablon.eletero -= tamadoVeletlenSebzes();
    veletlenTamadasTortenet();
    veletlenVedesTortenet();
    induloAlapok.kezdes = true;

    render();
}

// lény megadása min 1 max 100? de nem biztos vagy nagyobb intervallum? 9999?
function valasztoMegjelenito() {
    let html = `<input type="text" size="2" name="jatekos_darabszam" class="js-jatekos-darabszam jatekos-darabszam" value="${induloAlapok.darabszam}">
            <select name="fegyverek" class="js-fegyver fegyver">`;
            for(let i = 0; i < ellensegek.length; ++i) {
                html += `<option value="${i}">${ellensegek[i].ellensegNev}</option>`;
            };
    html += `</select>
            <input type="text" size="2" name="ellenfel_darabszam" class="js-ellenfel-darabszam ellenfel-darabszam" value="${induloAlapok.ellenfelDarabszam}">
            <select name="ellenfelek" class="js-ellenfel ellenfel">`;
            for(let i = 0; i < ellensegek.length; ++i) {
                html += `<option value="${i}">${ellensegek[i].ellensegNev}</option>`;
            };
    html += `</select>`;

    return html;
}

// sebzesHatar helyett min mellette max és kiírásba közéjük - jel
// sebzés kiszámítása jatekos és ellefel részéről is! majd hasonlóan az életerőhöz ezt is frissíteni kell ahogy fogynak a lények
function megjelenitoSablon(nev, oldalClass, eletero, fegyvernev, sebzesHatar, talalat, talalatSzazalek, tortenet, sebzes) {
    return `
        <div class="${oldalClass}-megjelenito">
            <h1>${nev}</h1>
            <h3 class="${oldalClass}-eletero">${ eletero > 0 ? 'Életerő: <span class="eletero-szin">'+ eletero +'</span> pont' : 'A '+nev+' meghalt!' }</h3>
            <h3>Fegyver: <span class="fegyver-szin">${fegyvernev}</span></h3>
            <h3>Sebzés: <span class="sebzes-szin">${sebzesHatar}</span> életerőpont</h3>
            <h4>${ talalat < talalatSzazalek && induloAlapok.kezdes ? 'A(z) '+nev+'nak sikerült kitérnie így nem tudta megsebezni.' : tortenet}</h4>
            <h4>${ sebzes }</h4>
        </div>
    `;
}

function render() {
    kezdesMegjelenito.classList.contains("gomb-elrejt") === false ? kivalasztoMegjelenito.innerHTML = valasztoMegjelenito() : kivalasztoMegjelenito.innerHTML = '';

    if(jatekIndit.classList.contains("gomb-elrejt") === true) {
        megjelenito.innerHTML = megjelenitoSablon(induloAlapok.jatekosSablon.ellensegNev, "tamado", induloAlapok.jatekosEletero, induloAlapok.jatekosSablon.ellensegFegyverNev, induloAlapok.jatekosSablon.sebzesKiiras, induloAlapok.vedoTalalat, induloAlapok.vedoTalalatSzazalek, induloAlapok.vedoTortenet, sebzesTortenet(induloAlapok.vedoTalalat, induloAlapok.vedoTalalatSzazalek, induloAlapok.kezdes, induloAlapok.ellensegSablon.ellensegNev, induloAlapok.ellenfelSebzes), induloAlapok.darabszam);

        megjelenito.innerHTML += megjelenitoSablon(induloAlapok.ellensegSablon.ellensegNev, "vedo", induloAlapok.ellensegSablon.eletero, induloAlapok.ellensegSablon.ellensegFegyverNev, induloAlapok.ellensegSablon.sebzesKiiras, induloAlapok.talalat, induloAlapok.tamadoTalalatSzazalek, induloAlapok.tamadoTortenet, sebzesTortenet(induloAlapok.talalat, induloAlapok.tamadoTalalatSzazalek, induloAlapok.kezdes, induloAlapok.jatekosSablon.ellensegNev, induloAlapok.sebzes), induloAlapok.ellenfelDarabszam);
    }

    induloAlapok.ellensegSablon.eletero <= 0 || induloAlapok.jatekosEletero <= 0 || jatekIndit.classList.contains("gomb-elrejt") === false ? tamadasGomb.classList.add("gomb-elrejt") : tamadasGomb.classList.remove("gomb-elrejt");
}

function initialize() {
    tamadasGomb.addEventListener("click", sebzesGomb);
    jatekIndit.addEventListener("click", jatekBeallitasok);

    render();
}

initialize();
