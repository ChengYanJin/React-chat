import React from 'react'
import Logo from '../../component/logo/logo';
import {List, Radio,inputItem,WingBlank, WhiteSpace,Button, InputItem} from'antd-mobile'

class Register extends React.Component{
    constructor(pros){
        super(pros);

        this.state={
            type:'genius'
        }
    }
    register(){
         this.props.history.push('/register')//router component
    }
    render(){
        const RadioItem=Radio.RadioItem
        return (
            <div>
                <Logo></Logo> 
                <h2>Regiser page</h2>
                <List>
                    <InputItem>username</InputItem>
                    <WhiteSpace/>
                    <InputItem>password</InputItem>
                    <WhiteSpace/>
                    <InputItem>password again</InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type=='genuis'}> 牛人</RadioItem>
                    <RadioItem checked={this.state.type=='boss'}> BOSS </RadioItem>
                    <Button onClick={this.register}>Sign up</Button>
                </List>

            </div>
        )
    }
}
  
export default Register