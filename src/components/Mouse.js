import { dbService } from "fbase";
import React, { useState } from "react";

const Mouse = ({mouseObj, isOwner, text}) => {
    const [editing, setEditing] = useState(false);
    const [newMouse, setNewMouse] = useState(text);
    const onDeleteClick = () => {
        const ok = window.confirm(`"${text}"\n다음 내용의 글을 삭제하시겠습니까?`);
        if(ok){
            dbService.doc(`mouses/${mouseObj.id}`).delete();
        }
    };
    const toggleEditing = () => setEditing(prev => !prev);
    const onSubmit = (event) => {
        event.preventDefault();
        dbService.doc(`mouses/${mouseObj.id}`).update({
            text:newMouse,
        })
        setEditing(false);
    };
    const onChange = (event) => {
        const {target:{value}
        } = event;
        setNewMouse(value);
    };

    return (
    <div>
        {editing ? (
            <>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Edit your mouse"
                        value={newMouse} 
                        required
                        onChange={onChange} 
                    />
                    <input type="submit" value="Update"/>
                </form>
                <button onClick={toggleEditing}>Cancel</button>
            </>
        ) : (
        <>
        <h4>{text}</h4>
        {isOwner && 
            <>
                <button onClick={onDeleteClick}>delete</button>
                <button onClick={toggleEditing}>Edit</button>
            </>
            }
        </>
        )}
    </div>
    );
}

export default Mouse;