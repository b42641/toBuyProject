//  toBuy Project.js
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
    console.log(itemName.value);
    console.log(desireDate.value);
    console.log(mediaType.value);
    console.log(priority.value);
    console.log(Date());
//var getChkItems = function(){
    for(i=0, j=checkBoxes.length; i<j; i++){
        if(checkBoxes[i].checked){
            console.log(checkBoxes[i].value);
        };
    };



/*var checkBox = document.getElementById("priority"); CheckBox
var priority = document.getElementById("priority");
var preferredVendor = document.getElementById("preferredVendor");
var description = document.getElementById("description");
*/

    localStorage.setItem("ItemName", itemName.value);
    localStorage.setItem("DesiredDate", desireDate.value);
    localStorage.setItem("mediaType", mediaType.value);
    localStorage.setItem("Priority", priority.value);
//    localStorage.setItem("Preferred Vendor", preferredVendor.value);
//    localStorage.setItem("Description", description.value);
    localStorage.setItem("SaveDate", Date());
};






// -- Get all the information
//var getEverything = function(){
//    console.log("Here");
//};




//itemName.addEventListener("blur", getItemName);
//desireDate.addEventListener("blur", getDesireDate);
//submitButton.addEventListener("click", getItemName);


//var itemName = document.getElementById("itemName");
//var myDesireDate = document.getElementById("desireDate");
//var saveDate = document.getElementById("saveDate");

//var getDesireDate = function(){
//    console.log(desireDate.value);
//
//itemName.addEventListener("blur", getItemName);
//desireDate.addEventListener



//EventListener


itemName.addEventListener("focus", focusBorder);
itemName.addEventListener("blur", blurBorder);
submitButton.addEventListener("click", getInformation);
