var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function checkInputLength() {
	return input.value.length > 0
	}

function addItemToList() {
	 var li = document.createElement("li");
	     li.appendChild(document.createTextNode(input.value));
	     ul.appendChild(li);
	     input.value = "";
	
}

function crossDoneItem() {
	var selectedLi = event.target; 
    var finished = selectedLi.classList.toggle("done");	

    if (finished) {
  	   var deleteButton = createDeleteButton();
  	   selectedLi.appendChild(deleteButton);
  }else {
  	var deleteButton = selectedLi.getElementsByClassName("deletebtn")
  		selectedLi.removeChild(deleteButton[0]);
  }  

}

function createDeleteButton() {
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.className = "deletebtn";
	delButton.addEventListener("click" , removeItemAfterClick);
	return delButton;
}

function removeItemAfterClick() {
	var deleteItem = event.target.parentElement;
	ul.removeChild(deleteItem);
}


function addItemToListAfterClick() {
	console.log("click");
	if (checkInputLength()){
	     addItemToList();
	    } 
	// body...
}

function addItemToListAfterKeyPress(event){
	if (checkInputLength() && event.keyCode === 13 ){
	     addItemToList();
	}
}


button.addEventListener("click" , addItemToListAfterClick);
	    

input.addEventListener("keypress" , addItemToListAfterKeyPress);

ul.addEventListener("click", crossDoneItem);
	 
	