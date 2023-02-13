//query define chlani nhi h
//calculation & jo db se data aaya h // structural / jo db se data aa rha 

//query define in variable


// repos k andr data aaya or query aayi 

// connection db .js 

//same file mai function use krna hai to underscore use kro 
//agr export krni hai to not use underscore

// module.exports={
//     a,b,c
// }
// abc=require();



// const repo=require("../repository/userdb.js");

const {fetchData,insertData,deleteData,updateData} =require("../repository/userdb.js");

// const seviceFetchData= () =>{
//     const sqlQuery='SELECT *from iwell_form';
//     // return repo.fetchDataf(sqlQuery);
//     return fetchData(sqlQuery);
// }

const seviceFetchData= ( cb) =>{
        const sqlQuery='SELECT *from iwell_form';
        // return repo.fetchDataf(sqlQuery);
        // return fetchData(sqlQuery);
        const result= fetchData(sqlQuery,(err,res)=>{
            // console.log(res);
            cb(null,res)
            return res;
        })
    }

const serviceInsertData = (newUser) =>{
    console.log("serviceInsertDATA");
    const subQuery=`INSERT into iwell_form(name,email,password,cpassword) values("${newUser.userName}","${newUser.userEmail}","${newUser.userPass}","${newUser.cUserPass}")`;

    // conn.query(subQuery, function(err,result){
    //         if(err){
    //             return console.log(err);
    //         }
            // console.log("Records inserted: "+result.affectedRows)
            return insertData(subQuery);
    //  })
}

const serviceUpdateData=(updateUser)=>{
    console.log("services user update data ",updateUser.userName);
    const sqlQuery= `UPDATE iwell_form set name = "${updateUser.userName}",
    email ="${updateUser.userEmail}",
    password ="${updateUser.userPass}",
    cpassword ="${updateUser.cUserPass}" where Personid="${updateUser.id}"`;
    //const query=`update iwell_form set name=${userData.name}  where id=${id}`
    return updateData(sqlQuery);
}

const serviceDeleteData =(id)=>{
    console.log(`userService deleted ${id}`)
    const subQuery=`delete from iwell_form where Personid= ${id}`;
    console.log(subQuery);
    return deleteData(subQuery);
}


module.exports={
    seviceFetchData,
    serviceInsertData ,
    serviceUpdateData,
    serviceDeleteData
}