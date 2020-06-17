import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { updateTransaction,getTransaction ,getWallet} from '../../../actions/projectActions'
import { connect } from 'react-redux'
class EditTransactions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            amount: '',
            description: '',
            type: '1',
            transactionDate:'',
            name:''

        }
    }

 

    componentWillReceiveProps(nextProps) {

        if (nextProps.transaction) {
            
            this.setState({

                id: nextProps.transaction.id,
                amount: nextProps.transaction.amount,
                description: nextProps.transaction.description,
                type: nextProps.transaction.type,
                transactionDate:nextProps.transaction.transactionDate

            })
        }
            if(nextProps.wallet)
            {
                this.setState({

                    name:nextProps.wallet.name
                })
            }

            
        
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }
    handleSubmit = (event) => {

        let updateTransaction = {
            id:this.state.id,
            amount: this.state.amount,
            description: this.state.description,
            transactionDate:this.state.transactionDate,
            type: this.state.type
        }

        this.props.updateTransaction(this.state.id,this.props.match.params.id,updateTransaction, this.props.history)
        event.preventDefault();
    }

    componentDidMount() {
        this.props.getTransaction(this.props.match.params.id, this.props.match.params.Tid)
        this.props.getWallet(this.props.match.params.id)
    }
    render() {
        let id = this.props.match.params.id;
        const { amount, description,type } = this.state;
      
        return (


            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/transactions/${id}`} className="btn btn-light">
                                Back to Wallet
            </Link>
                            <h4 className="display-4 text-center h1">Update Transaction</h4>
                            <p className="lead text-center h1">{this.state.name} Account</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="number" min="1" value={amount} onChange={event => this.changeHandler(event, "amount")} className="form-control form-control-lg" placeholder="Amount" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" value={description} onChange={event => this.changeHandler(event, "description")} placeholder="Description"></textarea>
                                </div>
                                <div className="form-group radio">
                                    <label htmlFor="exampleFormControlTextarea1">Transaction Type : </label>
                                    <div className="form-check form-check-inline">
                                        <input  className="form-check-input" type="radio" id="income" checked={type === 1} onChange={event => this.changeHandler(event, "type")} name="type" value="1"  />
                                        <label className="form-check-label" htmlFor="income">Income</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="expense" checked={type === 2} onChange={event => this.changeHandler(event, "type")} name="type" value="2"  />
                                        <label className="form-check-label" htmlFor="expense">Expense</label>
                                    </div>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    errors: state.errors,
    transaction: state.wallet.transaction,
    wallet: state.wallet.wallet

});
export default connect(mapStateToProps, {updateTransaction, getTransaction ,getWallet})(EditTransactions)
