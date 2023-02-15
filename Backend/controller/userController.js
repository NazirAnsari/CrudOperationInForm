// // req.body k variable 
// //validation
// //modification and checks

// const user=req.body;


// var name = newUser.userName; //UserName is value of form which u used in form.js file
// var email = newUser.userEmail;
// var password = newUser.userPass;
// var cpassword = newUser.cUserPass
// const repo=require('../repository/userdb.js');
// const service=require("../services/userservices.js")
// const conn=require("../connection/db.js");

const {seviceFetchData,serviceInsertData,serviceUpdateData,serviceDeleteData}= require('../services/userServices.js');
const path=require("path");
const { constants } = require('buffer');


//html and css file called

const showForm=(req,res)=>{
console.log("html call !!");
res.sendFile(path.join(__dirname,"..",".." ,'/Frontend/index.html'));
}

// const fetchData=(req,res)=>{
//     console.log('fetch Data')
//     return seviceFetchData();
// }

// before promises 
// const fetchData=(req,res)=>{
//     const result = seviceFetchData(function(err,result){
//         return res.send(result);
//     });
//     return result;
// }


//using Promises
// const fetchData=(req,res)=>{
//     const result = seviceFetchData();

//         result.then((data)=>{
//             console.log(data);
//         return res.send(data);
//         })
//         return result;
//     }
   



//using ajax await

const fetchData= async (req,res)=>{
const result = await seviceFetchData();
res.send(result)
}

const insertData=(req,res)=>{
    const newUser=req.body;
    console.log(newUser,"userControllerInsert");
    return serviceInsertData(newUser) ;
}

const updateData=(req,res) =>{
    const updateUserData= req.body;
    // const id=req.params.id;
    console.log("hero", updateUserData)
    return serviceUpdateData(updateUserData);
}


const deleteData =(req,res) =>{
    const id = req.body.id;
    // console.log('shaktiman');
    // console.log("hii Shaktiman");
    return serviceDeleteData(id);
}

module.exports={
    showForm,
    fetchData,
    insertData,
    updateData,
    deleteData
}