// displayitems.js
// toBuy Project
// David Peterson 2013/5/8
// VFW 1305 assignment 3
// toBuy gives the user a central location to create a "wishlist"
// for books, music, software,
// ultimately the category can be linked to preferred online store
//

// -- Get Input Information

var displayInformation = function(){
    for(i=0, j=localStorage.length; i<j; i++){

    var itemName = localStorage.getItem("itemName");
    var mediaType = localStorage.getItem("mediaType");
    var checkBoxes = localStorage.getItem("checkBoxes");
    var priority = localStorage.getItem("priority");
    var desireddate = localStorage.getItem("desiredDate");
    var description = localStorage.getItem("description");
    var saveDate = localStorage.getItem("saveDate");    
    
var captureData = function(){
    localStorage.setItem("ItemName", itemName.value);
    localStorage.setItem("mediaType", mediaType.value);
    localStorage.setItem("Priority", priority.value);
    localStorage.setItem("DesiredDate", desireDate.value);
    localStorage.setItem("description", description.value);
    localStorage.setItem("saveDate", Date());

//var getChkItems = function(){
    for(i=0, j=checkBoxes.length; i<j; i++){
        if(checkBoxes[i].checked){
            console.log(checkBoxes[i].value);
        };
    };
};



submitButton.addEventListener("click", displayInformation);
