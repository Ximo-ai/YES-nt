function info(pkt, inform){

    var punkt = document.getElementById(pkt);
    var infomation = document.getElementById(inform);

    //alert(container):
    punkt.addEventListener('mouseenter', function () {
        infomation.classList.remove('hide');
        infomation.classList.add('show');
    })
    punkt.addEventListener("mouseleave", function () {
        infomation.classList.remove('show');
        infomation.classList.add('hide');

    })
}

info('cpu', "cpuInfo");
info('pcie', "pciInfo");
info('ram', "ramInfo");
info('m2', "m2Info");
info('Audio', "audioInfo");
info('sata', "sataInfo");
info('eps', "epsInfo");
info('usb', "usbInfo");
info('LAN', "lanInfo");
info('chipset', "chipInfo");