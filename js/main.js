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
    name.focus();
  }
  
  if (age.value == "") {
    age.focus();
  }
  
  if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
    alert("Por favor, selecione um gênero.");
  }
  
  if (developmentTime.value == "") {
    developmentTime.focus();
  }
}
