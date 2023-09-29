

const initiale = {
    user: '',
    msg: '',
    isLogin: false
}

const Authductreducer = (state = initiale, action) => {


    switch (action.type) {

        case 'SIGNUP_SUC':

            return {
                ...state,
        
            }

        case 'SIGNUP_ERR':

            return {
                ...state,
                msg: action.payload
            }

            case 'SIGNIN_SUC':

            return {
                ...state,
                isLogin: true
            }

        case 'SIGNIN_ERR':

            return {
                ...state,
                msg: action.payload
            }


            case 'LOGOUT_SUC' :
                return{
                    ...state,
              
                    isLogin:false
                }

        default:
            return state

    }


}

export default Authductreducer
