import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";




const ProductList = () => {

    // set state for list of heroes , useState
    const [products, setProducts] = useState([])
    const [deletClicked, setDeleteClicked] = useState(false)


    //import all heroes useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/products`)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((err) => { console.log("this is your catch error: ", err) })
    }, [deletClicked])
    
    const deleteProduct = (e, id) => {
        console.log("delete this hero", id)
        axios.delete(`http://localhost:8000/products/${id}/delete`)
        .then((response) =>{
            console.log("Delete was a success", response)
            setDeleteClicked(!deletClicked)
        })
        .catch(err => console.log(err))
    }

    return (
        <><div>
            <h1>Products</h1>
            <h3><Link to={'/products/new'}>Add Product</Link></h3>
        </div><table className="table mt-5">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td><Link to={`/products/${product._id}`} className='btn btn-outline-dark'>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`/products/${product._id}/edit`} className="btn btn-warning">Edit</Link>| 
                                <button to className="btn btn-danger" onClick={(e) => {deleteProduct(e, product._id)}}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table></>
    )
}


export default ProductList