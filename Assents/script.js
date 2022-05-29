const modalViews = document.querySelectorAll(".seemore_container")
const modalbuttons = document.querySelectorAll(".modal_buttons")
const modal_close = document.querySelectorAll(".modal_close")

function modal(modal_click){
    modalViews[modal_click].classList.add("modal_active")
}

modalbuttons.forEach((mb, i)=>{
    mb.addEventListener("click", ()=>{
        modal(i)
    })
})
modal_close.forEach((mc)=>{
    mc.addEventListener("click", ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove("modal_active")
        })
    })
})


const sr= ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2100,
    delay: 100
})
sr.reveal(".section_home")
sr.reveal(".icons_redes", {origin: "bottom"})
sr.reveal(".section_about", {origin: "left"})
sr.reveal(".section_experience", {origin: "left"})
sr.reveal(".contentexp")
sr.reveal(".section_services", {origin: "bottom"})
sr.reveal(".section_works")
sr.reveal(".section_contact", {origin: "bottom"})



$(document).ready(function(){
    $(".list").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "Todos"){
            $(".card_W").show("1000")
        }else{
            $(".card_W").not("."+value).hide("1000");
            $(".card_W").filter("."+value).show("1000");

        }
    })
})

const listcontrol = document.querySelectorAll(".list")

let btnContainer = document.getElementById("list_const");

let btns = btnContainer.getElementsByClassName("list");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("li-active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" li-active", "");
    }

    this.className += " li-active";
  });
}






