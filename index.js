const express = require('express');

const app= express();

const PORT=3001;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome to express');
});

app.get('/hello/:name',(req,res)=>{
    const{name}=req.params;
    res.send(`hello ${name}`);
});

app.post('/data',(req,res)=>{
    const data=req.body;
    res.json({
        message:"data recived successfully",
        dataRecived: data
    })
})

app.use((req,res)=>{
    res.status(404).send("Not Found");
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})