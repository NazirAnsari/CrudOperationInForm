const mysql=require("mysql2");
// const path=require("path");

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'form',
    password:'naziransari'
    
})

conn.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Database Connected");
    }
})

module.exports = conn;