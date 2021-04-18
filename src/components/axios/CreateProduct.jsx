import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = ()=>{
    const [status, setStatus] = useState('');

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const submitFunction = ()=>{
        console.log(title,price,description,category,image);
        axios.post('https://fakestoreapi.com/products',{
            title,price,category,description,image
        })
        .then(res=>{ 
            setStatus(res.status)
        })
        .catch(error=>{
            setStatus('error')
        })
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col col-7">
                    <div className="my60">
                        {status=='200' ?
                        <blockquote className="color-green">
                            <p><em>Product Created</em></p>
                        </blockquote>
                        : status=='error' ?
                        <blockquote className="color-danger">
                            <p><em>Error</em></p>
                        </blockquote>
                        : ''
                        }
                        <fieldset>
                            <label for="nameField">Product Title</label>
                            <input type="text" value={title} placeholder="Title" id="nameField" 
                            onChange={(e)=>{setTitle(e.target.value)}} />
                            <label for="priceField">Product Price</label>
                            <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Product Price" id="priceField" />
                            <label for="categoryField">Category</label>
                            <select id="categoryField" onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value="kids">kids</option>
                                <option value="men">men</option>
                                <option value="women">women</option>
                                <option value="others">others</option>
                            </select>
                            <label for="commentField">Product Description</label>
                            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Product Description …" id="commentField"></textarea>
                            <button onClick={submitFunction} class="button-primary" type="submit">Create</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateProduct;
