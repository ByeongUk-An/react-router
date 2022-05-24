import React from 'react';
import {useNavigate} from "react-router-dom";

const Aboutpage = (props) => {
    const navigate = useNavigate();
    const goToHompage = () => {
        navigate("/ ");
    }

    return (
        <>
        <h2>AboutPage입니다!!</h2>
            <button onClick={goToHompage}>Go to Homepage</button>
        </>
    )
}

export default Aboutpage;