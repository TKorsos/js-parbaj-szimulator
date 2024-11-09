let megjelenito = document.querySelector(".js-megjelenit");
let kezdesMegjelenito = document.querySelector(".js-start-container");
let kivalasztoMegjelenito = document.querySelector(".js-valaszto-container");
let tamadasGomb = document.querySelector(".js-tamad");
let jatekIndit = document.querySelector(".js-start");

let ellensegek = [
    {
        ellensegNev: "Kobold",
        ellensegFegyverNev: "Tüskés buzogány",
        lenyKep: "kobold",
        sebzesAlapSzorzo: 2,
        sebzesAlapNovelo: 1,
        eletero: 5,
        alapEletero: 5,
        sebzesKiirasAlso: 1,
        sebzesKiirasFelso: 2,
        alapSebzesAlso: 1,
        alapSebzesFelso: 2,
    },
    {
        ellensegNev: "Farkaslovas",
        ellensegFegyverNev: "Kard és éles fogak",
        lenyKep: "farkaslovas",
        sebzesAlapSzorzo: 3,
        sebzesAlapNovelo: 2,
        eletero: 10,
        alapEletero: 10,
        sebzesKiirasAlso: 2,
        sebzesKiirasFelso: 4,
        alapSebzesAlso: 2,
        alapSebzesFelso: 4,
    },
    {
        ellensegNev: "Ork",
        ellensegFegyverNev: "Dobóbalta",
        lenyKep: "ork",
        sebzesAlapSzorzo: 4,
        sebzesAlapNovelo: 2,
        eletero: 15,
        alapEletero: 15,
        sebzesKiirasAlso: 2,
        sebzesKiirasFelso: 5,
        alapSebzesAlso: 2,
        alapSebzesFelso: 5,
    },
    {
        ellensegNev: "Ogre",
        ellensegFegyverNev: "Bunkósbot",
        lenyKep: "ogre",
        sebzesAlapSzorzo: 7,
        sebzesAlapNovelo: 6,
        eletero: 40,
        alapEletero: 40,
        sebzesKiirasAlso: 6,
        sebzesKiirasFelso: 12,
        alapSebzesAlso: 6,
        alapSebzesFelso: 12,
    },
    {
        ellensegNev: "Roc",
        ellensegFegyverNev: "Hatalmas csőr és éles karmok",
        lenyKep: "roc",
        sebzesAlapSzorzo: 5,
        sebzesAlapNovelo: 11,
        eletero: 60,
        alapEletero: 60,
        sebzesKiirasAlso: 11,
        sebzesKiirasFelso: 15,
        alapSebzesAlso: 11,
        alapSebzesFelso: 15,
    },
    {
        ellensegNev: "Küklopsz",
        ellensegFegyverNev: "Hatalmas szikla",
        lenyKep: "kuklopsz",
        sebzesAlapSzorzo: 5,
        sebzesAlapNovelo: 16,
        eletero: 70,
        alapEletero: 70,
        sebzesKiirasAlso: 16,
        sebzesKiirasFelso: 20,
        alapSebzesAlso: 16,
        alapSebzesFelso: 20,
    },
    {
        ellensegNev: "Behemót",
        ellensegFegyverNev: "Éles nagy karmok",
        lenyKep: "behemot",
        sebzesAlapSzorzo: 21,
        sebzesAlapNovelo: 30,
        eletero: 160,
        alapEletero: 160,
        sebzesKiirasAlso: 30,
        sebzesKiirasFelso: 50,
        alapSebzesAlso: 30,
        alapSebzesFelso: 50,
    },
]

let induloAlapok = {
    jatekosEletero: ellensegek[0].eletero,
    jatekosSablon: ellensegek[0],
    ellensegSablon: ellensegek[0],
    jatekosLenyAlapEletero: ellensegek[0],
    ellenfelLenyAlapEletero: ellensegek[0],
    jatekosSebzesKiiras: `${ellensegek[0].sebzesKiirasAlso}-${ellensegek[0].sebzesKiirasFelso}`,
    ellenfelSebzesKiiras: `${ellensegek[0].sebzesKiirasAlso}-${ellensegek[0].sebzesKiirasFelso}`,
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

let tamadoVeletlenSebzes = () => {
    induloAlapok.sebzes = 0;

    for(let i = 1; i <= induloAlapok.darabszam; ++i) {
        induloAlapok.talalat = Math.floor(Math.random() * induloAlapok.talalatiSzorzo);

        induloAlapok.sebzes += induloAlapok.talalat < induloAlapok.tamadoTalalatSzazalek ? 0 : Math.floor((Math.random() * induloAlapok.jatekosSablon.sebzesAlapSzorzo) + induloAlapok.jatekosSablon.sebzesAlapNovelo);
    }
    
    return induloAlapok.sebzes;
}

let vedoVeletlenSebzes = () => {
    induloAlapok.ellenfelSebzes = 0;

    for(let i = 1; i <= induloAlapok.ellenfelDarabszam; ++i) {
        induloAlapok.vedoTalalat = Math.floor(Math.random() * induloAlapok.talalatiSzorzo);

        induloAlapok.ellenfelSebzes += induloAlapok.vedoTalalat < induloAlapok.vedoTalalatSzazalek ? 0 : Math.floor((Math.random() * induloAlapok.ellensegSablon.sebzesAlapSzorzo) + induloAlapok.ellensegSablon.sebzesAlapNovelo);
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
    induloAlapok.darabszam = Number(document.querySelector(".js-jatekos-darabszam").value);
    induloAlapok.ellenfelDarabszam = Number(document.querySelector(".js-ellenfel-darabszam").value);
    induloAlapok.jatekosSablon = ellensegek[Number(document.querySelector(".js-fegyver").value)];
    induloAlapok.jatekosEletero = ellensegek[Number(document.querySelector(".js-fegyver").value)].eletero;
    induloAlapok.ellensegSablon = ellensegek[Number(document.querySelector(".js-ellenfel").value)];
    jatekIndit.classList.add("gomb-elrejt");
    kezdesMegjelenito.classList.add("gomb-elrejt");
    induloAlapok.jatekosEletero = induloAlapok.darabszam * induloAlapok.jatekosEletero;
    induloAlapok.ellensegSablon.eletero = induloAlapok.ellenfelDarabszam * induloAlapok.ellensegSablon.eletero;
    induloAlapok.jatekosLenyAlapEletero = ellensegek[Number(document.querySelector(".js-fegyver").value)].alapEletero;
    induloAlapok.ellenfelLenyAlapEletero = ellensegek[Number(document.querySelector(".js-ellenfel").value)];

    render();
}

function sebzesGomb() {
    induloAlapok.darabszam = Math.ceil(induloAlapok.jatekosEletero / induloAlapok.jatekosLenyAlapEletero);
    induloAlapok.ellenfelDarabszam = Math.ceil(induloAlapok.ellensegSablon.eletero / induloAlapok.ellenfelLenyAlapEletero.alapEletero);
    induloAlapok.jatekosEletero -= vedoVeletlenSebzes();
    induloAlapok.ellensegSablon.eletero -= tamadoVeletlenSebzes();
    veletlenTamadasTortenet();
    veletlenVedesTortenet();
    induloAlapok.kezdes = true;

    render();
}

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

function megjelenitoSablon(nev, kep, oldalClass, eletero, fegyvernev, sebzesHatar, talalat, talalatSzazalek, tortenet, sebzes) {
    return `
        <div class="${oldalClass}-megjelenito">
            <h1>${nev}</h1>
            <img src="./img/creatures/stronghold/${kep}.jpg" alt="${nev}" class="leny-kep">
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
        megjelenito.innerHTML = megjelenitoSablon(induloAlapok.jatekosSablon.ellensegNev, induloAlapok.jatekosSablon.lenyKep, "tamado", induloAlapok.jatekosEletero, induloAlapok.jatekosSablon.ellensegFegyverNev, induloAlapok.jatekosSebzesKiiras, induloAlapok.vedoTalalat, induloAlapok.vedoTalalatSzazalek, induloAlapok.vedoTortenet, sebzesTortenet(induloAlapok.vedoTalalat, induloAlapok.vedoTalalatSzazalek, induloAlapok.kezdes, induloAlapok.ellensegSablon.ellensegNev, induloAlapok.ellenfelSebzes));

        megjelenito.innerHTML += megjelenitoSablon(induloAlapok.ellensegSablon.ellensegNev, induloAlapok.ellensegSablon.lenyKep, "vedo", induloAlapok.ellensegSablon.eletero, induloAlapok.ellensegSablon.ellensegFegyverNev, induloAlapok.ellenfelSebzesKiiras, induloAlapok.talalat, induloAlapok.tamadoTalalatSzazalek, induloAlapok.tamadoTortenet, sebzesTortenet(induloAlapok.talalat, induloAlapok.tamadoTalalatSzazalek, induloAlapok.kezdes, induloAlapok.jatekosSablon.ellensegNev, induloAlapok.sebzes));
    }

    induloAlapok.ellensegSablon.eletero <= 0 || induloAlapok.jatekosEletero <= 0 || jatekIndit.classList.contains("gomb-elrejt") === false ? tamadasGomb.classList.add("gomb-elrejt") : tamadasGomb.classList.remove("gomb-elrejt");
}

function initialize() {
    tamadasGomb.addEventListener("click", sebzesGomb);
    jatekIndit.addEventListener("click", jatekBeallitasok);

    render();
}

initialize();
