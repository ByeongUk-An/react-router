import React from 'react';
import {useParams}  from 'react-router-dom';

const ProductDetailPage = (props) => {
    const {id} = useParams();
    console.log("ppp",id)
    return(
        <>
            <h1>Detail{id}</h1>
        </>
    )
}

export default ProductDetailPage;