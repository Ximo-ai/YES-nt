alert("aaa");
const blokHandler = document.getElementById("blok");

blokHandler.innerHTML = "Maine Stronen";

var gfx = {
    name: "China Uber Card 180GB GDDR20",
    ram: 180,
    coreHz: 202097,
    describe: "Best you can get in the world straight from Kim Jong Ung, this card can boil water on 5% power. Take it or we take u to prison"
}

var cpu = {
    name: "Kintel Core Kim 6",
    Ghz: "15",
    Good: "YES"
}

const cpuBlcok = document.getElementById("cpu");
cpuBlcok.innerHTML=cpu.name+"Name:<br>"

const gfxBlock = document.getElementById("gfx");
gfxBlock.innerHTML=gfx.name+"<br>"+gfx.ram+"GB<br>"+gfx.coreHz+"Mhz<br>"+gfx.describe+"<br>"