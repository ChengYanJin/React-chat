import React from'react'
import axios from 'axios'
import { withRouter }from 'react-router-dom'
@withRouter

class AuthRoute extends React.Component{
	componentDidMount(){
		//get user information
		const publicList=['/login','/register']
		const pathname=this.props.location.pathname
		if(publicList.indexOf(pathname)>-1){
			return null
		}
		axios.get('/user/info').
		then(res=>{
			if(res.status==200){
				if(res.data.code==0){
					//have log in information
				}
				else{
					this.props.history.push('./login')
				}
				console.log(res.data)
			}
		})

	}
	render(){
		return <p>判断跳转</p>
	}
}
export default AuthRoute