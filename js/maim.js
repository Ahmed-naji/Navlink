let but = document.getElementById("but");
let openMoue = document.getElementById("open");

const open = ()=>{
    if(openMoue.classList.contains("openMoue")){
        openMoue.classList.remove("openMoue");
        openMoue.classList.add("hidden");
    }else{
        openMoue.classList.add("openMoue")
        openMoue.classList.remove("hidden");
    }
}

but.addEventListener('click' , open)