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
    <div className="mouse">
        {editing ? (
            <>
                <form onSubmit={onSubmit} className="container mouseEdit">
                    <input 
                        type="text" 
                        placeholder="Edit your mouse"
                        value={newMouse} 
                        required
                        autoFocus
                        className="formInput"
                        onChange={onChange} 
                    />
                    <input type="submit" value="Update" className="formBtn"/>
                </form>
                <button onClick={toggleEditing} className="formBtn cancelBtn">Cancel</button>
            </>
        ) : (
        <>
        <h4>{text}</h4>
        {isOwner && 
            <div className="mouse__actions">
                <span onClick={onDeleteClick}>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/1345/1345823.png'
                    style={{
                        width:'20px',
                        height:'20px'
                    }}
                />
                </span>
                <span onClick={toggleEditing}>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/650/650143.png'
                    style={{
                        width:'15px',
                        height:'15px',
                        marginBottom:2,
                    }}
                />
                </span>
            </div>
            }
        </>
        )}
    </div>
    );
}

export default Mouse;