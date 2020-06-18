import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/dashboardOperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import {Provider} from 'react-redux'
import store from './Store'
import UpdateWallet from './components/dashboard/dashboardOperations/UpdateWallet';
import Transaction from './components/transactions/Transaction';
import AddTransaction from './components/transactions/transactionOperations/AddTransaction';
import EditTransactions from './components/transactions/transactionOperations/EditTransactions';
import 'react-app-polyfill/stable'
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter >
      <Route path="/" component={Nav} />

      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/createwallet" exact component= {CreateWallet} />
        <Route path="/updatewallet/:id" exact component= {UpdateWallet} />
        <Route path="/transactions/:id" exact component={Transaction} />
        <Route path="/trns/add/:id" exact component={AddTransaction}/>
        <Route path="/trns/edit/:id/:Tid" exact component={EditTransactions}/>
        <Route path="/" component={NotFound} />
        </Switch>
      

    </BrowserRouter>
    </Provider>
 
    );
}

export default App;
