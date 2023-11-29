import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { SignInButton } from "./SignInButton";
// import { SignOutButton } from "./SignOutButton";
// import { Link as RouterLink } from "react-router-dom";
// import { useIsAuthenticated } from "@azure/msal-react";
import logo from '../styles/logo.png';
const TopBar = () => {
    // const isAuthenticated = useIsAuthenticated();

    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} alt='' />
                    {/* {isAuthenticated ? <SignOutButton /> : <SignInButton />} */}
                    {/* <Button component={RouterLink} to="/" color="inherit">GuestInfo</Button>
                    <Button component={RouterLink} to="/hostinfo" color="inherit">HostInfo</Button>
                    <Button component={RouterLink} to="/end" color="inherit">end</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;