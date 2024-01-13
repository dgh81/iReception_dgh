import React, { useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GetAccessToken } from "../pages/HostInfo";

export const EndComponent = () => {

    let user = useContext(UserContext);
    // console.log('user.name:' + user.name);
    // console.log('user.company:' + user.company);
    // console.log('user.phone:' + user.phone);
    // console.log('user.mail:' + user.mail);
    // console.log('user.host:' + user.host);

    // --------------------------------------------------------------------------------------------------------
    // let user = useContext(UserContext);
    useEffect(() => {
        GetAccessToken().then(async accessToken => {
            const res = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: {
                        subject: `${user.name}` + ' has arrived to your meeting.',
                        toRecipients: [
                            {
                                emailAddress: {
                                    address: `${user.hostmail}` //'danielguldberg@gmail.com'
                                }
                            }
                        ],
                        body: {
                            content: 'Please meet your guest in the lobby.',
                            contentType: 'Text'
                        }
                    }
                })
            });
        });
    }, []);
    //--------------------------------------------------------------------------------------------------------

    useEffect(() => {
        axios.post('http://localhost:4000/addUser', {
            name: user.name,
            company: user.company,
            phone: user.phone,
            mail: user.mail,
            host: user.host
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    // const test = async () => {
    //     console.log("app trying to GET from port 4000");
    //     axios.get('http://localhost:4000/', (res, req) => {
    //         console.log(res.body);
    //     }).then((res) => {
    //         console.log(res);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    const nav = useNavigate();

    const [timeLeft, setTimeLeft] = useState(5);


    useEffect(() => {
        if (timeLeft === 0) {
            // sendmail();
            console.log("TIME LEFT IS 0");
            setTimeLeft(null);

            // TODO: Som struktur pt er, reset user i mailcomponent i stedet for her...
            user.name = '';
            user.company = '';
            user.phone = '';
            user.mail = '';
            user.host = '';
            user.hostmail = '';

            nav('/');
            // nav('/mail');
        }

        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    return (
        <div className='endcomponent' id='host_list_div'>
            <h2>Thanks! You are now signed in.</h2>
            <h2>Await your host in the reception area.</h2>
        </div>
    );
}