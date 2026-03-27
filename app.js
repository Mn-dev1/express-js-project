import dotenv from 'dotenv'
dotenv.config() 
import express from 'express'
import contactRoutes from './routes/routes.js'
import mongoose from 'mongoose'
import { engine } from "express-handlebars"
import axios from 'axios'

const app = express()

app.engine('handlebars', engine({defaultlayout:'main'}))
app.set('view engine', 'handlebars')
app.set("views", "./views");

const PORT = process.env.PORT || process.env.LOCAL_PORT

const url = process.env.MONGO_URI
// DB
mongoose.connect(url).then(() => console.log("connected")).catch(err => console.log(err))

app.use('/', contactRoutes)

app.get('/', async (req,res) => {
    try{
        const response = await axios.get(`http://127.0.0.1:${PORT}/contacts`)
        res.render('home',{contacts: response.addTrailers.contacts})
    }catch(err){
        console.log(err.message)
    }
    
    
})

app.listen(PORT, () => console.log(`server running at http://127.0.0.1:${PORT}`))