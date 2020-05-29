import { GET_WALLET, DELETE_WALLET ,GETWALLET} from '../actions/types'
import { } from '../actions/types'

const initialState = {

    wallets: [],
    wallet: ''

}

export default function (state = initialState, action) {
    switch (action.type) {
       
        case GETWALLET:
            return { ...state, wallet: action.payload };
        case GET_WALLET:
            return { ...state, wallets: action.payload };
        case DELETE_WALLET:
            return { ...state, wallets: state.wallets.filter(x => x.id !== action.payload) }
        default:
            return state;
    }
}