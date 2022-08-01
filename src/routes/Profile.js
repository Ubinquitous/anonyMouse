import { authService } from "fbase";
import React from "react";


const Profile = () => {
    const onLogOutClick = () => {
        authService.signOut();
    };
    return (
        <>
            <button onClick={onLogOutClick}>Sign out</button>
        </>
    );
};
export default Profile;