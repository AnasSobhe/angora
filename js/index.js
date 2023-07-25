var userURLName = document.getElementById("bn");
var userURLLink = document.getElementById("su");
var mainInputs = [];

if (localStorage.getItem("mainInputs") != null) {
  var mainInputs = JSON.parse(localStorage.getItem("mainInputs"));
  displayInputs(mainInputs)
}



function addURL() {
  
  var errorMsg = validateForm();
  
  if ( errorMsg ) { 
    userInputs = {
      URLName: userURLName.value,
      URLLink: userURLLink.value,
    }
    mainInputs.push(userInputs)
    localStorage.setItem("mainInputs", JSON.stringify(mainInputs))
    // console.log(mainInputs)
    clearInputs()
    displayInputs()
  }

  } 

function clearInputs() {
  userURLName.value = "";
  userURLLink.value = "";
}

function displayInputs() {
  var cartona = "";
  for (i = 0; i < mainInputs.length; i++) {
    // template Literals 
    cartona += `<tr>
    <td>${i + 1}</td>
    <td>${mainInputs[i].URLName}</td>
    <td>${mainInputs[i].URLLink}</td>
    <td>
      <button class="btn btn-success" id="visitButton" onclick="visitLink(${i})">
        <i class="fa-solid fa-eye me-1"></i>Visit
      </button>
    </td>
    <td>
      <button class="btn btn-danger" onclick="deleteElement(${i})"> 
        <i class="fa-solid fa-trash me-1"></i>Delete
      </button>
    </td>
  </tr>`
  }
  document.getElementById("table-body").innerHTML = cartona
}


function deleteElement(list) {
  mainInputs.splice(list, 1);
  localStorage.setItem("mainInputs", JSON.stringify(mainInputs))
  displayInputs(mainInputs);
}

function validateForm() {
  var validURL = /^[A-Z][a-z]{3,7}$/
  // return validURL.test(userURLName.value)
  var validLink = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  // return validLink.test(userURLLink.value);
  // console.log (validURL.test ("Apple"))

  if ( validURL.test(userURLName.value) == false  ){

    return alert("Name Must be from 3 to 8 characters starts with with a capital letter");
    
  } else if ( validLink.test(userURLLink.value) == false ) {
    return  alert("The link should start with https like https://www.facebook.com/ ");
  }
  

  return true;

};

// function validateURLLink() {
//   var validLink = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
//   return validLink.test(userURLLink.value);
// }

// var visitButton = document.getElementById("visitButton")
// visitButton.addEventListener(`click`, function(){
//   window.open(mainInputs[i].URLLink) 
// })

function visitLink(i) {
  window.open(mainInputs[i].URLLink)
}



// ik the idea but i can even do it on the first function addURL()
function checkName () {
  for (var i = 0 ; i < mainInputs.length ; i++) {
    
    var checkURLName = mainInputs[i].URLName
    
    if ( checkURLName) {
      return alert (" The Name Is Already Exist ")
    }
  }

  return true; 

}

