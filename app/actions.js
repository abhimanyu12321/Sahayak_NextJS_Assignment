'use server'

import axios from "axios";
import { revalidatePath } from 'next/cache'
export async function updateProduct(cname, cprice, cquantity, id) {
    try {
        const res = await axios.put(
            `https://fastapi-ecommerce-api.onrender.com/products/${id}`,
            { name: cname, price: cprice, quantity: cquantity }
        );

        return res.data
    } catch (error) {
        console.log(error)
    }
    revalidatePath('https://fastapi-ecommerce-api.onrender.com/products/all')

}

export async function deleteProduct(id) {
    const res = await axios.delete(
        `https://fastapi-ecommerce-api.onrender.com/products/${id}`
    );

    return res.data
}

export async function createProduct(cname, cprice, cquantity) {

    const res = await axios.post(
        'https://fastapi-ecommerce-api.onrender.com/products/create',
        { name: cname, price: cprice, quantity: cquantity }
    );
    return res.data
}