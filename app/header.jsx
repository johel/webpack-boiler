import React, {Component} from 'react';

export default class header extends Component{
	render(){
		return(
			<div className="page-header">
		  	<div className = "page-logo">
		  		<img src="http://www.keenthemes.com/preview/metronic/theme/assets/layouts/layout/img/logo.png"
		  	 			alt="logo" className="logo-default" />
		  	</div>
		  	<button className="btn btn-default"> Hey you</button>
		  </div>
		)
	}
}