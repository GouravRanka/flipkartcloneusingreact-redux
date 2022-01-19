import User from "../model/userschema.js"


export const UserSignup = async(request,response)=>
{
    try{
    
          
    
const user=request.body;
const userdata=new User(user);
await userdata.save();
response.status(200).json("signup succesfully")
    }
    catch(error)
    {
        console.log("error while sending signup data",error.message)
    }
}
export const UserLogin = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}









