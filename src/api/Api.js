import axios from "axios";

export async function productsData(){
    const products =await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
    // "https://api.storerestapi.com/products"
    );
    return products;
}