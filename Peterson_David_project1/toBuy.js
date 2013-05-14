//  toBuy Project.js
// David Peterson 2013/5/8
// VFW 1305 assignment 3
// toBuy gives the user a central location to create a "wishlist"
// for books, music, software,
// ultimately the category can be linked to preferred online store
//

var getItemName = function(){
    console.log(itemName.value);
};
var getDesireDate = function(){
    console.log(desireDate.value);
};
itemName.addEventListener("blur", getItemName);
desireDate.addEventListener("blur", getDesireDate);



//var itemName = document.getElementById("itemName");
//var myDesireDate = document.getElementById("desireDate");
//var saveDate = document.getElementById("saveDate");

//var getDesireDate = function(){
//    console.log(desireDate.value);
//
//itemName.addEventListener("blur", getItemName);
//desireDate.addEventListener

/*var checkBox = document.getElementById("priority"); CheckBox
var priority = document.getElementById("priority");
var preferredVendor = document.getElementById("preferredVendor");
var description = document.getElementById("description");
*/
/*
var captureData = function(){
    localStorage.setItem("Item Name", itemName.value);
    localStorage.setItem("Checkbox", itemName.value);
    localStorage.setItem("Priority", priority.value);
    localStorage.setItem("Item Preferred Vendor", preferredVendor.value);
    localStorage.setItem("Desired Date", desiredDate.value);
    localStorage.setItem("Description", description.value);
    localStorage.setItem("Save Date", saveDate.value);
}
*/

//EventListener
/*itemName.addEventListener("blur", captureData);
localStorage.key(0)*/

var focusBorder = function(){
    itemName.setAttribute("class", "hasFocus");
}

var blurBorder = function(){
    itemName.removeAttribute("class", "hasFocus");
}

itemName.addEventListener("focus", focusBorder);
itemName.addEventListener("blur", blurBorder);
