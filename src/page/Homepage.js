import React from 'react';
import {Link,useNavigate} from "react-router-dom";

const Homepage = (props) => {
    const navigate = useNavigate();
    const goProductPage = () => {
        navigate('/products?q=pants');
    }

    return (
        <>
        <h2>Homepage입니다!!</h2>
            <Link to="/about" >Go to about page</Link>
            <button onClick={goProductPage}>GO to Product page</button>
        </>
    )
}

export default Homepage;