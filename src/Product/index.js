import React, {useEffect} from 'react';
import {getProduct} from "../Store/Reducers/productSlice";
import {useDispatch, useSelector} from "react-redux";
const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(s => s.products)
    console.log(product)
    useEffect(()=>{
        dispatch(getProduct())
    }, [])
    return (
        <div className="flex flex-wrap gap-10 container ">
            {
                product.map(el => (
                    <div className="flex items-center justify-center flex-col w-[200px] ">
                        <img  src={el.image} width={250} alt=""/>
                        <h4>{el.title}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;