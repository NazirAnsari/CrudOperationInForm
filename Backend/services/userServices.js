// const repo=require("../repository/userdb.js");

const { fetchData,insertData,deleteData,updateData,loginData} = require("../repository/userdb.js");
var CryptoJS = require("crypto-js");

// const seviceFetchData= () =>{
//     const sqlQuery='SELECT *from iwell_form';
//     // return repo.fetchDataf(sqlQuery);
//     return fetchData(sqlQuery);
// }

// const seviceFetchData= (cb) =>{
//         const sqlQuery='SELECT *from iwell_form';
//         // return repo.fetchDataf(sqlQuery);
//         // return fetchData(sqlQuery);
//         const result= fetchData(sqlQuery,(err,res)=>{
//             // console.log(res);
//             cb(null,res)
//             return res;
//         })
//     }

//using promises

// const seviceFetchData= () =>{

//     // return repo.fetchDataf(sqlQuery);
//     // return fetchData(sqlQuery);

//     return new Promise((resolve)=>{
//         const sqlQuery='SELECT *from iwell_form';
//     const result= fetchData(sqlQuery);
//         // console.log(res);
//        result.then((data)=>{
//         // console.log(data);
//           resolve(data);
//        })
//     })

// }

//using async await
const seviceFetchData = async () => {
  const sqlQuery = "SELECT *from iwell_form";
  const result = await fetchData(sqlQuery);

  return new Promise(async (resolve) => {
    resolve(result);
  });
};

const serviceInsertData = (newUser) => {
  var ciphertext = CryptoJS.AES.encrypt(newUser.userPass, 'secret key 123').toString();
  
  console.log("serviceInsertDATA");
  const subQuery = `INSERT into iwell_form(first_name,last_name,email,
        username,phone_no,password,cpassword) values
    ("${newUser.firstName}","${newUser.lastName}","${newUser.userEmail}",
    "${newUser.userName}","${newUser.phoneNo}","${ciphertext}",
    "${newUser.cUserPass}")`;

  // conn.query(subQuery, function(err,result){
  //         if(err){
  //             return console.log(err);
  //         }
  // console.log("Records inserted: "+result.affectedRows)
  return insertData(subQuery);
  //  })
};

const serviceUpdateData = (updateUser) => {
  console.log("services user update data ", updateUser.userName);
  var ciphertext = CryptoJS.AES.encrypt(updateUser.userPass, 'secret key 123').toString();
  console.log(updateUser.id);
  const sqlQuery = `UPDATE iwell_form set first_name = "${updateUser.userFirsName}",
   last_name = "${updateUser.userLastName}",
    username = "${updateUser.userName}",
    phone_no = "${updateUser.userPhone}",
    password ="${ciphertext}",
    cpassword ="${updateUser.cUserPass}" where Personid="${updateUser.id}"`;
  //const query=`update iwell_form set name=${userData.name}  where id=${id}`
  return updateData(sqlQuery);
};

const serviceDeleteData = (id) => {
  console.log(`userService deleted ${id}`);
  const subQuery = `delete from iwell_form where Personid= ${id}`;
  console.log(subQuery);
  return deleteData(subQuery);
};

const serviceLoginUser = async (details) => {
  var email = details.loginEmail;
  const query = `select * from iwell_form where email ="${email}"`;
  const result = await loginData(query);
  return new Promise((resolve) => {
    resolve(result);
  });
};

module.exports = {
  seviceFetchData,
  serviceInsertData,
  serviceUpdateData,
  serviceDeleteData,
  serviceLoginUser,
};
