$('.testimonal_container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:4000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-caret-left'></i>",
            "<i class='fa-solid fa-caret-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      // 1000:{
      //     items:5
      // }
  }
})




    //Respinsive navagation
    const menuBtn = document.querySelector(".nav_menu_button");
    const closeBtn = document.querySelector(".nav_close_button");
    const navagation =  document.querySelector(".Navagation");



menuBtn.addEventListener("click",() =>{
  navagation.classList.add("active");
});



closeBtn.addEventListener("click",() =>{
  navagation.classList.remove("active");
});