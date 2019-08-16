const Express=require('express')
var app=new Express()
app.set('view engine','ejs')

app.get('/',(req,res)=>{        
    res.render('home')
})

app.get('/login',(req,res)=>{        
    res.render('login')
})


app.get('/registration',(req,res)=>{        
    res.render('registration')
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})  