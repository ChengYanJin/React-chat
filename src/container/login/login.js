import React from 'react'
import Logo from '../../component/logo/logo'
import {List, inputItem,WingBlank, WhiteSpace,Button, InputItem} from'antd-mobile'

class Login extends React.Component{
    constructor(pros){
        super(pros);
        
        this.register=this.register.bind(this)
    }
    register(){
        console.log(this.props)
         this.props.history.push('/register')//router component
    }
    render(){
        return (
            <div>
                <Logo></Logo> 
                <h2>Regiser page</h2>
                <WingBlank>
                    <List>
                        <InputItem>user</InputItem>
                        <WhiteSpace/>
                        <InputItem>password</InputItem>
                    </List>
                    <Button type='primary'>Log in</Button>
                    <WhiteSpace/>
                    <Button onclick={this.register}type='primary'>Sign up</Button>
                </WingBlank>
  
            </div>
        )
    }
}

export default Login