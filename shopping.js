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




























