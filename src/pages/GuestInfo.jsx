import { GuestInfoComponent } from "../components/GuestInfoComponent";
// import { Mail } from "../components/Mail";
// import { useMsal, useIsAuthenticated } from '@azure/msal-react';

export const GuestInfo = () => {
    return (
        <>
            <GuestInfoComponent />
        </>
    );
};

// const isAuthenticated = useIsAuthenticated();
// const { instance } = useMsal();
// try {
//     instance.initialize();
// } catch (error) {
//     console.log('initialize error:' + error);
// }
// try {
//     if (!isAuthenticated) {
//         // console.log('isAuthenticated:' + isAuthenticated);
//         instance.loginRedirect({
//             scopes: ['user.read.all']
//         });
//     };
// } catch (error) {
//     console.log(error);
// };
