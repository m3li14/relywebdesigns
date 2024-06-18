import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from '../Config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: "#99aab5", // custom primary color
        },
        secondary: {
            main: "#C13E39", // custom secondary color
        },
    },
});

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='container mx-auto'>
            <div className='px-10 items-center justify-center lg:w-1/2 mx-auto'>
                <div className='w-full'>
                    <div>
                        <TextField
                            className="dark:text-white"
                            variant="standard"
                            fullWidth
                            label="Name"
                            name="name"
                            required
                            onChange={(e) => setEmail(e.target.value)}

                            type="text"
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        <TextField
                            className="dark:text-white"
                            variant="standard"
                            fullWidth
                            label="password"
                            name="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}

                            type="password"
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='mt-10 clear-both'>
                        <ThemeProvider theme={theme}>
                            <Button fullWidth variant="contained" type="submit" color="secondary" size='large' onClick={signIn}><VpnKeyIcon />&nbsp;&nbsp;  Sign Up</Button>
                        </ThemeProvider>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Auth;