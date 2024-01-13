import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

export const GuestInfoComponent = () => {

    const navigate = useNavigate();

    let user = useContext(UserContext);

    function okClick() {

        user.name = document.getElementById('name').value;
        user.company = document.getElementById('company').value;
        user.phone = document.getElementById('phone').value;
        user.mail = document.getElementById('mail').value;


        if (String(document.getElementById('name').value).length === 0) {
            document.getElementById('name').placeholder = "venligst udfyld dit navn";
            return
        };
        if (String(document.getElementById('company').value).length === 0) {
            document.getElementById('company').placeholder = "venligst udfyld din virksomhed";
            return
        };
        if (String(document.getElementById('phone').value).length === 0) {
            document.getElementById('phone').placeholder = "venligst udfyld dit telefonnummer";
            return
        };
        if (String(document.getElementById('mail').value).length === 0) {
            document.getElementById('mail').placeholder = "venligst udfyld din e-mail";
            return
        };

        navigate("/hostinfo");
    };

    return (
        <div className='guest'>
            <h2>Welcome. Please enter your information</h2>
            <div id="guest_info1">
                <input className="inputs" placeholder="name" id="name" defaultValue={user.name} ></input>
                <input className="inputs" placeholder="company" id="company" defaultValue={user.company}></input>
            </div>
            <div id="guest_info2">
                <input className="inputs" placeholder="phone" id="phone" defaultValue={user.phone}></input>
                <input className="inputs" placeholder="mail" id="mail" defaultValue={user.mail}></input>
            </div>
            <div>
                <Button id="ok_button" onClick={okClick}>OK</Button>
            </div>
        </div>
    );
};