var btnScrollToTop = document.querySelector("#scrollUp");
btnScrollToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

