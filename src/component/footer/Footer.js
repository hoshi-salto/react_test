import "./Footer.css";
import { useState } from "react";

const Footer = () => {
    const [num,setNum] = useState(0)
    const onClickButton = () => {
        setNum(num+1)
        console.log(num)
    }
    return (
        <>
            {num}
            <button onClick={onClickButton}>+1</button>
        </>
    );
};

export { Footer };
