// import { GetAccessToken } from '../pages/HostInfo';
// import UserContext from "./UserContext";
// import { useContext } from 'react';

// // TODO: Det her virker, men mail sendes 3 gange (eller med re-render af side), det skal ændres.
// // TODO: Evt. opret post funktion i fetch.js, for at gøre det hele mere konsistent
// export const MailComponent = () => {

//     let user = useContext(UserContext);

//     GetAccessToken().then(async accessToken => {

//         const res = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 message: {
//                     subject: `${user.name}` + ' has arrived to your meeting.',
//                     toRecipients: [
//                         {
//                             emailAddress: {
//                                 address: `${user.hostmail}` //'danielguldberg@gmail.com'
//                             }
//                         }
//                     ],
//                     body: {
//                         content: 'Please meet your guest in the lobby.',
//                         contentType: 'Text'
//                     }
//                 }
//             })
//         });
//     })

//     return <h1>test</h1>
// };
