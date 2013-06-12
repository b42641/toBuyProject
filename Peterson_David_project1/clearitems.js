// clearitems.js
// David Peterson 2013/5/8
// VFW 1305 assignment 3
// toBuy gives the user a central location to create a "wishlist"
// for books, music, software,
// ultimately the category can be linked to preferred online store
//


var clearItems = function(){
    localStorage.clear;
};

submitButton.addEventListener("click", getInformation);
