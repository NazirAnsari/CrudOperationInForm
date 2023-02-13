const conn=require("../connection/db.js");

// const fetchData=(sql)=>{
//   return  conn.query(sql,(err,result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("All rows",result);
//         }
//     })
// }

const fetchData=async (sql, cb)=>{ //cb stands for call back function
    let result;
   conn.query(sql,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log("All rows",res);
            result=res;
            cb(null,result)
            return result;
        }
    })
}


const insertData = (sqlQuery)=>{
    return  conn.query(sqlQuery,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("rows inserted",result);
        }
    })
}

const deleteData = (sqlQuery)=>{
    return conn.query(sqlQuery,(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("rows deleted",results);
        }
    })
}

const updateData = (sqlQuery)=>{
    return conn.query(sqlQuery,(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Rows updated ",results);
        }
    })
}

module.exports={
    fetchData,
    insertData,
    deleteData,
    updateData
}