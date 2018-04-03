var express = require('express');
var mysql = require('mysql');
var app=express();

var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"root",
  database:"fangchan",
  port:3306
})

app.use('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err)
    }
    var sql="select * from login"
    connection.query(sql,function(err,data){
      if(err){
        console.log(err)
      }
      console.log(data)
      res.send(data)
      connection.end()
      
      
    })
  })
});
app.listen(8000,function(){
  console.log("ok")
})