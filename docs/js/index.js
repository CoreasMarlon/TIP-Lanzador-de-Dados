function randomIntFromInterval(min,max)
{
    let num1 = Math.floor(Math.random()*(max-min+1)+min);
    let num2 = Math.floor(Math.random()*(max-min+1)+min);

    var status = document.getElementById("status");

    if(num1 > num2){
        status.innerHTML = "Jugador 1 es el ganador"
        document.getElementById("medal").classList.add('medal-activo');
    }else if(num1 < num2){
        status.innerHTML = "Jugador 2 es el ganador"
        document.getElementById("medal").classList.add('medal-activo');
    }else{
        status.innerHTML = "Empate"
        document.getElementById("medal").classList.remove('medal-activo');
    }

    document.getElementById("img1").src=`img/img_${num1}.svg`;
    document.getElementById("img2").src=`img/img_${num2}.svg`;
}