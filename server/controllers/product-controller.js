 import Products from "../model/Productschema.js"
 
 
 export const getProducts = async(request,response)=>
{
try
{
const products=await Products.find({})
response.json(products);
}
catch(error)
{
    console.log('error',error.message);
    response.send(error.message);
}
}

export const getProductbyid = async(request,response)=>
{
try{
const product= await Products.findOne({id:request.params.id});
response.json(product);
}
catch(error){
console.log("error",error)
}
}