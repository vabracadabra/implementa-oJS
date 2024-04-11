const dataAtual = new Date();
let datahalloween = prompt ("Data do próximo halloween:");
datahalloween = new Date (datahalloween + "T23:59:59");
let diasQueFaltam = Math.floor((datahalloween-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent=diasQueFaltam;

