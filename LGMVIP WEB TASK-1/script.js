let inputBox = document.getElementById("inputBox");
let ListContainer = document.getElementById("listContainer");
showTask();
// To Add an Element in the list We are we are creating an Li where we are storing the value of the inputbox
function AddTask() {
    if (inputBox.value === "") {
        alert("You Must Write Something!");
    } else {
        let Li = document.createElement("Li");
        Li.innerHTML = inputBox.value;
        ListContainer.appendChild(Li);  
        // In the ListContainer we are adding the Li which we created in the above expression 

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        Li.appendChild(span);
        // creating a span for deleting 
    }
    inputBox.value = "";
    saveData();
}

// To mark the list as checked and unchecked and to delete the element from the list
ListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// for saving the data in the localStorage; storage 
function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
// For displaying the data which is stored in the local storage 
function showTask()
{
    ListContainer.innerHTML==localStorage.getItem("data");
}
showTask();