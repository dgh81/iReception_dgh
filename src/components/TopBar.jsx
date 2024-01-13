import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from '../styles/logo.png';

const TopBar = () => {
    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} alt='' />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;