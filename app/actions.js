'use server'

import axios from "axios";
import { revalidatePath } from 'next/cache'
export async function updateProduct(cname, cprice, cquantity, id) {

    const res = await axios.put(
        `https://fastapi-ecommerce-api.onrender.com/products/${id}`,
        { name: cname, price: cprice, quantity: cquantity }
    );
    revalidatePath('/products/all')


    return res.data


}

export async function deleteProduct(id) {
    const res = await axios.delete(
        `https://fastapi-ecommerce-api.onrender.com/products/${id}`
    );
    revalidatePath('/products/all')
    return res.data


}

export async function deleteOrder(id) {
    console.log("id of product is :->", id)
    const res = await axios.delete(
        `https://fastapi-ecommerce-api.onrender.com/orders/${id}`
    );

    return res.data
}

export async function createProduct(cname, cprice, cquantity) {

    const res = await axios.post(
        'https://fastapi-ecommerce-api.onrender.com/products/create',
        { name: cname, price: cprice, quantity: cquantity }
    );
    revalidatePath('/products/all')
    return res.data
}



export async function createOrder(id, city, quantity) {

    const res = await axios.post(
        'https://fastapi-ecommerce-api.onrender.com//orders/create',
        {
            items: [{ productId: id, boughtQuantity: quantity }], userAddress: {
                City: city,
                Country: "India",
                ZipCode: "123456"
            }
        }
    );
    revalidatePath('/orders/all')
    return res.data
}

export async function updateOrder(id, city, quantity) {

    const res = await axios.post(
        `https://fastapi-ecommerce-api.onrender.com//orders/${id}`,
        {
            items: [{ productId: id, boughtQuantity: quantity }], userAddress: {
                City: city,
                Country: "India",
                ZipCode: "123456"
            }
        }
    );

    revalidatePath('/orders/all')
    return res.data
}

export async function filterProduct(min, max) {

    const res = await axios.get(
        `https://fastapi-ecommerce-api.onrender.com/products/all/?min_price=${min}&max_price=${max}`
    );
    return res.data
}