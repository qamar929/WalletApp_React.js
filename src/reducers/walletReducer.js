import { GET_WALLET, DELETE_WALLET,GET_TRANSACTION ,GETWALLET,GET_TRANSACTIONS,DELETE_TRANSACTION} from '../actions/types'
import { } from '../actions/types'

const initialState = {

    wallets: [],
    transactions: [],
    wallet: '',
    transaction: ''

}

export default function (state = initialState, action) {
    switch (action.type) {
       
        
        case GET_TRANSACTIONS:
            return{...state, transactions: action.payload }
            case GET_TRANSACTION:
                return{...state, transaction: action.payload }
        case GETWALLET:
            return { ...state, wallet: action.payload };
        case GET_WALLET:
            return { ...state, wallets: action.payload };
        case DELETE_WALLET:
            return { ...state, wallets: state.wallets.filter(x => x.id !== action.payload) }

          case  DELETE_TRANSACTION:
            return { ...state, transactions: state.transactions.filter(x => x.id !== action.payload) }
        default:
            return state;
    }
}