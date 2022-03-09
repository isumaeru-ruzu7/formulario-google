function inputWhy(disabled) {
  
  if (disabled == true) {
    document.getElementById("inputWhyYouDontLike").value = "";
  }
  document.getElementById("inputWhyYouDontLike").disabled = disabled;
}

function getValues() {
  var name = userForm.name;
  console.log(name.value);
  var age = userForm.age;
  console.log(age.value);
  
  if (document.getElementById("genderR1").checked) {
    console.log("Masculino");
  }else if (document.getElementById("genderR2").checked) {
    console.log("Feminino");
  }else if (document.getElementById("genderR3").checked) {
    console.log("Não Binário")
  }
  
  var developmentTime = userForm.developmentTime;
  console.log(developmentTime.value);
  
  var idesEngines = userForm.ides;
  console.log(idesEngines.value);
  
  if (document.getElementById("likeR1").checked) {
    console.log("Sim");
  }else if (document.getElementById("likeR2").checked) {
    console.log("Não");
    console.log(document.getElementById("inputWhyYouDontLike").value);
  }
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
  
  getValues();
}

var splash = document.getElementById("splashScreen");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(()=>{
    splash.classList.add("display-none");
  }, 2100);
});
