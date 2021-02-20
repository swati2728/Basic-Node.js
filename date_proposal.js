console.log("WELCOME TO THE SPECIAL DATE");
var readlineSync = require("readline-sync");
var name = readlineSync.question("Enter a name:-");
var relation=readlineSync.question("Enter what is you relation with this person:-")
var date=readlineSync.question("Enter date of proposal:-")

if (name=="yousuf"){
    console.log("YES RIGHT PERSON YOU HAVE CHOOSE!!!")

    if(relation=="husband"){
        console.log("YES YOU ARE RIGHT!!!")

        if(date==27){
            console.log("YES RIGHT DATE***")
        }
        else {
            console.log("YOUR DATE IS WRONG TRY LATER")
        }

    }else {
        console.log("YOUR RELATION IS WRONG!!SORRY!!")
    }
        
}else {
    console.log("THE NAME OF YOUR PERSON IS WRONG")
}
