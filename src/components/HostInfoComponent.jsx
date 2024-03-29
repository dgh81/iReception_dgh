import React from "react";
import Button from "@mui/material/Button";
import AutoComplete from "./Autocomplete";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

export const HostInfoComponent = (res) => {

    let user = useContext(UserContext);
    // console.log('user.name:' + user.name);
    // console.log('user.company:' + user.company);
    // console.log('user.phone:' + user.phone);
    // console.log('user.mail:' + user.mail);

    const navigate = useNavigate();

    const end = () => {
        const host = document.getElementById('selectedHost').value;
        user.host = host;
        navigate('/end');
    };

    const back = () => {
        const host = document.getElementById('selectedHost').value;
        user.host = host;
        navigate('/');
    };


    return (
        <div>
            <h2>Please search for and select your host</h2>
            <h4>If you do not know the name of your host, please ask for help in the reception</h4>
            <AutoComplete userList={res.response.userList} />
            <Button onClick={back} id="back_button">BACK</Button>
            <Button onClick={end} id="end_button">OK</Button>
        </div>
    );
}