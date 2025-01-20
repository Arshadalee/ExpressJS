const express=require('express');
const app=express();

app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("you have"+kidneyLength+"kidneys");

})

//Global catches : it catches any exceptions and does not expose our code and give better error msg
app.use(function(err,req,res,next){
    res.json({
        msg:"Something is up with our server"
    })
})
app.listen(3003); 