'use server'
import axios from "axios";
import { revalidatePath } from 'next/cache'

// Product Action
export async function updateProduct(cname, cprice, cquantity, id) {
    const { data } = await axios.put(`https://fastapi-ecommerce-api.onrender.com/products/${id}`, { name: cname, price: cprice, quantity: cquantity })
    revalidatePath('/products/all')
    return data

}

export async function deleteProduct(id) {
    const { data } = await axios.delete(`https://fastapi-ecommerce-api.onrender.com/products/${id}`);
    revalidatePath('/products/all')
    return data
}



export async function createProduct(cname, cprice, cquantity) {
    const { data } = await axios.post(
        'https://fastapi-ecommerce-api.onrender.com/products/create',
        { name: cname, price: cprice, quantity: cquantity }
    );
    revalidatePath('/products/all')
    return data
}

// Order Actions

export async function createOrder(id, city, quantity) {

    const res = await axios.post(
        'https://fastapi-ecommerce-api.onrender.com/orders/create',
        {
            items:
                [
                    {
                        productId: id,
                        boughtQuantity: quantity
                    }
                ],
            userAddress: {
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

export async function updateOrder(city, quantity, id, pid) {

    console.log("update product values are :->", city, quantity, id, pid)

    const res = await fetch(`https://fastapi-ecommerce-api.onrender.com/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                { productId: pid, boughtQuantity: quantity }
            ], userAddress: {
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