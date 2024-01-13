import { fetchData } from "../fetch";
import { pca as msalInstance } from '../index';
import { useEffect, useState } from "react";
import { HostInfoComponent } from "../components/HostInfoComponent";

export const GetAccessToken = async () => {

    try {
        await msalInstance.initialize();
    } catch (error) {
        console.log("initialize error:" + error);
    };

    const currentAcc = msalInstance.getActiveAccount();
    const accessTokenRequest = {
        scopes: ['user.read.all'],
        account: currentAcc,
    };

    let accessTokenResponse = {};
    let accessToken = {};

    try {
        accessTokenResponse = await msalInstance.acquireTokenSilent(accessTokenRequest);
    } catch (error) {
        console.log("FEJL: " + error);
    }

    accessToken = accessTokenResponse.accessToken;
    // console.log('accessToken:' + accessToken);

    return accessToken;

};

export const HostInfo = () => {

    const [userList, setUserList] = useState([]);
    useEffect(() => {
        GetAccessToken().then(accessToken => {
            fetchData('https://graph.microsoft.com/v1.0/users', accessToken)
                .then(res => {
                    setUserList(res.value);
                })
                .catch(error => console.log(error));
        }).catch(err => console.log(err));

    }, []);

    return (
        <>
            {userList ? <HostInfoComponent response={{ userList }} /> : null}
        </>
    );
};