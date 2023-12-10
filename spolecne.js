
const menuTlacitko = document.querySelector("#menu-tlacitko")
const menuPolozky= document.querySelector("#menu-polozky")

menuTlacitko.addEventListener("click",() => {

  if (menuPolozky.classList.contains("show")) {
      menuPolozky.classList.remove("show")
  }else{
    menuPolozky.classList.add("show")
  }
})
 
const ikona = document.querySelector(".fas")

ikona.addEventListener("click",() => {

        if(ikona.classList.contains("fa-bars")) {
          ikona.classList.remove("fa-bars")
          ikona.classList.add("fa-xmark")
        } else {
          ikona.classList.remove("fa-xmark")	
          ikona.classList.add("fa-bars")
        }
})

