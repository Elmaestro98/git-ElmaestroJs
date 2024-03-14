const hourEl=document.getElementById("hour");

const minuteEl=document.getElementById("minutes");

const secondEl=document.getElementById("seconds");

const ampmEl=document.getElementById("ampm");
/*recuperatrion Heure minutes secondes Am*/


/*creation d'une fonction qui donne l heure actuelle
c-a-d local*/
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm ="AM";

    if(h > 12){ 
         h = h-12;
         ampm = "PM";
    }

    if(h < 10){
        h="0" +h; /*cette condition permet d'avoir O H*/
    }

    if(m < 10){
        m="0" +m; /*cette condition permet d'avoir O m*/
    }

    if(s < 10){
        s="0" +s; /*cette condition permet d'avoir O s*/
    }

    hourEl.innerText= h;
    minuteEl.innerText= m;
    secondEl.innerText= s;
    ampmEl,(innerText=ampm);

    /*création d un minuteur qui permet d'appeller la fonction chaque seconde*/
    setTimeout(()=>{
        updateClock()

    },1000)


}
/*appel de la fonction*/
updateClock()