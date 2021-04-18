import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import Loader from '../ui/Loader';
import axios from 'axios';

const EditProduct = ()=>{
    const [dataLoad, setDataLoad] = useState(false);
    const [status, setStatus] = useState('');

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) =>{
          setTitle(res.data.title)
          setPrice(res.data.price)
          setDescription(res.data.description)
          setImage(res.data.image)
          setDataLoad(true)
        })
        .catch((err) =>{
          console.log(err.message)
        })
      },[])

    const submitFunction = ()=>{
        axios.put(`https://fakestoreapi.com/products/${params.id}`,{
            title,price,category,description
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
            {dataLoad === true ?
            <div className="row">
                <div className="col col-7">
                    <div className="my60">
                        {status=='200' ?
                        <blockquote className="color-green">
                            <p><em>Product Update Success</em></p>
                        </blockquote>
                        : status=='error' ?
                        <blockquote className="color-danger">
                            <p><em>Product Update Failed</em></p>
                        </blockquote>
                        : ''
                        }
                        <fieldset>
                        <label for="nameField">Image</label>
                            <img width="200" src={image} alt={title} />
                            <label for="nameField">Product Title</label>
                            <input type="text" value={title} id="nameField" 
                            onChange={(e)=>{setTitle(e.target.value)}} />
                            <label for="priceField">Product Price</label>
                            <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} id="priceField" />
                            <label for="categoryField">Category</label>
                            <select id="categoryField" onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value="kids">kids</option>
                                <option value="men">men</option>
                                <option value="women">women</option>
                                <option value="others">others</option>
                            </select>
                            <label for="commentField">Product Description</label>
                            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} id="commentField"></textarea>
                            <button onClick={submitFunction} class="button-primary" type="submit">Update</button>
                        </fieldset>
                    </div>
                </div>
            </div>
            : <Loader /> }
        </div>
    )
}
export default EditProduct;
