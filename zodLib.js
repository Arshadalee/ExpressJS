const zod=require('zod');
function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(7)
    });

    const response=schema.safeParse(obj);
    console.log(response);

}

validateInput({
    email:"arshadali.mulla@gmail.com",
    password:"arshadalimulla"
})


//to run 
// first install npm i zod(its already installed in this project)
//node zodLib.js