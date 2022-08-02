var express = require('express');
var router = express.Router(); 


const user = {username:"shubham",password:"@123"};

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log(username,email, password);
    res.end("signup succesfull"); 
})
  
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(user.username == username && user.password == password){
        res.end("User logged in");
        
    }else{
        res.end("Incorrect username and password");
    }
    console.log(username);
    console.log(password);
    
  });

  
module.exports = router;