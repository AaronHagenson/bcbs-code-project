const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("BCBS server - get successful");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server running on port ${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);