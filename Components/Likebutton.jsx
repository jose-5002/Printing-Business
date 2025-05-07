import React,{ useState } from "react";

function Likebutton(){
    const [like, setlike] = useState('🤍');
    // const Like = setlike(l => l === "🤍" ? "❤️" : "🤍");
    function Like(){
        setlike(l => l === "🤍" ? "❤️" : "🤍");
    }
     
    return(
        <>
        <button onClick={Like}>{like}</button>
        <p>Like</p>
        </>
    );
}

export default Likebutton