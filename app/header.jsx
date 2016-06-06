import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from 'react-bootstrap';

export default class header extends Component{
	render(){
		return(
			<div className="page-header">
				<div className = "page-logo">
					<img className="nav-logo" src="http://www.keenthemes.com/preview/metronic/theme/assets/layouts/layout/img/logo.png"
						alt="logo"/>
				</div>


					<ul className="nav navbar-top-links navbar-right">	
						<NavDropdown title={<div><i className="glyphicon glyphicon-user"></i> &nbsp;</div>} >
							<MenuItem eventKey="1">
								<a href="">
									<i className="glyphicon glyphicon-user"></i>{" "} User Profile
								</a>
							</MenuItem> 
							<MenuItem eventKey="2">
								<a href="">
									<i className="glyphicon glyphicon-cog"></i>{" "} Settings
								</a>
							</MenuItem> 
							<MenuItem eventKey="3">
								<a href="">
									<i className="glyphicon glyphicon-off"></i>{" "} Logout
								</a>
							</MenuItem>
						</NavDropdown>
				</ul> 
			</div>
		)
	}
}