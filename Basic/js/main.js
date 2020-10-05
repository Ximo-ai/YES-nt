const summaryCompHandler = document.getElementById("summaryComp")


let gfx = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1660 OC 6GB GDDR5 ",
        price: 939,
    },
    {
        id: 2,
        name: "Gigabyte Radeon RX 5600 XT Gaming OC 6GB GDDR6 ",
        price: 1349,
    },
    {
        id: 3,
        name: "MSI GeForce RTX 2070 SUPER Gaming X 8GB GDDR6",
        price: 1799,
    },
    {
        id: 4,
        name: "Gigabyte GeForce GT 1030 OC 2GB GDDR5",
        price: 394.29,
    },
]


let mb = [
    {
        id: 1,
        name: "Dobra płyta TYSIONC",
        price: 929
    },
    {
        id: 2,
        name: "Średnia Płyta ECO Bubble",
        price: 699
    },
    {
        id: 3,
        name: "Słaba Płyta A+++",
        price: 1359
    },
]

let cpu = [
    {
        id: 1,
        name: "Intel i-7 2400k",
        price: 1600
    },
    {
        id: 2,
        name: "Intel Ryzen 5",
        price: 399
    },
    {
        id: 3,
        name: "Bosch core t-0",
        price: 8973
    },
]
var cart = [
    {
        name: 'mainboard',
        price: 0
    },
    {
        name:'cpu',
        price:'0'
    },

    {
        name:'gfx',
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
    console.log("Wybrany element ma ID"+strAtt);

    const summaryCpu = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGpu = document. getElementById("summaryGpu");

    if (SelectId == "cpu") {
        summaryCpu.innerHTML = cpu[strAtt - 1].name + " " + cpu[strAtt - 1].price + "zł"
        cart[1].price = cpu[strAtt - 1].price
        cart[1].name = cpu[strAtt - 1].name
    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML = mb[strAtt - 1].name + " " + mb[strAtt - 1].price + "zł"
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        document.getElementById("summaryMainboard").innerHTML="mainboard:"+cart[0].name+" "+cart[0].price
    }
    else if (SelectId == "gpu"){
        summaryGpu.innerHTML = gfx[strAtt - 1].name + " " + gfx[strAtt - 1].price + "zł"
        cart[2].price = gfx[strAtt - 1].price
        cart[2].name = gfx[strAtt - 1].name
    }
    else
    {}

    document.getElementById('sumAll').innerHTML="<b>Suma Koszyka:"+ (parseFloat(cart[0].price)+parseFloat(cart[1].price)+parseFloat(cart[2].price))

}



for(let i=0; i<mb.length; i++) {
    addOpt("mb", mb[i].id, mb[i].name)
}

for (let i=0; i<gfx.length; i++){
    addOpt("gpu", gfx[i].id, gfx[i].name)
}

for (let i=0; i< cpu.length; i++){
    addOpt("cpu", cpu[i].id, cpu[i].name)


}


