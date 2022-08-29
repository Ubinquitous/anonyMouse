import React, { useState } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';

export default ({ userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        window.location.reload();
    };
    

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
        }
        window.location.reload();
    };

    return (
        <div className='container'>
            <form onSubmit={onSubmit} className="profileForm">
                <input onChange={onChange} type="text" placeholder='Display name' autoFocus className='formInput'/>
                <input onChange={onChange} type="submit" value="Update Profile" className="formBtn" style={{marginTop:10}}/>
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>
    )
}