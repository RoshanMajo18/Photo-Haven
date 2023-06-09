import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app=express()
dotenv.config()


app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
// mongoose.set('useFindAndModify',false)

app.use('/posts',postRoutes)
app.use('/user',userRoutes)

// const CONNECTION_URL='mongodb+srv://Roshan:roshanmajo18@cluster0.1jogw6q.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT 

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message))
