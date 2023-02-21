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

const {seviceFetchData,serviceInsertData,serviceUpdateData,serviceDeleteData,serviceLoginUser}= require('../services/userServices.js');
const path=require("path");
const { constants } = require('buffer');
var CryptoJS = require("crypto-js");



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
    return serviceDeleteData(id);
}

const loginuser = async (req,res)=>{
    const details=req.body;
    // console.log('hiiiiiiiiiiiii',details.loginPass);

    const result= await serviceLoginUser(details);
    // console.log('hiiiiiiiiiiiii',result[0].email);
    if(result.length == 0){
        return res.send("Invalid!!");
    }
    //console.log("hii",result);
 
    // var bytes  = CryptoJS.AES.decrypt(result[0].password, 'secret key 123');
    // //console.log(bytes,'userlogin')
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);

    var decrypt= CryptoJS.AES.decrypt(result[0].password,"secret key 123");
    var originalText=decrypt.toString(CryptoJS.enc.Utf8);
    console.log(originalText);
    if(originalText != details.loginPass)
    {
        return res.send("Invalid Credentials!!");
    }

    else{

    // if(details.loginEmail == result[0].email){
    //     if(details.loginPass == result.password){
    //         console.log("login successful")
    //         res.send(result[0]);
    //     }
    //     else{
    //         res.send("incorrect password");
    //     }
    // }
    // else{
    //     res.send("incorrect email");
    // }

    let sendData ={
        Person_id: result[0].Personid,
        first_name :result[0].first_name,
        last_name : result[0].last_name,
        email :result[0].email,
        username:result[0].username,
        phone_no:result[0].phone_no,
    }
    console.log("login successful")
    res.send(sendData);
    //res.send(result[0]);
}
}

module.exports={
    showForm,
    fetchData,
    insertData,
    updateData,
    deleteData,
    loginuser
}