let Name = document.getElementById("name");
let email = document.getElementById("email");
let btn = document.getElementById("Submit");
let phoneNumber = document.getElementById("phnumber");
let Cards = document.querySelector(".cards");
let Male = document.getElementById("Male");
let female = document.getElementById("Female");
let other = document.getElementById("Others");
let Html = "";

function image(event) {
  selectImage = URL.createObjectURL(event.target.files[0]);
}

function EnrollStudent() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = Array.from(checkboxes).map((checkbox) => checkbox.value);

  if (!Name.value || !email.value || !phoneNumber.value) {
    alert("You have not entered anything!");
  } else {
    Html += `
      <div class="cardbody">
          <div class="cardtext">
              <h4 class="title">${Name.value}</h4>
              <p class="text">${phoneNumber.value}</p>
              <p class="text">${email.value}</p>
              <p class="text">${
                Male.checked
                  ? Male.value
                  : female.checked
                  ? female.value
                  : "Others"
              }</p>
              <p class="text">${values.join(", ")} </p>
          </div>
        
          <div class="image">
              <img src="${selectImage}" alt="">
          </div>
          <hr>
      </div>
    `;
    Cards.innerHTML = Html;
    alert("Wow! You are successfully enrolled.");
    saveData();
    form.reset();
  }
}

function saveData() {
  localStorage.setItem("data", Cards.innerHTML);
}

function showTask() {
  Cards.innerHTML = localStorage.getItem("data");
}

showTask();
