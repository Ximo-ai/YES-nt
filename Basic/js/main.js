const summaryCompHandler = document.getElementById("summaryComp")


let gfx = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1660 OC 6GB GDDR5 ",
        price: 939,
        img: "gtx1660.jpg"
    },
    {
        id: 2,
        name: "Gigabyte Radeon RX 5600 XT Gaming OC 6GB GDDR6 ",
        price: 1349,
        img: "5600xt.jpg"
    },
    {
        id: 3,
        name: "MSI GeForce RTX 2070 SUPER Gaming X 8GB GDDR6",
        price: 1799,
        img: "2070.png"
    },
    {
        id: 4,
        name: "Gigabyte GeForce GT 1030 OC 2GB GDDR5",
        price: 394.29,
        img: "1030.jpg"
    },
    {
        id: 5,
        name: "Turbo Bite 1927437",
        price: 215.37,
        img: "turbo.jpg"
    },
]


let mb = [
    {
        id: 1,
        name: "Dobra płyta TYSIONC",
        price: 929,
        img: "mother.jpg"
    },
    {
        id: 2,
        name: "Średnia Płyta ECO Bubble",
        price: 699,
        img: "mother2.jpg"
    },
    {
        id: 3,
        name: "Słaba Płyta A+++",
        price: 1359,
        img: "mother3.jpg"
    },
]

let cpu = [
    {
        id: 1,
        name: "Intel i-7 2400k",
        price: 1600,
        Socket: 827,
        img: "i7.jpg"
    },
    {
        id: 2,
        name: "Intel Ryzen 5",
        price: 399,
        Socket: 997,
        img: "Ryzen.jpg"
    },
    {
        id: 3,
        name: "Bosch core t-0",
        price: 3200.99,
        Socket: 2137,
        img: "Bosch.jpg"
    },
]

let Ram = [
    {
        id: 1,
        name: "Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3200",
        price: 134.80,
        img: "corsair.jpg"
    },
    {
        id: 2,
        name: "Crucial 16GB Kit (8GBx2) DDR3/DDR3L 1600 MT/S",
        price: 300,
        img: "crucial.jpg"
    },
    {
        id: 3,
        name: "Corsair Vengeance RGB PRO 32GB (2x16GB) DDR4 3200",
        price: 375.13,
        img: "corsairlpx.jpeg"
    },
]

let Power = [
    {
        id: 1,
        name: "SeaSonic Focus GX-550W (FOCUS-GX-550)",
        price: 635.80,
        img: "sea.jpg"
    },
    {
        id: 2,
        name: "Corsair TXM 850W (CP-9020130-EU)",
        price: 128,
        img: "txm.jpeg"
    },
    {
        id: 3,
        name: "Corsair RM650x 650W (CP-9020178-EU)",
        price: 2137,
        img: "rm.png"
    },
]

let Case = [
    {
        id: 1,
        name: "Obudowa be quiet! DArk Bas Pro 900 V2 (BGW15)",
        price: 1288.23,
        img: "bequiet.jpeg"
    },
    {
        id: 2,
        name: "Obudowa Asus ROG Strix Helios GX601 (90DC0020-B39000)",
        price: 1674.23,
        img: "helios.png"
    },
    {
        id: 3,
        name: "Obudowa Thermaltake Core P5 Tempered Glass Edition",
        price: 920.67,
        img: "core.jpg"
    },
]

let Strg = [
    {
        id: 1,
        name: "Dysk TYMSIONC",
        price: 900,
        img: "hybrid.jpeg"
    },
    {
        id: 2,
        name: "Szymbki Dysk ESESDE",
        price: 600,
        img: "ssd.jpg"
    },
    {
        id: 3,
        name: "Wolmny Dysk HADEDE",
        price: 2,
        img: "hdd.jpg"
    },
]

let Brk = [
    {
        id: 1,
        name: "Biurko PRO-GAMER D-3000",
        price: 649,
        img: "stol1.jpg"
    },
    {
        id: 2,
        name: "Biurko Ultradesk Frag",
        price: 599,
        img: "Stol2.jpg"
    },
    {
        id: 3,
        name: "Biurko Ultradesk Grand",
        price: 799,
        img: "Stol3.jpg"
    },
]

let Ldo = [
    {
        id: 1,
        name: "Samsung Family Hub RF56N9740SG",
        price: 15999,
        img: "Lodowka1.jpg"
    },
    {
        id: 2,
        name: "Miele KWNS 28462 E",
        price: 15799,
        img: "Lodowka2.jpg"
    },
    {
        id: 3,
        name: "Samsung Family Hub RF56M9540SR",
        price: 13499,
        img: "Lodowka3.jpg"
    },
]

let Krz = [
    {
        id: 1,
        name: "Fotel Akracing Master Premium Czarny",
        price: 1359,
        img: "fotel2.jpg"
    },
    {
        id: 2,
        name: "Fotel Genesis Trit 600 RGB",
        price: 1099,
        img: "Fotel1.jpg"
    },
    {
        id: 3,
        name: "Fotel Akracing Office Obsidian Czarny ",
        price: 1399,
        img: "Fotel3.jpg"
    },
]

let Chl = [
    {
        id: 1,
        name: "Chłodzenie CPU be quiet! Dark Rock 4",
        price: 285,
        img: "Chl1.jpg"
    },
    {
        id: 2,
        name: "Chłodzenie CPU SilentiumPC Fortis 3",
        price: 155,
        img: "Chl2.jpg"
    },
    {
        id: 3,
        name: "Chłodzenie CPU be quiet! Dark Rock 4 Pro",
        price: 422.80,
        img: "Chl3.jpg"
    },
]

var cart = [
    {
        name: 'mainboard',
        price:'0'
    },
    {
        name:'cpu',
        price:'0',
        Socket: '0'
    },

    {
        name:'gfx',
        price:'0'
    },

    {
        name:'Ram',
        price:'0'
    },

    {
        name:'Case',
        price:'0'
    },

    {
        name:'Power',
        price:'0'
    },

    {
        name:'Brk',
        price:'0'
    },

    {
        name:'Krz',
        price:'0'
    },

    {
        name:'Ldo',
        price:'0'
    },

    {
        name:'Chl',
        price:'0'
    },



]

function  addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("value", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}

function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute("value");
    console.log("Wybrany element ma ID:"+strAtt);

    document.getElementById("sumAll").innerHTML= "<b>Suma Koszyka:"+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price+cart[6].price+cart[7].price+cart[8].price+cart[9].price)
    function sumCart(cart){
        console.log("Ilość elementów w Koszyku:"+cart.length)
        let cena = 0;

        for (let i=0; i<cart.length; i++)
            cena = parseInt(cena) + parseInt(cart[i].price)

        return cena;
    }


    const summaryCpu = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGpu = document. getElementById("summaryGpu");
    const summaryRam = document. getElementById("summaryRam");
    const summaryCase = document. getElementById("summaryCase");
    const summaryPower = document. getElementById("summaryPower");
    const summaryLdo = document. getElementById("summaryLdo");
    const summaryBrk = document. getElementById("summaryBrk");
    const summaryKrz = document. getElementById("summaryKrz");
    const summaryStrg = document. getElementById("summaryStrg");
    const summaryChl = document. getElementById("summaryChl");

    if (SelectId == "cpu") {
        summaryCpu.innerHTML = "<td><img src='img/"+cpu[strAtt -1].img+"'></td>"+"<td>"+cpu[strAtt -1].name + "<td>Socket: " +cpu[strAtt - 1].Socket + "</td><td>Cena: " + cpu[strAtt - 1].price + "zł" + "</td>"
        cart[0].price = cpu[strAtt - 1].price
        cart[0].name = cpu[strAtt - 1].name
        cart[0].Socket = cpu[strAtt - 1].Socket
    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML = "<td><img src='img/"+mb[strAtt -1].img+"'></td>"+ "<td>"+ mb[strAtt - 1].name +  "<td></td>" + "</td><td>Cena: " + mb[strAtt - 1].price + "zł" + "</td>"
        cart[1].price = mb[strAtt - 1].price
        cart[1].name = mb[strAtt - 1].name

    }
    else if (SelectId == "gpu"){
        summaryGpu.innerHTML = "<td><img src='img/"+gfx[strAtt -1].img+"'></td>"+ "<td>"+ gfx[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + gfx[strAtt - 1].price + "zł"+"</td>"
        cart[2].price = gfx[strAtt - 1].price
        cart[2].name = gfx[strAtt - 1].name
    }
    else if (SelectId == "Ram"){
        summaryRam.innerHTML = "<td><img src='img/"+Ram[strAtt -1].img+"'></td>"+ "<td>"+ Ram[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Ram[strAtt - 1].price + "zł"+"</td>"
        cart[3].price = Ram[strAtt - 1].price
        cart[3].name = Ram[strAtt - 1].name
    }

    else if (SelectId == "Case"){
        summaryCase.innerHTML = "<td><img src='img/"+Case[strAtt -1].img+"'></td>"+ "<td>"+ Case[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Case[strAtt - 1].price + "zł"+"</td>"
        cart[4].price = Case[strAtt - 1].price
        cart[4].name = Case[strAtt - 1].name
    }

    else if (SelectId == "Strg"){
        summaryStrg.innerHTML = "<td><img src='img/"+Strg[strAtt -1].img+"'></td>"+ "<td>"+ Strg[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Strg[strAtt - 1].price + "zł"+"</td>"
        cart[5].price = Strg[strAtt - 1].price
        cart[5].name = Strg[strAtt - 1].name
    }

    else if (SelectId == "Power"){
        summaryPower.innerHTML = "<td><img src='img/"+Power[strAtt -1].img+"'></td>"+ "<td>"+ Power[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Power[strAtt - 1].price + "zł"+"</td>"
        cart[6].price = Power[strAtt - 1].price
        cart[6].name = Power[strAtt - 1].name
    }

    else if (SelectId == "Brk"){
        summaryBrk.innerHTML = "<td><img src='img/"+Brk[strAtt -1].img+"'></td>"+ "<td>"+ Brk[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Brk[strAtt - 1].price + "zł"+"</td>"
        cart[7].price = Brk[strAtt - 1].price
        cart[7].name = Brk[strAtt - 1].name
    }

    else if (SelectId == "Krz"){
        summaryKrz.innerHTML = "<td><img src='img/"+Krz[strAtt -1].img+"'></td>"+ "<td>"+ Krz[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Krz[strAtt - 1].price + "zł"+"</td>"
        cart[8].price = Krz[strAtt - 1].price
        cart[8].name = Krz[strAtt - 1].name
    }

    else if (SelectId == "Ldo"){
        summaryLdo.innerHTML = "<td><img src='img/"+Ldo[strAtt -1].img+"'></td>"+ "<td>"+ Ldo[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Ldo[strAtt - 1].price + "zł"+"</td>"
        cart[9].price = Ldo[strAtt - 1].price
        cart[9].name = Ldo[strAtt - 1].name
    }

    else if (SelectId == "Chl"){
        summaryChl.innerHTML = "<td><img src='img/"+Chl[strAtt -1].img+"'></td>"+ "<td>"+ Chl[strAtt - 1].name + "<td></td>" + "</td><td>Cena: " + Chl[strAtt - 1].price + "zł"+"</td>"
        cart[10].price = Chl[strAtt - 1].price
        cart[10].name = Chl[strAtt - 1].name
    }
    else
    {}

    document.getElementById('sumAll').innerHTML="<b>Suma Koszyka:"+ sumCart(cart)+ "zł</b>"

}
//(parseFloat(cart[0].price)+parseFloat(cart[1].price)+parseFloat(cart[2].price))


for(let i=0; i<mb.length; i++) {
    addOpt("mb", mb[i].id, mb[i].name)
}

for (let i=0; i<gfx.length; i++){
    addOpt("gpu", gfx[i].id, gfx[i].name)
}

for (let i=0; i< cpu.length; i++){
    addOpt("cpu", cpu[i].id, cpu[i].name)

}

for (let i=0; i< Ram.length; i++){
    addOpt("Ram", Ram[i].id, Ram[i].name)

}

for (let i=0; i< Power.length; i++){
    addOpt("Power", Power[i].id, Power[i].name)

}

for (let i=0; i< Case.length; i++){
    addOpt("Case", Case[i].id, Case[i].name)

}

for (let i=0; i< Strg.length; i++){
    addOpt("Strg", Strg[i].id, Strg[i].name)

}

for (let i=0; i< Brk.length; i++){
    addOpt("Brk", Brk[i].id, Brk[i].name)

}

for (let i=0; i< Krz.length; i++){
    addOpt("Krz", Krz[i].id, Krz[i].name)

}

for (let i=0; i< Ldo.length; i++){
    addOpt("Ldo", Ldo[i].id, Ldo[i].name)

}

for (let i=0; i< Chl.length; i++){
    addOpt("Chl", Chl[i].id, Chl[i].name)

}

//Socket: " +cpu[strAtt - 1].Socket + "</td><td>Cena: " + cpu[strAtt - 1].price + "zł" + "</td>"

//Socket: '0' ,


