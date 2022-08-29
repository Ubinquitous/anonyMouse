import { dbService } from "fbase";
import React, { useState, useEffect } from "react";
import Mouse from "components/Mouse";
import MouseFactory from "components/MouseFactory";

const Home = ({ userObj, creatorAt }) => {
    const [mouses, setMouses] = useState([]);

    useEffect(() => {
        dbService
            .collection("mouses")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapShot) => {
            const mouseArray = snapShot.docs.map(doc => ({id:doc.id, ...doc.data(),}));
            setMouses(mouseArray);
        });
    }, []);

    return (
        <div className="container">
            <MouseFactory userObj={userObj}/>
            <div style={{ marginTop: 30}}>
                {mouses.map((mouse)=>(
                <Mouse 
                    userObj={userObj}
                    key={mouse.id}
                    mouseObj={mouse}    
                    isOwner={mouse.creatorId === userObj.uid}
                    text={mouse.text}
                />
                ))}
            </div>
        </div>
    );
}
export default Home;