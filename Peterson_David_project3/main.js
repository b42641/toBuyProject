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
    
    //Find value of selected checkbox
//    function getSelectedCheckbox(){
//        alert(hi);
//        var desiredVendorvalue = document.forms[0].desiredVendor;
    

var getChkItems = function(){
    var checkBoxes = document.getElementById("inputForm").vendors;
    for(i=0, j=checkBoxes.length; i<j; i++){
        if(checkBoxes[i].checked){
            desiredVendorValue = checkBoxes[i].value;
        };
    };
}

    function toggleControls(n){
        switch(n){
            case "on":
                $('inputForm').style.display = "none";
                $('clearLink').style.display = "inline";
                $('displayLink').style.display = "none";
                $('addNew').style.display = "inline"
                break;
            case "off":
                $('inputForm').style.display = "block";
                $('clearLink').style.display = "inline";
                $('displayLink').style.display = "inline";
                $('addNew').style.display = "none";
                $('items').style.display = "none";
                break;
            default:
                return false;
        }
    }
    
    function storeData(){
        var id          = Math.floor(Math.random()*100000001);
        //Gather all form field values and store in object
        //Object properties are going to contain an array with form label and input values
        getChkItems();
        var item        = {};
            item.group          = ["Group", $('groups').value];
            item.itemName       = ["Item Name", $('itemName').value];
            item.desiredVendor  = ["Desired Vendor", desiredVendorValue]
            item.priority       = ["Priority", $('priority').value];
            item.desireDate     = ["DesiredDate", $('desireDate').value];
            item.description    = ["Description", $('description').value];
            item.saveDate       = ["Save Date", $('saveDate').value];
        //Save Data into local storage: use stringify to convert our object to a string
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }
    
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            alert("There is no data in local storage.")
        }
        // Write Data from Local Storage to Screen
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeli = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert string from local storage back to an object
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
            }
        }
    }

    function clearLocal(){
        if(localStorage.length === 0){
            alert("There is no data to clear.")
        }else{
            localStorage.clear();
            alert("All Items are deleted.");
            window.location.reload();
            return false;
        }
    
    }
    
    //Variable defautls
    var mediaTypes = ["-- Media Type --", "book", "ebook", "audible", "music", "movie", "software"];
    var desiredVendorValue;
    makeMedia();
    
    //Set Link and Submit Click Events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    
    var clearLink = $('clearLink');
    clearLink.addEventListener("click", clearLocal);
    
   var save = $('submitButton');
   save.addEventListener("click", storeData);
   
});    
    
