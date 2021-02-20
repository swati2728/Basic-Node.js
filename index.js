const express = require("express"); //to user express er import it//
const bodyParser = require("body-parser"); //we are using because to take particulary parser from body ,to acess the valuse what user is giving//

const app = express(); //instend of requiring again and again i have store excess in variables

app.use(bodyParser.urlencoded({extended:true})); //to use the va;lue which we have excess

app.get("/",function(req,res){   //i just get the express and i am sending reques to console the hey swati how are you on browser//
   res.send("hey swati how are you")
});

app.get("/about",function(req,res){
   res.send("Backend Developer")
});

app.get("/contact",function(req,res){
   res.send("111234566789")
});

app.get("/calculator",function(req,res){ // want to make calulator on browser//
   // console.log(__dirname)
   res.sendFile(__dirname + "/index.html"); // in this i have send the whole file with using the keyword res.sendFile//
});

app.post("/calculator",function(req,res){ // in this we have use post method to just get the sum of the tow number 
   // res.send("done post") 
   console.log(req.body)

   let n1 = Number(req.body.v1);
   let n2 = Number(req.body.v2);

   let sum = n1+n2;

   res.send("this is the sum:",sum);
})



app.get("/bmi",function(req,res){        //i have writen other api for take the bmi rate of the person 
   res.sendFile(__dirname + "/bmi.html")
})


app.post("/bmi",function(req,res){
   let w1=Number(req.body.weight);
   let h1=Number(req.body.height);

   let bmi=w1/(h1*h1);      //formul of taking out bmi Result
   res.send("THE BMI OF YOUR BODY IS:",bmi)
})


app.listen(5000,function  (req,res){ //calling function to run//
   console.log("server is running at port no. 5000")
});
   