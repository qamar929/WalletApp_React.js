import axios from 'axios'
import {GET_ERRORS, GET_WALLET, DELETE_WALLET,GETWALLET} from './types'


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