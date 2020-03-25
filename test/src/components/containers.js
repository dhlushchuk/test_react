import { connect } from 'react-redux'
import Authorization from '../pages/authorization'
import Registration from '../pages/registration'
import { addUser } from '../redux/actions'

export const AppAuthorization = connect(
    null,
    dispatch =>
    ({
        addUser(user) {
            dispatch(addUser(user))
        }
    })
)(Authorization)
export const AppRegistration = connect(
    null,
    dispatch =>
    ({
        addUser(user) {
            dispatch(addUser(user))
        }
    })
)(Registration)