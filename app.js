const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine','ejs')

async function main() {
    try {
    mongoose.connect('mongodb://127.0.0.1:27017/resultsDB');
    console.log('connected')
    } catch (error) {
        console.log(error)
    }
  
}
main()

const resultSchema = new mongoose.Schema({

    roll:String,
    name:String,
  
    eng:String,
    
    engPr:String,
    
    engT:String,
   
    engC:String,
    
    nep:String,
    
    nepPr:String,
    
    nepT:String,

    nepC:String,

    mth:String,
    
    mthC:String,

    soc:String,
   
    socPr:String,
 
    socT:String,
    
    socC:String,
    
    sci:String,
   
    sciPr:String,
   
    sciT:String,
  
    sciC:String,
    
    optM:String,
 
    optMC:String,

    eph:String,
    
    ephPr:String,
    
    ephT:String,
   
    ephC:String,
    
    hlth:String,
   
    hlthPr:String,

    hlthT:String,

    hlthC:String,
    
    stotal:String,

    gained:String,
   
    prcntg:String,
  
    gpa:String,
    
    grade:String
   
})

const classten =  mongoose.model('classten',resultSchema)

app.get('/',(req,res)=>{
    res.render('index')
   
})
app.get('/class7',(req,res)=>{
    classten.find((err,docs)=>{
        if(err){
            console.log(err)
        }else{
           res.render('result',{
            docs:docs
           
           })
        }
    })
})
app.get('/marksheet/:id',(req,res)=>{

    classten.findOne({_id:req.params.id},(err,doc)=>{
        if(err){
            console.log(err)
        }else{
            res.render('marksheet',{
                doc:doc
            })
        }
    })
})

// app.post('/',(req,res)=>{
//     const data = new classten({
//         name:req.body.name,
//         roll:req.body.roll,
//         eng:req.body.eng,
//         nep:req.body.nep,
//         sci:req.body.sci,
//         mat:req.body.mat,
//         soc:req.body.soc,
//         eph:req.body.eph,
//         total:req.body.total,
//         grade:req.body.grade,
//         result:req.body.result
//     })
//     data.save((err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send('sucess')
//         }
//     })
// })
app.listen('80',()=>{
    console.log('Listening')
})


