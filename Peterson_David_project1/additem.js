//  additem.js
// toBuy Project
// David Peterson 2013/5/8
// VFW 1305 assignment 3
// toBuy gives the user a central location to create a "wishlist"
// for books, music, software,
// ultimately the category can be linked to preferred online store
//


var checkBoxes = document.getElementById("inputForm").vendors;
// -- Border Active 
// -- Item Border
var focusBorder = function(){
    itemName.setAttribute("class", "hasFocus");
}
var blurBorder = function(){
    itemName.removeAttribute("class", "hasFocus");
}

// -- Get Input Information
// -- Get the value of the itemName
var getInformation = function(){
    var itemName = document.getElementById("itemName");
    var mediaType = document.getElementById("mediaType");
    var checkBoxes = document.getElementById("checkBoxes");
    var priority = document.getElementById("priority");
    var desireddate = document.getElementById("desiredDate");
    var description = document.getElementById("description");
    
var captureData = function(){
    localStorage.setItem("ItemName", itemName.value);
    localStorage.setItem("mediaType", mediaType.value);
    localStorage.setItem("Priority", priority.value);
    localStorage.setItem("DesiredDate", desireDate.value);
    localStorage.setItem("description", description.value);
    localStorage.setItem("saveDate", Date())

//var getChkItems = function(){
    for(i=0, j=checkBoxes.length; i<j; i++){
        if(checkBoxes[i].checked){
            console.log(checkBoxes[i].value);
        };
    };
};



//EventListener
itemName.addEventListener("focus", focusBorder);
itemName.addEventListener("blur", blurBorder);
submitButton.addEventListener("click", getInformation);
