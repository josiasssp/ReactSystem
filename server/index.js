const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "banco",
});

app.get('/', (req, res)=>{
    db.query("INSERT INTO usuarios (email, password) VALUES"
    ('josiasfernandessp@gmail.com', '1234567')
    );

});
app.listen(3001, ()=>{
    console.log("Rodando na porta ")
}); 







/*
app.use(express.json());
app.use(cors());


app.post("/register",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
});
 
  db.query("SELECT * FROM usuarios WHERE email = ?",
    (err, result) => {
       if(err){
        res.send(err);
    }
    if(result.lengh ==0){
        db.query(
            "INSERT INTO usuarios (email, password) VALUES(?, ?)", 
            [email, password],
             (err, response)=>{
            if(err){
                res.send(err);
               }
            res.send({msg:"Cadastrado com sucesso"});
        }
        );
    }else {
        res.send({msg:"Usuário já cadastrado"});    
     }   
});


app.listen(3001, ()=>{
    console.log("Rodando na porta ")
}); 
  

*/






