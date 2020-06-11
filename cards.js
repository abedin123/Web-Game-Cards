//pravljenje potrebnih nizova i varijabli za funkcije zadatka
{
    var genbroj;
    var prekoslike=0;
    var stari=null;
    var brojacigraca = 0; 
    var otvoreno = 0; 
    var bodoviigrac1 = 0; 
    var bodoviigrac2 = 0; 
    var matrica = document.getElementsByClassName("itemukoloni"); 
    var karte = new Array(); 
    var nizotvoreno = new Array(); 
    var ostaje_na_mjestu = new Array(); 
    document.getElementById("bodoviigraca1").innerHTML = 0; 
    document.getElementById("bodoviigraca2").innerHTML = 0; 
    var mjestosmajl = new Array();
}
//generisanje pozicija za smajlije
{
    for (var i = 0; i < 8; i++) { 
        mjestosmajl.push(Math.floor((Math.random() * 24 + 1)));
    }
    for (var i = 0; i < 8; i++) {
        if (i > 1 && ImaIsti(mjestosmajl[i], i)) {
            mjestosmajl[i] = (Math.floor((Math.random() * 24 + 1)));
        }
    }
    function ImaIsti(broj, index) { 
        for (var i = 0; i < 8; i++) {
            if (mjestosmajl[i] == broj && i != index)
                return true;
        }
        return false;
    }
}
//postavljanje pocetnih brojeva u matricu i slika na vec odredjene pozicije
{
    for (var i = 0; i < 25; i++) { 
        karte.push(matrica[i].children[0].children[0].children[1]);
    }
    for (var i = 0; i < 8; i++) {
        if (i <4) {
            var elem = document.createElement("img"); 
            elem.setAttribute("src", "smajli.png");
            elem.setAttribute("height", "120");
            elem.setAttribute("width", "100");
            elem.classList.add("slika");
            karte[mjestosmajl[i]].appendChild(elem);
        }
        else{
            var elem = document.createElement("img"); 
            elem.setAttribute("src", "smajlo.png");
            elem.setAttribute("height", "120");
            elem.setAttribute("width", "100");
            elem.classList.add("slika");
            karte[mjestosmajl[i]].appendChild(elem);
        }
    }
    for (var i = 0; i < 25; i++) { 
        if(i!=mjestosmajl[0]&&i!=mjestosmajl[1]&&i!=mjestosmajl[2]&&i!=mjestosmajl[3]&&i!=mjestosmajl[4]&&i!=mjestosmajl[5]&&i!=mjestosmajl[6]&&i!=mjestosmajl[7])
            karte[i].innerHTML = Math.floor((Math.random() * 10) + 1);
    }
}
//izracunavanje koliko puta ostaje taj isti broj na mjestu
{
    for (var i = 0; i < 25; i++) {
        var red = parseInt((i / 5)) + 1; 
        var kolona = ((i - ((red - 1) * 5))) + 1; 
        var zbir = red + kolona; 
        ostaje_na_mjestu.push(zbir); 
    }
}
    for (var i = 0; i < 25; i++) { 
        nizotvoreno.push(0); 
    }
function PromijeniIgraca()
{
    if(brojacigraca==0)
        brojacigraca++;
        else
        brojacigraca--;
}
function DodajBodoveIgracu(brojbodova,e)
{
    if(brojacigraca==0)
    {
            bodoviigrac1+=brojbodova;
            document.getElementById("bodoviigraca1").innerHTML = bodoviigrac1; 
            if(bodoviigrac1>=50)
                document.write("POBJEDAAAA IGRACCC 1!!!!!!");
    }
    else{
            bodoviigrac2+=brojbodova;
            document.getElementById("bodoviigraca2").innerHTML = bodoviigrac2; 
            if(bodoviigrac2>=50)
            document.write("POBJEDAAAA IGRACCC 2!!!!!!");
    }
}
function DodajBodovePrekoSlike(e)
{
    if(brojacigraca==0)
    {
        if(e.children[0].getAttribute("src")=="smajlo.png")
            {
                bodoviigrac1*=2;
                document.getElementById("bodoviigraca1").innerHTML = bodoviigrac1; 
                if(bodoviigrac1>=50)
                 document.write("POBJEDAAAA IGRACCC 1!!!!!!");
            }
            else{
                bodoviigrac1=0;
                document.getElementById("bodoviigraca1").innerHTML = bodoviigrac1; 
            }
    }
    else{
        if(e.children[0].getAttribute("src")=="smajlo.png")
            {
                bodoviigrac2*=2;
                document.getElementById("bodoviigraca2").innerHTML = bodoviigrac2; 
                if(bodoviigrac2>=50)
                    document.write("POBJEDAAAA IGRACCC 2!!!!!!");
            }
            else{
                bodoviigrac2=0;
                document.getElementById("bodoviigraca2").innerHTML = bodoviigrac2; 
            }
    }
}
function NapraviSliku(slika)
{  
        var elem = document.createElement("img"); 
        elem.setAttribute("src", slika);
        elem.setAttribute("height", "120");
        elem.setAttribute("width", "100");
        elem.classList.add("slika");
        return elem;
}
function GenNoviBroj()
{
    stari.innerHTML=Math.floor((Math.random() * 10 + 1));
}
function GenPoziciju(tren)
{
    genbroj=Math.floor((Math.random() * 24 + 1));
    for (var i = 0; i < 25; i++){
        if(genbroj!=mjestosmajl[0]&&genbroj!=mjestosmajl[1]&&genbroj!=mjestosmajl[2]&&genbroj!=mjestosmajl[3]&&genbroj!=mjestosmajl[4]&&genbroj!=mjestosmajl[5]&&genbroj!=mjestosmajl[6]&&genbroj!=mjestosmajl[7]&&tren!=genbroj)
            return genbroj;
            else
                GenPoziciju();
    }
}
function PronadjiIndex(indd)
{
    var index=0;
    for (var i = 0; i < 8; i++){
        if(mjestosmajl[i]==indd)
            index=i;
    }
    return index;
}
function Dodijelivrijednost(event) { 
    var e = event.srcElement; 
    var index = 0; 
    if (e.classList[0] == "front") 
        e = e.parentElement.children[1];
    if (e.classList[0] == "card")
        e = e.children[1];
    if (e.classList[0] == "slika")
        e = e.parentElement;
    for (var i = 0; i < 25; i++) {  
        if (karte[i] == e) {
            index = i;
            if(otvoreno==0)
            {
                if(e.childElementCount>0)
                {
                    DodajBodovePrekoSlike(e);
                    prekoslike=1;
                    stari=e;
                }
                else
                {
                    if(ostaje_na_mjestu[i]>0)
                    {
                         DodajBodoveIgracu(parseInt(e.innerHTML),e);
                         ostaje_na_mjestu[i]--;
                    }
                    else
                    {
                        var red = parseInt((i / 5)) + 1; 
                        var kolona = ((i - ((red - 1) * 5))) + 1; 
                        var zbir = red + kolona; 
                        ostaje_na_mjestu[i]=zbir;
                        karte[i].innerHTML=Math.floor((Math.random() * 10 + 1));
                        ostaje_na_mjestu[i]--;
                    }
                }
                otvoreno++;
                PromijeniIgraca();
            }
            else
            {
                if(prekoslike==1&&stari!=null)
                {
                    var elem=NapraviSliku(e.children[0].getAttribute("src"));
                    var genbroj=GenPoziciju(i);
                    e.children[0].remove();
                    var ind=PronadjiIndex(i);
                    mjestosmajl[ind]=genbroj;
                    karte[genbroj].innerHTML='';
                    karte[genbroj].appendChild(elem);
                    setTimeout(GenNoviBroj, 500);
                    stari=e;
                    prekoslike--;
                }
                otvoreno--;
            }
        }
    }
}

