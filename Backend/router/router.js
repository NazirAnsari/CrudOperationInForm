
const express = require("express");
const path = require("path");
const router = express.Router();
// const conn = require("../connection/db.js");
// const controller = require("../controller/userController.js")

// var bodyParser = require("body-parser");

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended:true }));

const {showForm,fetchData,insertData,updateData,deleteData}=require("../controller/userController.js")

router.get('/',showForm); //rendering Html

router.get('/users',fetchData); //fetching the whole data

router.post('/addUser',insertData); //Inserting new user

router.post('/user/update',updateData);

router.post('/user/delete',deleteData);

module.exports=router;










































// rendering html
// router.get("/",(req,res)=>{
//     console.log('HTML Called !!')         
//     res.sendFile(path.join(__dirname,"..",".." ,'/Frontend/index.html'));
    
// })

// // fetching the whole data
// router.get('/users',(req,res)=>{
//     console.log("user called");
// const subQuery="SELECT * from iwell_form";
// conn.query(subQuery,(err,rows)=>{
//     if(err){
//         return console.log(err);
//     }
//     else{
//         console.log(" Total Users:");
//         console.log(rows);
//         res.send(rows);
//     }
// })
// })



// router.post('/addUser',(req,res)=>{
//     console.log("Post Called !!", req.body);
//     const newUser = req.body;
    
//     var name = newUser.userName; //UserName is value of form which u used in form.js file
//     var email = newUser.userEmail;
//     var password = newUser.userPass;
//     var cpassword = newUser.cUserPass;
//     const subQuery='INSERT into iwell_form(name,email,password,cpassword) values("'+name+'","'+email+'","'+password+'","'+cpassword+'")';
//     conn.query(subQuery, function(err,result){
//             if(err){
//                 return console.log(err);
//             }
//             console.log("Records inserted: "+result.affectedRows)
//      })
//     // res.send("Signup Successfull !!");
// });


// module.exports = router;
































































// const express=require('express');
// const path=require("path");
// const router=express.Router();
// const app=express();

// const con=require("../connection/db.js")
// console.log(con+"hiiiiiiiiiiiiiiiiiiiiiii");

// var bodyParser = require("body-parser");


// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended:true }));

// // console.log("hello nazir",path.join(__dirname,"..","..",'/Frontend/index.html'));



// router.get('/',(req,res)=>{
//     console.log("html called")
//     res.sendFile(path.join(__dirname,"..","..",'/Frontend/index.html'))
// })

// router.get('/users',(req,res)=>{
//     console.log("user called");
// const subQuery="SELECT * from iwell_form";
// con.query(subQuery,(err,rows)=>{
//     if(err){
//         return console.log(err);
//     }
//     else{
//         console.log(" Total Users:");
//         console.log(rows);
//         res.send(rows);
//     }
// })
// })

// router.post('/dataInsert',(req,res)=>{
//     console.log("post called");
//     const newUser = req.body;
//     console.log(newUser);

//     var name = newUser.userName; //UserName is value of form which u used in form.js file
//     var email = newUser.userEmail;
//     var password = newUser.userPass;
//     var cpassword = newUser.cUserPass;
    
//     console.log(name + " name is Post");
//     con.query(
//             // 'INSERT into iwell_form(name,email,password,cpassword) values("'+name+'","'+email+'","'+password+'","'+cpassword+'")',
//             'INSERT into iwell_form values(?,?,?,?)',[name,email,password,cpassword],
//              function(err,result){
//             if(err){
//                 return console.log(err);
//             }
//             console.log("Records inserted: "+result.affectedRows);
//             console.log(result);
//      })
//     // res.send("Signup Successfull !!");
// });

// module.exports=router;