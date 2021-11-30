import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components 
import Index from './components'
import SignUp from './components/signUp'
import LogIn from './components/logIn'
import ProductsList from './components/productsList'
import ProductsAdd from './components/productsAdd'
import Context from './context'

class App extends Component{

    render() {
        return (
            <div>
                <Router>
                    <Context>
                    <Switch>
                        <Route exact path="/" component = {Index}/>
                        <Route path="/signup" component = {SignUp} />
                        <Route path="/login" component = {LogIn} />
                        <Route exact path="/products" component = {ProductsList}/>                
                        <Route path="/products/add" component = {ProductsAdd}/>                     
                        <Route path="/products/edit/:id" component = {ProductsAdd}/>                               
                    </Switch>
                    </Context>
                </Router>
            </div>
        )
    }
}

export default App;