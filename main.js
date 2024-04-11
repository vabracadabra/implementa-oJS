const dataatual = new Date();
let datahalloween = prompt("data do proximo halloween:");
datahalloween = new Data(datahalloween+"T23:59:59");
let diasQueFaltam = Math.floor((datahalloween-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam;