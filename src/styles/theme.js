import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            // main: '#556cd6',
            main: '#A0CE4E',
        },
        secondary: {
            main: '#19857b',
            // main: '#000000',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});