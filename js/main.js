function inputWhy(disabled) {
  
  if (disabled == true) {
    document.getElementById("inputWhyYouDontLike").value = "";
  }
  document.getElementById("inputWhyYouDontLike").disabled = disabled;
}

function validade() {
  var name = userForm.name;
  var age = userForm.age;
  var gender = userForm.gender;
  var developmentTime = userForm.developmentTime;
  
  if (name.value == "") {
    alert("Por favor, escreva seu nome completo.");
    name.focus();
    return;
  }
  
  if (age.value == "") {
    alert("Por favor, escreva sua idade.")
    age.focus();
    return;
  }
  
  if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
    alert("Por favor, selecione um gênero.");
    return;
  }
  
  if (developmentTime.value == "") {
    developmentTime.focus();
    return;
  }
  
  document.getElementById("formScreen").style.display = "none";
  document.getElementById("concludedScreen").style.display = "block";
}

var splash = document.getElementById("splashScreen");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(()=>{
    splash.classList.add("display-none");
  }, 2100);
});
