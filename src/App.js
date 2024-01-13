import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";
import { HostInfo } from "./pages/HostInfo";
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useEffect } from "react";
import { GuestInfo } from "./pages/GuestInfo";
import { End } from "./pages/End";
import UserContext from "./components/UserContext";

function App({ msalInstance }) {
    // global user object sat i context:
    let user = {
        name: '',
        company: '',
        phone: '',
        mail: '',
        host: '',
        hostmail: ''
    };

    return (
        <UserContext.Provider value={user}>
            <MsalProvider instance={msalInstance}>
                <PageLayout>
                    <Grid container justifyContent="center">
                        <Pages />
                    </Grid>
                </PageLayout>
            </MsalProvider>
        </UserContext.Provider>
    );
}

const Pages = () => {

    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    try {
        instance.initialize();
    } catch (error) {
        console.log(error);
    };

    useEffect(() => {
        if (!isAuthenticated) {
            instance.ssoSilent({
                scopes: ['user.read.all', 'mail.send'],
            }).then((response) => {
                instance.setActiveAccount(response.account);
                console.log('Active account was set in App.js under Pages!')
            }).catch((error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    instance.loginRedirect({
                        scopes: ['user.read.all', 'mail.send']
                    });
                }
            });
        };
    }, [instance, isAuthenticated]);

    return (
        <Routes>
            <Route path="/" element={<GuestInfo />} />
            <Route path="/hostinfo" element={<HostInfo />} />
            <Route path="/end" element={<End />} />
        </Routes>
    );
};

export default App;
