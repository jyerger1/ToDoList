

// var button = document.getElementById("enter");

var button = $("#enter");

// var input = document.getElementById("userinput")

var input = $("#userinput");

// var ul = document.querySelector("ul");

var ul = $("ul");

// button.addEventListener("click", function (){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })


$("button").click(function (){
    $('ul').append('<li>' + $('#userinput').val() + '</li>');
    $("#userinput").val("");
});

// creating the add to list button

// document.querySelector("ul").addEventListener('click', function(done){ //add event listener to list
//     var doneItem =done.target; //target of item for event
//     if(doneItem.tagName.toUpperCase()=="LI"){ //declare target(doneItem) to equal li
//         doneItem.parentNode.removeChild(doneItem); //now that li equals target, remove the child of UL, which is the li
//     }
// });


$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        $(this).css("text-decoration", "line-through");
        $(this).fadeOut(1000, function () {
            $(this).fadeOut();
        });
    });
});


// creating the remove from list function with fade and line-through styling





// $(document).ready(function() {
//     $('ul').on('click', 'li', function() {
//         $(this).css('text-decoration', 'line-through');
//     });
// });




// $('ul').on('click', 'li', function(){ 
//     $(this).css('text-decoration', 'line-through'); //add style to item
//         setTimeout(() => {
//         $(this).remove(); //clears it
//         }, 1000)





// $('ul').click(function(event){
//     var target = $(event.target);
//     if (target.is('li')){
//     target.css({color:'red'});
//     target.wrap('<strike>');
//       setTimeout(function(){
//           target.remove();
//       }, 1000); 










// JS


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function (){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })



// document.querySelector("ul").addEventListener('click', function(done){ //add event listener to list
//     var doneItem =done.target; //target of item for event
//     if(doneItem.tagName.toUpperCase()=="LI"){ //declare target(doneItem) to equal li
//         doneItem.parentNode.removeChild(doneItem); //now that li equals target, remove the child of UL, which is the li
//     }
// });








// jenny help 

// remove a list item
// grab the list, and apply function on click. add "on" to apply to new list items 

// $("ul").on("click", "li", function(){ 
//     $(this).css("text-decoration", "line-through"); //add style to item
//         setTimeout(() => {
//         $(this).remove(); //clears it
//         }, 1000)
// });
// //add function to add button
// $('#todoBtn').click(function(){
// //take input and make it into a list item
//     $('#list').append('<li>' + $('#newItem').val() + '</li>');
//     $('#newItem').val("");    
//   })




// stan help

// $('ul').append('<li>' + $('#userinput').val() + '</li>');

// var inputField = document.querySelector('input[type="text"]');

// var buttonClickMe = document.querySelector('buttonid')



// buttonClickMe.addEventListener('click', function(){
//     var listItem = document.createElement('li');
//     li.innerHTML = inputField.value();
//     listGroup.appendChild(li);
//     inputField.value = '';

// });


// $('#todoinput').keyup(function(){
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       $("#todobutton").click();
//     }
//   });
// $('button#todobutton').click(function(){
// $('#list').append('<li>' + $('#todoinput').val() + '</li>');
// $('#todoinput').val("");    
// })
// $('#list').click(function(event){
// var target = $(event.target);
// if (target.is('li')){
// target.css({color:'red'});
// target.wrap('<strike>');
//   setTimeout(function(){
//       target.remove();
//   }, 1000); 
// } 
// })











  
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