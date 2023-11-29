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

    // setTimeLeft(5);

    // const [msg, setMsg] = useState({});
    // const msg = {
    //     "message": {
    //         "subject": "hi",
    //         "body": {
    //             "contentType": "Text",
    //             "content": "how are you"
    //         },
    //         "toRecipients": [
    //             {
    //                 "emailAddress": {
    //                     "address": "danielguldberg@gmail.com"
    //                 }
    //             }
    //         ],
    //         "ccRecipients": [
    //             {
    //                 "emailAddress": { "address": "danielguldberg@gmail.com" }
    //             }
    //         ]
    //     },
    //     "saveToSentItems": "false"
    // };
    // const scopes = { scopes: ['user.read.all', 'mail.send'] };

    // const authProviderOptions = new client.MSALAuthenticationProviderOptions(scopes);
    // const authProvider = new client.ImplicitMSALAuthenticationProvider(pca, authProviderOptions);
    // const client_options = {
    //     authProvider
    // };
    // const client2 = client.Client.initWithMiddleware(client_options);

    // // @azure/identity
    // const credential = new ClientSecretCredential(
    //     '24803583-b63e-427b-857f-ff71b1863978',
    //     'c92879e8-a662-4f14-9290-f872ad0f8f45',
    //     'Hy.8Q~2eEhc6rEyK70eQmLUlCMRKXLEtqTSLraD9'
    // );
    // // // 'clientId': 'c92879e8-a662-4f14-9290-f872ad0f8f45',
    // // //     'clientSecret': 'Hy.8Q~2eEhc6rEyK70eQmLUlCMRKXLEtqTSLraD9',
    // // //     'tenantId': '24803583-b63e-427b-857f-ff71b1863978'

    // // // @microsoft/microsoft-graph-client/authProviders/azureTokenCredentials
    // const authProvider = new client.authProvider.TokenCredentialAuthenticationProvider(credential, {
    //     // The client credentials flow requires that you request the
    //     // /.default scope, and pre-configure your permissions on the
    //     // app registration in Azure. An administrator must grant consent
    //     // to those permissions beforehand.
    //     scopes: ['https://graph.microsoft.com/.default'],
    // });

    // const graphClient = pca.initWithMiddleware({ authProvider: authProvider });
    // const options = {
    //     authProvider: {
    //         scopes: ['user.read'],
    //         interactionType:
    //     },
    // };

    // const client = pca.init(options);

    // async function sendmail() {
    //     await pca.api('/me/sendMail')
    //         .post(msg);
    // }

    // https://github.com/microsoftgraph/msgraph-sample-reactspa/blob/main/graph-tutorial/src/GraphService.ts
    // useEffect(() => {
    //     GetAccessToken().then(accessToken => {
    //         axios.post('https://graph.microsoft.com/v1.0/me/sendmail', accessToken)
    //             .then(res => {
    //                 console.log(res);
    //                 // setMsg(res.value);
    //             })
    //             .catch(error => console.log(error));
    //     }).catch(err => console.log(err));
    // }, []);

    return (
        <div className='endcomponent' id='host_list_div'>
            <h2>Thanks! You are now signed in.</h2>
            <h2>Await your host in the reception area.</h2>
        </div>
    );
}