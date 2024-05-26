document.addEventListener("keyup", e=>{

   if(e.target.matches("#buscador")){

        if(e.key ==="Escape")e.target.value = ""

        document.querySelectorAll("#articulo").forEach(ropa =>{

        ropa.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?ropa.classList.remove("filtro")
            :ropa.classList.add("filtro")
    })
    }
})