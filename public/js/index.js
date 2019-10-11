window.addEventListener("scroll", function() {
    const navBar = document.querySelector(".navBar");
  
    if(window.pageYOffset > 0) {
      navBar.classList.add("bg-black");
      navBar.classList.add("txt-white");
    }
    else {
      navBar.classList.remove("bg-black");
      navBar.classList.remove("txt-white");
    }
  });
  
  $("#navBar a").on("click", function(e) {
    if(this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });