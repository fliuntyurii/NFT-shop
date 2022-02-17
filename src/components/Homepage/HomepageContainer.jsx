import React from "react";
import { useState, useEffect } from "react";
import Homepage from "./Homepage";

const HomepageContainer = (props) => {
    const [toggle, setToggle] = useState(1);
    
    const toggleChange = () => {
        toggle ? setToggle(0) : setToggle(1);
    }

    useEffect(() => {
        setInterval(() => {
            setToggle(0);
        }, 3000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setToggle(1);
        }, 6000);
    }, []);


    return (
        <Homepage toggleChange={toggleChange} toggle={toggle} />
    )
}

export default HomepageContainer;