'use server'

import axios from "axios";
import { revalidatePath } from 'next/cache'
export async function updateProduct(cname, cprice, cquantity, id) {

    // const res = await axios.put(
    //     `https://fastapi-ecommerce-api.onrender.com/products/${id}`,
    //     { name: cname, price: cprice, quantity: cquantity }
    // );

    const res = await fetch(`https://fastapi-ecommerce-api.onrender.com/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: cname, price: cprice, quantity: cquantity })
    })
    const data = await res.json()
    revalidatePath('/products/all')
    return data

}

export async function deleteProduct(id) {
    // const res = await axios.delete(
    //     `https://fastapi-ecommerce-api.onrender.com/products/${id}`
    // );

    const res = await fetch(`https://fastapi-ecommerce-api.onrender.com/products/${id}`, {
        method: 'DELETE',
    })
    const data = await res.json()
    revalidatePath('/products/all')
    return data


}

export async function deleteOrder(id) {
    console.log("id of product is :->", id)
    // const res = await axios.delete(
    //     `https://fastapi-ecommerce-api.onrender.com/orders/${id}`
    // );

    const res = await fetch(`https://fastapi-ecommerce-api.onrender.com/orders/${id}`, {
        method: 'DELETE',
    })
    const data = await res.json()
    revalidatePath('/orders/all')
    return data
}

export async function createProduct(cname, cprice, cquantity) {

    // const res = await axios.post(
    //     'https://fastapi-ecommerce-api.onrender.com/products/create',
    //     { name: cname, price: cprice, quantity: cquantity }
    // );

    const res = await fetch('https://fastapi-ecommerce-api.onrender.com/products/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: cname, price: cprice, quantity: cquantity })
    })
    const data = await res.json()
    revalidatePath('/products/all')
    return data
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

    // const res = await fetch('https://fastapi-ecommerce-api.onrender.com/orders/create', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         items: [
    //             { productId: id, boughtQuantity: quantity }], userAddress: {
    //             City: city,
    //             Country: "India",
    //             ZipCode: "123456"
    //         }
    //     })
    // })

    // const data = await res.json()
    revalidatePath('/orders/all')
    return res.data
}

export async function updateOrder(id, city, quantity) {

    const res = await fetch(`https://fastapi-ecommerce-api.onrender.com/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [{ productId: id, boughtQuantity: quantity }], userAddress: {
                City: city,
                Country: "India",
                ZipCode: "123456"
            }
        })
    })

    const data = await res.json()

    revalidatePath('/orders/all')
    return data
}

export async function filterProduct(min, max) {

    // const res = await axios.get(
    //     `https://fastapi-ecommerce-api.onrender.com/products/all/?min_price=${min}&max_price=${max}`
    // );

    const res = await fetch(`https://fastapi-ecommerce-api.onrender.com/products/all/?min_price=${min}&max_price=${max}`)
    const data = await res.json()
    revalidatePath('/products/all')
    return data
}