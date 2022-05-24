import React from 'react';
import {useSearchParams} from "react-router-dom"

const ProductPage = (props) => {
    let [query,setQuery] = useSearchParams();
    console.log("ddddddddddd",query.get('num'));
    return(
        <>
            <h1>Show All Products!!!</h1>
        </>
    )
}



export default ProductPage;