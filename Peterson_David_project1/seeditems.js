// seeditems.js
// toBuy Project
// David Peterson 2013/5/8
// VFW 1305 assignment 3
// toBuy gives the user a central location to create a "wishlist"
// for books, music, software,
// ultimately the category can be linked to preferred online store
//



// -- Get Input Information
// -- Get the value of the itemName
var seedInformation = function(){
// First Record
    localStorage.setItem("itemName", "Star Trek Soundtrack");
    localStorage.setItem("mediaType", "Music");
    localStorage.setItem("checkBoxes", [Amazon, iTunes]);
    localStorage.setItem("priority", 6);
    localStorage.setItem("desiredDate", "2013/12/25");
    localStorage.setItem("description", "This is the Original Series Music");
    localStorage.setItem("saveDate", "2012/11/12 01:15");
    
    
// Second Record
    localStorage.setItem("itemName", "John Mayer Born & Raised");
    localStorage.setItem("mediaType", "Music");
    localStorage.setItem("checkBoxes", [Amazon, iTunes]);
    localStorage.setItem("priority", 9);
    localStorage.setItem("desiredDate", "2013/10/21");
    localStorage.setItem("description", "Latest Album");
    localStorage.setItem("saveDate", "2013/01/12 04:22");
    
// Third Record
    localStorage.setItem("itemName", "Game of Thrones");
    localStorage.setItem("mediaType", "Book");
    localStorage.setItem("checkBoxes", [Amazon, iTunes]);
    localStorage.setItem("priority", 3);
    localStorage.setItem("desiredDate", "2013/12/25");
    localStorage.setItem("description", "I think this is the name of the first book");
    localStorage.setItem("saveDate", "2012/03/13 03:33");
    
};      
    

submitButton.addEventListener("click", seedInformation);
