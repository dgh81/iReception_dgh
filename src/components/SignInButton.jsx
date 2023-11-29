import Button from '@mui/material/Button';
import { useMsal } from '@azure/msal-react';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect({
            scopes: ['user.read.all']
        });
    }
    return (
        <Button color="inherit" onClick={handleSignIn}>Sign in</Button>
    )
};