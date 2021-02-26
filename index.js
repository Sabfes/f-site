import {stopSubmit} from "redux-form";

export const LoginUser = (data) => async (dispatch) => {
    let res = await userApi.login(data)

    if (res.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        const msg = res.data.messages[0]
        // название формы 'login' 
        dispatch(stopSubmit('login', {_error: msg}))
    }
}

