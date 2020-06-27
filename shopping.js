// var button= document.getElementById("enter");
// var input=document.getElementById("userinput");
// var ul=document.querySelector("ul");

// function createList(){
//         var li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="";    
// }

// button.addEventListener("click",function(){
//     if(input.value.length>0){
//     createList();
//     }
// })

// input.addEventListener("keypress",function(event){
//      if(input.value.length>0 && event.keyCode===13){
//         createList();
//      }
// })

var input = document.getElementById("userinput");
var enter = document.getElementById("enter");
var ul=document.querySelector("ul");
// var closebtns = document.getElementsByClassName("but");
// var i;

// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//     this.parentElement.style.display = 'none';
//   });
// }

// function myFunction() {
//     var element = document.getElementById("");
//     element.classList.add("mystyle");
//  }

function add() {
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value));
    var button = document.createElement("button");
    button.className="but";
    button.innerHTML = "Delete";
    list.appendChild(button);
    ul.append(list);
    input.value='';
    var closebtns = document.getElementsByClassName("but");
var i;
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
}

var closebtns = document.getElementsByClassName("but");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

enter.addEventListener("click",function(){
    if(input.value.length>0){
        add();
    }
});

input.addEventListener("keypress",function(event){
    if(input.value.length>0 && event.keyCode===13 ){
        add();
    }
})
//mam js code
// var button= document.getElementById("enter");
// var input=document.getElementById("userinput");
// var ul=document.querySelector("ul");
// var lst=document.getElementsByTagName("li");

// function createList(){
//         var li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="";  
        
//         //create delete buttons
//         var btn=document.createElement("button");
//         btn.appendChild(document.createTextNode("Delete"));
//         li.appendChild(btn);
//         btn.onclick=removeParent;
// }

// button.addEventListener("click",function(){
//     if(input.value.length>0){
//     createList();
//     }
// })

// input.addEventListener("keypress",function(event){
//      if(input.value.length>0 && event.keyCode===13){
//         createList();
//      }
// })


// //line through effect
// ul.onclick=function(event){
//     var target=event.target;
//     target.classList.toggle("done");
// }
// //gets call when delete buttons are clicked
// function removeParent(evt){
//     evt.target.parentNode.remove();
// }


// // create delete buttons for already exisiting li tags
// for(var i=0;i<lst.length;i++){
//     var btn=document.createElement("button");
//         btn.appendChild(document.createTextNode("Delete"));
//         lst[i].appendChild(btn);
//         btn.onclick=removeParent;
// }



























