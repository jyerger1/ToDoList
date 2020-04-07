










var button = document.getElementById("enter");
var input = document.getElementById("userinput")



button.addEventListener("click", function(){
    
})
















var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function (){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li);
})





document.querySelector("ul").addEventListener('click', function(done){ //add event listener to list
    var doneItem =done.target; //target of item for event
    if(doneItem.tagName.toUpperCase()=="LI"){ //declare target(doneItem) to equal li
        doneItem.parentNode.removeChild(doneItem); //now that li equals target, remove the child of UL, which is the li
    }
});



// stan help

// var inputField = document.querySelector('input[type="text"]');

// var buttonClickMe = document.querySelector('buttonid')



// buttonClickMe.addEventListener('click', function(){
//     var listItem = document.createElement('li');
//     li.innerHTML = inputField.value();
//     listGroup.appendChild(li);
//     inputField.value = '';

// });












  
//     // Get input value
//     var newItem = document.getElementById('item').value;
  
//     // Create new li element
//     var li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item';
//     // Add text node with input value
//     li.appendChild(document.createTextNode(newItem));
  
//     // Create del button element
//     var deleteBtn = document.createElement('button');
  
//     // Add classes to del button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
//     // Append text node
//     deleteBtn.appendChild(document.createTextNode('X'));
  
//     // Append button to li
//     li.appendChild(deleteBtn);
  
//     // Append li to list
//     itemList.appendChild(li);
//   }