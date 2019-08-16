const Express=require('express')
var app=new Express()
app.set('view engine','ejs')

app.get('/',(req,res)=>{        
    res.render('index')
})

app.get('/home',(req,res)=>{        
    res.render('home')
})

app.get('/home/login',(req,res)=>{        
    res.render('login')
})


app.get('/home/registration',(req,res)=>{        
    res.render('registration')
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})  