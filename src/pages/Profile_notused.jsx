import { ProfileData } from "../components/ProfileData";
import { InteractionType } from "@azure/msal-browser";
import { useMsalAuthentication, useIsAuthenticated } from "@azure/msal-react";
import { useState, useEffect } from 'react';

import { fetchData } from "../fetch";

export const Profile = () => {
    const [graphData, setGraphData] = useState(null);

    // console.log(useIsAuthenticated());

    // const { result, error } = useMsalAuthentication(InteractionType.Popup, {
    //     scopes: ['user.read.all']
    // });

    const { result, error } = useMsalAuthentication(InteractionType.Redirect, {
        scopes: ['user.read.all']
    });

    // console.log('profile running');
    // console.log('result:' + result);
    // console.log('error:' + error);

    useEffect(() => {
        if (graphData) {
            console.log(graphData);
            return;
        };

        if (error) {
            console.log(error);
            return;
        };

        if (result !== null) {
            const { accessToken } = result;
            fetchData('https://graph.microsoft.com/v1.0/users', accessToken)
                .then(response => setGraphData(response['value'])) //[0]
                .catch(error => console.log(error));
            console.log("graphData:");
            console.log("graphData:" + graphData);

        };


    }, [graphData, error, result]);
    // }, []);



    return (
        <>
            {/* <button onClick={testme}>test</button> */}
            {graphData ? <ProfileData graphData={graphData} /> : null}
        </>
    )
}


// }
// export const Profile = () => {
//     const [graphData, setGraphData] = useState(null);
//     const { result, error } = useMsalAuthentication(InteractionType.Popup, {
//         scopes: ['user.read.all']
//     });

//     console.log('result:');
//     console.log(result);
//     console.log('error:');
//     console.log(error);

//     useEffect(() => {
//         if (graphData !== null) {
//             return
//         };
//         if (result !== null) {

//             const { accessToken } = result;
//             fetchData('https://graph.microsoft.com/v1.0/users', accessToken)
//                 .then(response => setGraphData(response))
//                 .catch(error => console.log(error));
//             console.log("graphdata:");
//             console.log(graphData);
//         }


//     }, [graphData, error, result]);




//     return (
//         <>
//             {/* <button onClick={testme}>test</button> */}
//             {/* {graphData ? <ProfileData graphData={graphData} /> : null} */}
//         </>
//     )



// }