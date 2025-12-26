const ratingbtn = document.querySelectorAll(".rat");
let selected = null;

ratingbtn.forEach(button => {
    button.addEventListener("click", (e) => {
        selected = button.value;

        ratingbtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    })
})




const btnSub = document.getElementById("btnSubmit");
const overlay = document.getElementById("overlay")
const textDiv=document.querySelector(".seleccion .text")

btnSub.addEventListener("click", (e) => {
    overlay.style.display = "flex"
    try {


        if (!selected) {
            Swal.fire({
                icon: "warning",
                text: "Debes seleccionar una puntuacion"
            })

        } else{
            textDiv.textContent=textDiv.textContent = `You selected ${selected} out of 5`;

        }

        //cerrar
        overlay.addEventListener("click",(e)=>{
            overlay.style.display="none";
            ratingbtn.forEach(btn=>btn.classList.remove("active"));

            selected=null;
        })
    }catch(error){
        console.log("Hubo un error");
        Swal.fire({
            icon:"error",
            text:"Algo salio mal"
        })

    }
    })