var banco = [
    {
        serie: "1",
        placa: "A515-54G-52FY",
        processador: "Intel Core i7 – 10510U",
        memoria: "8 GB RAM DDR4 (4 GB Soldada + 4 GB Módulo)",
        hd: "512 GB SSD PCIe 3.0 x4 NVMe (M.2 2280)",
        fonte: "Adaptador AC Bivolt de 3 pinos (45W) com cabo certificação INMETRO",
        garantia: "27/09/2018"
    },
    {
        serie: "2",
        placa: "82CGS00100",
        processador: "Intel Core i5-10300H",
        memoria: "8GB (instalada)",
        hd: "256 GB SSD M.2 PCIe NVMe",
        fonte: "AC: 135W",
        garantia: "07/12/2020"
    },
    {
        serie: "3",
        placa: "M515DA-BR1213W",
        processador: "AMD Ryzen 5 3500U 2,1 GHz",
        memoria: "8 GB",
        hd: "256 GBPCIe NVMe 3.0 x2 M.2 SSD",
        fonte: "45W, 2 Cells / 3300 mAh",
        garantia: "25/01/2019"
    }
]

$("#pesquisar").click(function(){
    var numero_serie = $("#nserie").val()
    //console.log(banco)

    var filtro = banco.filter( e => e.serie == numero_serie)
    var tabela = document.getElementById("resultado_pesquisa")
    tabela.innerHTML = ""
    filtro.forEach(e => {
        tabela.innerHTML += `<tr>`+
                                `<td>${e.placa}</td>`+
                                `<td>${e.processador}</td>`+
                                `<td>${e.memoria}</td>`+
                                `<td>${e.hd}</td>`+
                                `<td>${e.fonte}</td>`+
                                `<td>${e.garantia}</td>`+
                            `</tr>`
    });
})