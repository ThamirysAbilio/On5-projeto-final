(function() {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#674582";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "#674582";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});

// EVENTO SETINHA SAIBA MAIS SOBRE A AUTORA ok
const setaAutora = document.querySelector('.arrow')
setaAutora.addEventListener('click', function (e) {
  e.preventDefault()
  setaAutora.classList.toggle('arrow-close')
  const autoraSobre = document.querySelector('.secao-autora__about')
  autoraSobre.classList.toggle('opened');
})
