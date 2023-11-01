const express = require('express');
const app = express();
const path = require('path');
const port =  3000;

//handling CORS
app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin",  
               "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers",  
               "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
});

// route for handling requests from the Angular client
app.get('/api/message', (req,res)=>{
    res.json({ 
        message: ' Hello, this is the THD express server for BRAIN'
    });
});



app.use(express.static('dist/client/'));

app.get('*', function(req,res) {
    res.sendFile(path.resolve('dist/client/index.html'));
});



app.listen(3000, ()=>{
   console.log('Server is listening on port 3000'); 
});