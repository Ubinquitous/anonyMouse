import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
    return (
        <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            <li style={{ listStyle: "none" }}><Link to="/" style={{ marginRight: 10 }}>
                <img
                    src="https://www.the-pr.co.kr/news/photo/201804/34111_59145_240.jpg"
                    style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '8000px'
                    }}
                /></Link></li>
            <li style={{ listStyle: "none" }}><Link to="/profile" style={{
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: 12,
            }}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/727/727399.png"
                    style={{
                        width: '55px',
                        height: '55px'
                    }}
                />
                <span style={{
                    marginTop: 10
                }}>{userObj.displayName}의 Profile</span></Link></li>
        </ul>
    );
}


export default Navigation;