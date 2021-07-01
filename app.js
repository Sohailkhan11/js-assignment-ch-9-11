/*
        1. Write a program to take “city” name as input from user. If 
        user enters “Karachi”, welcome the user like this: 
        “Welcome to city of lights”

*/ 

var city=prompt("enter city name")
var name="karachi"

if( city==name) {
    document.write( "Welcome to city of lights")
  } else {
    document.write ("Please write on the lower case karachi")
  }


  /*  Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am.  */ 

var name=prompt("Wirte Gender male or female in lowercase")
var Gender="male"
var genders="female"
if(name==Gender)
{
    document.write("Good Morning Sir")
}
else if(name==genders){
    document.write("Good Morning Ma'am ")
}
else{
    document.write("please Enter gender name")
}

/*5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
*/

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
     if("car" < "cat"){
        alert("car is smaller than cat");
        }
        