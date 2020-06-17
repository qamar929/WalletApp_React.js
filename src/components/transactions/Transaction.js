import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTransactions, getWallet, updateWalletBal } from './../../actions/projectActions'
import { connect } from 'react-redux'
import TransactionItems from './TransactionItems';
class Transaction extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            accountNumber: '',
            description: '',
            priority: '',
            currentBalance: '',
            errors: ''
        }
    }

    componentDidMount() {
        this.props.getTransactions(this.props.match.params.id);
        this.props.getWallet(this.props.match.params.id)
    }

    componentWillUnmount(nextProps) {


        const updateWallet = {
            id: this.state.id,
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            currentBalance: this.state.currentBalance,
            priority: this.state.priority
        }


        this.props.updateWalletBal(this.state.id, updateWallet, this.props.history)


    }
    componentWillReceiveProps(nextProps) {

        // alert(nextProps.wallet.id)

        if (nextProps.transactions) {
            let income = 0;
            let expense = 0;
            for (let i = 0; i < nextProps.transactions.length; i++) {

                if (nextProps.transactions[i].type === 2) {
                    expense = expense + nextProps.transactions[i].amount

                } else {

                    income = income + nextProps.transactions[i].amount
                }


            }

            let Bal = 0;
            Bal = income - expense;
           
            this.setState({ currentBalance: Bal })

            if (nextProps.wallet) {


                this.setState({
                    id: nextProps.wallet.id,
                    name: nextProps.wallet.name,
                    accountNumber: nextProps.wallet.accountNumber,
                    description: nextProps.wallet.description,

                    priority: nextProps.wallet.priority,

                })
            }
        }





    }





    render() {
        let id = this.props.match.params.id;

        const transactions = this.props.transactions

        const TransactionComponent = transactions.map(transaction =>
            (<TransactionItems key={transaction.id} transaction={transaction} wallet_id={id} />))
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                    Back
        </Link>
                <Link to={`/trns/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle h1"> Record new Transaction</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-success text-white">
                        <h4 className="h1">{this.state.name} Account Balance</h4>
                        <h1 className="h1">Rs. {this.state.currentBalance}</h1>
                    </div>
                </div>
                <hr />

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>


                        {TransactionComponent}


                    </tbody>


                </table>


            </div>

        )
    }
}
const mapStateToProps = (state) => ({

    wallet: state.wallet.wallet,
    transactions: state.wallet.transactions


});
export default connect(mapStateToProps, { getTransactions, getWallet, updateWalletBal })(Transaction)
