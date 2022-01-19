import {products} from "./constants/Products.js"
import product from "./model/Productschema.js"



const DefaultData = async () => {
    try {
        await product.deleteMany({});
        await product.insertMany(products);

        console.log("Data imported Successfully");
        
    } catch (error) {
        console.log("Error", error.message);
    }
}

export default DefaultData;