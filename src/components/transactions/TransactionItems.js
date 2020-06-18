import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { deleteTransaction } from './../../actions/projectActions'
import {connect} from 'react-redux'


 class TransactionItems extends Component {


 
  
  deleteBtnClick= () =>
    {

        if(window.confirm("Are you sure, you want to delete this wallet"))
        {
            this.props.deleteTransaction(this.props.wallet_id,this.props.transaction.id);
        }
    
    }
  render() {

  
   let id = this.props.wallet_id;
   let Tid =this.props.transaction.id;
    const transaction = this.props.transaction
    return (
     
        <tr className="table text-white">
        <td>{transaction.transactionDate}</td>
        <td>{transaction.description}</td>
        <td className="text-white">{transaction.amount}</td>
        <td>
            <Link className="text-info" to={`/trns/edit/${id}/${Tid}`}><i className="fas fa-edit fa-2x"></i></Link>
            <Link className="text-danger" to={`/transactions/${id}`} onClick={()=>this.deleteBtnClick()}><i className="fas fa-trash fa-2x"></i></Link>
        </td>
    </tr>
    

    )
  }
}

export default connect(null,{deleteTransaction})(TransactionItems)
