import axios from 'axios';
import { toast } from 'react-toastify';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT,
} from './types';

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);
    
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
            // toast.error('User Load Failed - Try Refreshing Page')
        }
    } else {
        return;
    }
};

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            // if (err !== 'Error: Request failed with status code 401'){
            //     toast.error('Authentication Failed - Try Refreshing Page')
            // } 
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        return;
    }
};

export const refreshToken = () => async dispatch => {
    if (localStorage.getItem('refresh')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }; 

        const body = JSON.stringify({ refresh: localStorage.getItem('refresh') });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: REFRESH_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: REFRESH_FAIL
                })
            }
        } catch (err) {
            // if (err !== 'Error: Request failed with status code 401'){
            //     toast.error('Refresh Token Failed - Please Login Again')
            // } 
            dispatch({
                type: REFRESH_FAIL
            });
        }

    } else {
        return;
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        
        dispatch(load_user());
        
    } catch (err) {
        console.log(err)
        if (err == 'Error: Request failed with status code 401'){
            toast.error('Invalid Login Credentials')
        } else {
            toast.error('Login Failed')
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const signup = (email, first_name, last_name, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, first_name, last_name, P_ID, department_name, department_id, password, re_password });
    
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        toast.success("Successfully Created Account. Check Email for Account Activation Link.")

    } catch (err) {
        if (err === 'Error: Request failed with status code 400'){
            toast.error('Department ID & PID already assigned to an Account - Try Login')
        } else {
            toast.error('Application Failed - Invalid Inputs')
            console.log(err)
        }
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
        });

        toast.success("Successfully Activated Account. Login or Reset Password to Proceed.")

    } catch (err) {
        if (err == 'Error: Request failed with status code 403'){
            toast.error('User already activated')
        } else if (err == 'Error: Request failed with status code 400') {
            toast.error('Activation Link Expired')
        } else {
            toast.error('Account Activation Failed - Please contact TCOLE')
        }
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);
        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });

        toast.success("Received reset password request. Check email for reset password link.")

    } catch (err) {
         if (err == 'Error: Request failed with status code 400'){
            toast.error('Not a registered email address')
        } else {
            toast.error('Password Reset Failed - Please contact TCOLE')
        }
        dispatch({
            type: PASSWORD_RESET_FAIL
        });
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });

        toast.success("Successfully Reset Password. Login to proceed.")

    } catch (err) {
        toast.error('Password Reset Confirmation Failed - Please contact TCOLE')
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};