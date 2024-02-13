import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth from '@react-native-firebase/auth';

const initialState = {
    isLoading: false,
    auth: null,
    error: null
}

export const signupwithEmail = createAsyncThunk(
    'auth/singupwithEmail',
    async (data) => {
        console.log("ppppppppppppppppppppppppppppppppp", data);
        await auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(async (userCredential) => {
                console.log('User account created & signed in!', userCredential);
                await userCredential.user.sendEmailVerification();
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
)

export const Loginwithemail = createAsyncThunk(
    'auth/Loginwithemail',
    async (data) => {
        console.log("ppppppppppppppppppppppppppppppppp", data);
        const user = await auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                console.log(user);
                if (user.user.emailVerified) {
                    console.log('User account login in!');

                    return user.user;
                } else {
                    console.log("Please verify your email.");
                }   
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                if (error.code === 'auth/invalid-credential') {
                    console.log("Invalid email or password.");
                }

                // console.error(error);
            });

        return user;
    }
)
export const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Loginwithemail.fulfilled, (state, action) => {
            console.log("productttttt actionnnn ", action);
            state.auth = action.payload
        })
    }

})


export default authslice.reducer