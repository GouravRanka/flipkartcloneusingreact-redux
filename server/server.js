import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import { UserLogin,UserSignup } from './controllers/user-controllers.js';
import { getProducts,getProductbyid } from './controllers/product-controller.js';
import { gatewaypayment,paymentResponse } from './controllers/paymentcontroller.js';
import path from 'path'
// import path from 'path';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 8080
// components
import connection from './database/db.js';
import Defaultdata from './default.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


dotenv.config();
const username= process.env.DB_USERNAME
const password= process.env.DB_PASSWORD


connection(process.env.MONGO_URI ||'mongodb+srv://gourav:gouravranka@reactflipkartclone.ykned.mongodb.net/reactflipkartclone?retryWrites=true&w=majority' );
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
    
    

  }
  

app.listen(port, ()=> console.log("running")
)

app.post('/signup',UserSignup)
app.post('/login',UserLogin)
app.get('/products',getProducts)
app.get('/product/:id',getProductbyid)
app.post('/payment',gatewaypayment)
app.post('/callback',paymentResponse)



// sending default data to databse 
Defaultdata();

export let  paymentMerchantkey=process.env.PAYTM_MERCHANT_KEY 
export let paytmParams={};


paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.  PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='100';
paytmParams['CALLBACK_URL']='http://localhost:8000/callback'
paytmParams['EMAIL']='rankagaurav123@gmail.com'
paytmParams['MOBILE_NO']='123456789'

