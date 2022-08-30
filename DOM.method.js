// DOM Targeting Methods---------->

// var element;
// // element = document.body;
// // element = document.all[3];
// // element = document.head;
// // element = document.title;
// // element = document.body;
// // element = document.images;
// // element = document.anchors;
// // element = document.links;
// // element = document.forms;
// // element = document.doctype;
// // element = document.URL;
// // element = document.baseURl;
// // element = document.domain;
// // element = document.getElementById("header");
// element = document.getElementsByTagName("ul")[0];
// element = document.getElementsByClassName("ul")[0];

// console.log(element);




// ---------DOM Get & Set Methods------->

// ------------DOM Get Methods------>

// var element;

//  element = document.getElementById("content").innerText;
//  element = document.getElementById("content").innerHTML;

//  element = document.getElementById("header").getAttribute("onClick");

//  element = document.getElementById("header").getAttributeNode("style").value;


//  element = document.getElementById("header").attributes[2].value;

//  element = document.getElementById("header").attributes[2].name; 

// console.log(element);




// -------DOM SET  METHODS:---->

// ----------innerText-------innerHTML---------


// var element;

// element = document.getElementById("header").innerHTML;

// console.log(element);

// document.getElementById("header").innerHTML = "<h1>Wow</h1>";

//  element = document.getElementById("header").innerHTML;

// console.log(element);




// ------SETATTRIBUTE--------ATTRIBUTE-------


// var element;

//  document.getElementById("header").innerHTML = "<h1>Wow</h1>";

// //  document.getElementById("header").setAttribute("style","border : 10px dotted yellow");

// //  ocument.getElementById("header").setAttribute[1].value = "xyz";

// //  document.getElementById("header").removeAttribute("style");

// //  document.getElementById("header").removeAttribute("class");

//  element = document.getElementById("header").getAttribute("class");
 

// console.log(element);




// -------DOM QUERYSELECTOR() & QUERYSELECTORALL()-------

// NEW TARGETING METHOD----------->

// var element;

// //  document.getElementById("header").innerHTML = "<h1>Wow</h1>";
// //  element = document.querySelector(".list");

// //  element = document.getElementsByClassName("list");

// // element = document.querySelectorAll("ul")[0].innerHTML; 

// element = document.querySelectorAll("#header h1"); 


//  console.log(element);





// DOM CSS STyling  Methods---------?



// STYLE METHOD-------


// var element;

// document.querySelector("#header").style.backgroundColor = "tan";

// document.querySelector("#header").style.color = "red";

// element = document.querySelector("#header").style.color;

// console.log(element);




// CLASSNAME----->

// var element;

// document.querySelector("#header").className = "sarfrajAbbasi EZIO";

// element = document.querySelector("#header").className;

// console.log(element);




// CLASSLIST---- add-&-remove-->

// var element;

// // document.querySelector("#header").classList.add("sarfrajAbbasi" ,"EZIO");


// // document.querySelector("#header").classList.remove("sarfrajAbbasi" ,"EZIO");

// element = document.querySelector("#header").classList;

// console.log(element);



// DOM---addEventListener()----->

// var element;

// document.getElementById("header").onclick = abc;

// function abc(){
 
//   document.getElementById("header").style.background ="blue"

// }


// addEventListener___>


// var element;

// document.getElementById("header").addEventListener("click",abc);

// // document.getElementById("header").addEventListener("mouseenter",function(){
// //   document.getElementById("header").style.border = "10px solid red";

// // })

// document.getElementById("header").addEventListener("click",function(){
//   this.style.border = "10px solid red";

// })

// function abc(){
 
//   document.getElementById("header").style.background ="blue "

// }





// usecapture-------------------------------------


// document.querySelector("#inner").addEventListener('click' , function(){
//   alert ('inner div');
// },false)


// document.querySelector("#outer").addEventListener('click' , function(){
//   alert ('outer div');
// },false)
 



// ADDEVENTLISTERNER------REMOVER------ 

// var element;

// document.getElementById("header").addEventListener('mouseleave',abc);

// document.getElementById("header").addEventListener('click' ,xyz);

// function abc(){
  
// document.getElementById("header").style.background = "green";

// }
// function xyz(){
//   document.getElementById("header").removeEventListener('mouseleave', abc);
// }





// -----------OTHER CLASSLIST METHOD---------

// ----add & remove----

// var element;

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
  
//   // document.getElementById("header").classList.add("","sde");
//   document.getElementById("header").classList.remove("xyz","sde");
//   var a = document.getElementById("header").classList;

//   console.log(a)
//   }





// -------TOGGLE()--------length--------

// var element;

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
  
//   document.getElementById("header").classList.toggle("xyz");
  
//   var a = document.getElementById("header").classList.length;

//   console.log(a)
//   }



// -------item()-----contains()--------

// var element;

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
  

  
  // var a = document.getElementById("header").classList.item(0);
  // var a = document.getElementById("header").classList.contains("xyz");

  // console.log(a)
  // }




//  ----------DOM TRAVERSE METHODS------------



// --parentElement & parentNode-----



// ------------parentElement-------------

// document.getElementById("").parentElement.style.background = "red";

// var a = document.getElementById("inner").parentElement;

// console.log(a);




// -------------\\\\\PARENTNODE///-------------


// document.getElementById("child-c").parentNode.style.background = "red";

// var a = document.getElementById("main").parentNode;

// console.log(a);




// \\\\\\\\\\\\\CHILDREN AND CHILDNODE/////////////

// document.getElementById("inner").children[3].style.background = "red";

// var a = document.getElementById("inner").children[3].innerHTML;

// console.log(a);




//       \\\\\---------CHILDNODEs----////

// document.getElementById("inner").childNodes[1].style.background = "red";

// var a = document.getElementById("inner").childNodes[1].innerHTML;

// console.log(a);






// --------\\\\\fistchild and lastelechild//////



// -------fistelementchild and lastelementchild---



// ----firstelementchild------

// document.getElementById("outer").firstElementChild.style.background = "red";

// var a = document.getElementById("outer").firstElementChild;

// console.log(a);



// -------------lastelementchild-----------

// document.getElementById("inner").lastElementChild.style.background = "red";

// var a = document.getElementById("inner").lastElementChild;

// console.log(a);


// ----------fistchild and lastelechild--------


// \\\\\\\\\\\\\\\fistchild///////////////


// document.getElementById("inner").firstChild.style.background = "red";

// var a = document.getElementById("inner").firstChild;

// console.log(a);


// // \\\\\\\\\\\\\\\\lastelechild////////////////////

// var a = document.getElementById("inner").lastChild;

// console.log(a);




////NEXTSIBLING-------NEXTELEMENTSIBLINg//////////////////////PREVIOUSELEMENTSIBLING-----PREVIOUSSIBLING////



// -------------NEXTELEMENTSIBLING---------

// document.getElementById("child-c").nextElementSibling.style.background = "red";
// var a = document.getElementById("child-c").nextElementSibling.innerHTML;

// console.log(a);



// ----PREVIOUSELEMENTSIBLING----

// document.getElementById("child-c").previousElementSibling.style.background = "red";

// var a = document.getElementById("child-c").previousElementSibling.innerHTML;

// console.log(a);



// -------------NEXTSIBLING----------

// var a = document.getElementById("child-c").nextSibling;

// console.log(a);



// // ---------------PREVIOUSSIBLING----------

// var a = document.getElementById("child-c").previousSibling;

// console.log(a);



// --------------DOM  CREATE-METHODS:----------------



// -----------CreateElement--------------

// var newElement = document.createElement("h2");

// console.log(newElement);



// ------------------create text---------

// var newText = document.createTextNode("this is text");

// console.log(newText);



// ----------------NEW-COMMENT----------------


// var newComment = document.createComment("this is comment");

// console.log(newComment);





// ---------------DOM Append-Methods--------


// ----------------appendchild---------


// var newElement = document.createElement("h2");

// var newText = document.createTextNode("this is text");

// var newComment = document.createComment("this is comment");

// document.getElementById("test").appendChild(newElement);

// document.getElementById("test").appendChild(newComment);

// newElement.appendChild(newText);

// console.log(newElement);



// -------------------insertBefore-------

// var newElement = document.createElement("h2");

// var newText = document.createTextNode("this is text");


// console.log(newElement);

// var target = document.getElementById("test")

// target.insertBefore(newElement,target.childNodes[2]);

// // document.getElementById("test").appendChild(newElement)

// newElement.appendChild(newText);




// -----insertAdjacentElement----insertadjacentHTML-----insertAdjacenttext-------



// var newElement =document.createElement("h2");

// var newtext = document.createTextNode("thi is just couse 3");

// newElement.appendChild(newtext);

// var target = document.getElementById("test");

// target.insertAdjacentElement("afterbegin",newElement);





// --------insertadjacentHTML--------

// var target = document.getElementById("test");

// var newElement = "<h2>this is heading</h2>";

// target.insertAdjacentHTML("beforeend",newElement);




// ----------insertAdjacenttext---------

// var target = document.getElementById("test");

// var newtext = "this is heading";

// target.insertAdjacentText("beforebegin",newtext);



// -----replaceChild ---------- removeChild------

// ------replaceChild()-------->


// var newElement = document.createElement("li");

// var newText = document.createTextNode("Wow new text");

// newElement.appendChild(newText);

// var target = document.getElementById("list");

// var oldElement = target.children[1];

// // console.log(oldElement);
// target.replaceChild(newElement,oldElement);


// ------removeChild()-------->


// var target = document.getElementById("list");

// var oldElement = target.children[0];

// // console.log(oldElement);

// target.removeChild(oldElement);




// ---------DOM CloneNode---------

// var target = document.getElementById("list1").children[0];

// var copyElement = target.cloneNode(true);

// console.log(copyElement);

// // document.getElementById("list2").appendChild(copyElement);

// document.getElementById("test").appendChild(copyElement);




// -------DOM CONTAINS() METHOD_---------


// var parentElement = document.getElementById("test")

// var target =document.getElementById("abc");

// var find = parentElement.contains(target);

// console.log(find);



// DOM  hasAttribute()------&----hasChildNode()--

// var target = document.getElementById("test");

// var find = target.hasAttribute("class");

// console.log(find)




///////////// -------hasChildNode--------

// var target = document.getElementById("test");

// var find = target.hasChildNodes();

// console.log(find);




// ------DOM IS EQUAL NODE()-----copmareing---

// var target1 = document.getElementById("list-1").firstElementChild;

// var target2 = document.getElementById("list-2").children[1];

// var equal = target1.isEqualNode(target2);

// console.log(equal);




// -----From--events------

// focus()------ and----blur()----

// function focusfunction(element){

// 
//   element.style.background = "lime";
  
// }


// function blurfunction(element){

  
//   element.style.background = "";
  
// }



// // ------------input and change/submit/select/invalid--------


// // function inputFunction(element){

// //  var x = element.value;

// //  document.getElementById("test").innerHTML = x; 

// // }


// function changeFunction(element){

//   var x = element.value;

//    document.getElementById("test").innerHTML = x; 
  
// }


// function selectFunction(){
//   console.log("you select some text");
// }

// function submitFunction(){
//   var x = document.getElementById("fname").value;
//   alert("Hello" + " " + x);
// }




// ----Setintervel()-----clearInterval()-----

// var a = 0;
//  var id = setInterval(anim,500);

// function anim(){
//  a = a + 10;

// if(a==200){

//   clearInterval(id);

// }else{

//   var target = document.getElementById("test");
//   target.style.width = a + 'px';
// }

// }



// ----setTimeout()---&----clearTimeout(--------

// var id = setTimeout(anim,800);

// function anim(){

//   // console.log("hello");
//   var target = document.getElementById("test");
//   target.style.width = "5000px";

// }

// function stopAnim(){

//   clearTimeout(id);

// }

// var id = setTimeout(function(){

//   console.log("hello");

//   var target = document.getElementById("test");

//   target.style.width = "500px";

// },500);

// function stopAnim(){

//     clearTimeout(id);
  
//   }


