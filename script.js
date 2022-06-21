function relogio(){

    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    minutos = zero(minutos);
    segundos = zero(segundos);

    function zero (x){
        if(x < 10){
          x = '0' + x;
        } return x;
    }
    
    let horario = horas + ":" + minutos + ":" + segundos;
    
    document.getElementById("relogio").value = horario;
}
    
let timer = setInterval(relogio,1000);
