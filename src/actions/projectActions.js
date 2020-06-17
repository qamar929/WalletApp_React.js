import axios from 'axios'
import {GET_ERRORS, GET_WALLET,GET_TRANSACTION, DELETE_WALLET,GETWALLET,GET_TRANSACTIONS,DELETE_TRANSACTION} from './types'


export const createWallet = (newWallet , history) => async dispath => {

   await axios.post('http://localhost:8080/wallet', newWallet)
    .then((res) =>{

     
      history.push('/dashboard')
       

    }).catch((err) => {
    
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}



export const updateWallet = (id,updateWaller , history) => async dispath => {
  
   await axios.put(`http://localhost:8080/wallet/${id}`, updateWaller)
    .then((res) =>{

      
      history.push('/dashboard')
       

    }).catch((err) => {
      
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}


export const updateWalletBal = (id,updateWaller , history) => async dispath => {
  
   await axios.put(`http://localhost:8080/wallet/${id}`, updateWaller)
    .then((res) =>{

      
      
       

    }).catch((err) => {
      
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}

export const getWallets = () => async dispath => {

  await axios.get('http://localhost:8080/wallet')
   .then((res) =>{

      dispath({type:GET_WALLET,payload:res.data})
   });

//sync => wait
//async = not wait

}

export const getWallet = (id) => async dispath => {

   await axios.get(`http://localhost:8080/wallet/${id}`)
    .then((res) =>{
 
       dispath({type:GETWALLET,payload:res.data})
    });
 
 //sync => wait
 //async = not wait
 
 }
export const deleteWallet = (id) => async dispath => {

   await axios.delete( 'http://localhost:8080/wallet/'+id)
    .then((res) =>{
 
       dispath({type:DELETE_WALLET,payload:id})
    });
 
 //sync => wait
 //async = not wait
 
 }


 ////////////////////////////// transactions

 
export const createTransaction= (newTrans , history,wallet_id) => async dispath => {
  
   await axios.post(`http://localhost:8080/transaction/${wallet_id}`, newTrans)
    .then((res) =>{

    
      history.push(`/transactions/${wallet_id}`)
       

    }).catch((err) => {
     
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}

export const getTransactions= (wallet_id) => async dispath => {

   await axios.get(`http://localhost:8080/transaction/${wallet_id}`)
    .then((res) =>{

       dispath({type:GET_TRANSACTIONS,payload:res.data})
    });
 
 //sync => wait
 //async = not wait
 
 }

 export const getTransaction= (wallet_id,id) => async dispath => {
   
   await axios.get(`http://localhost:8080/transaction/${wallet_id}/${id}`)
    .then((res) =>{

       dispath({type:GET_TRANSACTION,payload:res.data})
    });
 
 //sync => wait
 //async = not wait
 
 }
 
export const deleteTransaction = (wallet_id,id) => async dispath => {


   await axios.delete( `http://localhost:8080/transaction/${wallet_id}/${id}`)
    .then((res) =>{
 

       dispath({type:DELETE_TRANSACTION,payload:id})
    });
 
 //sync => wait
 //async = not wait
 
 }


 export const updateTransaction = (id,wallet_id,updateTransaction , history) => async dispath => {

   await axios.put(`http://localhost:8080/transaction/${wallet_id}/${id}`, updateTransaction)
    .then((res) =>{

     
      history.push(`/transactions/${wallet_id}`)
       

    }).catch((err) => {
    
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}
