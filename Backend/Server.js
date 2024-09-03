const express =require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const userRoutes = require('./Routes/userroute');
const cors = require('cors');

  // middleware
  app.use((req, res,next)=>{
    console.log('path'+req.path+''+'method'+req.method);
    next();
  });

  // Response as json
  app.use(express.json());

  app.use(cors());

app.get('/',  (req, res)=> {
    res.send('Hello World');
  });

  mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(process.env.PORT,()=>{
      console.log('listening port to '+process.env.PORT);
  });

  }).catch((err)=>console.log('error'));


app.use('/api/users',userRoutes)

