//  additem.js
// toBuy Project
// David Peterson 2013/5/8
// VFW 1305 assignment 3
// toBuy gives the user a central location to create a "wishlist"
// for books, music, software,
// ultimately the category can be linked to preferred online store
//

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
    
    //getElementById
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    //Create Select Field Element and populate with option
    function makeMedia(){
        var formTag = document.getElementsByTagName("form"),  //formTag is an array of all the formTags
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "groups");
        for (var i=0, j=mediaTypes.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = mediaTypes[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    function storeData(){
        localStorage.setItem("test", "hello");
    };
    

    //Variable defautls
    var mediaTypes = ["-- Media Type --", "book", "ebook", "audible", "music", "movie", "software"];
    makeMedia();
    
    //Set Link and Submit Click Events
//    var displayLink = $('displayLink');
//    displayLink.addEventListener("click", getData);
    
//    var clearLink = $('clearLink');
//    clearLink.addEventListener("click", clearLocal);
    
//   var save = $('submit');
//   save.addEventListener("click", storeData);
   
});    
    
