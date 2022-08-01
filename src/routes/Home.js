import { dbService } from "fbase";
import React, { useState, useEffect } from "react";
import Mouse from "components/Mouse";

const Home = ({ userObj }) => {
    const [mouse, setMouse] = useState("");
    const [mouses, setMouses] = useState([]);

    useEffect(() => {
        dbService.collection("mouses").onSnapshot((snapShot) => {
            const mouseArray = snapShot.docs.map(doc => ({id:doc.id, ...doc.data(),}));
            setMouses(mouseArray);
        });
    }, []);

    const onSubmit = async(event) => {
        event.preventDefault();
        await dbService.collection("mouses").add({
            text:mouse,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setMouse("");
    };
    const onChange = (event) => {
        const { target:{value}
    } = event;
    setMouse(value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={mouse} 
                    onChange={onChange} 
                    type="text" 
                    placeholder="What's on your mind?" 
                    maxLength={120} />

                <input 
                    type="submit" 
                    value="mouse"
                     />
            </form>
            <div>
                {mouses.map((mouse)=>(
                <Mouse 
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