import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from 'react-bootstrap';

export default class header extends Component{
	render(){
		return(
			<div>
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
				<div className="page-sidebar-wrapper" role="navigation">
					<div className="page-sidebar">    
						<ul className="page-sidebar-menu  page-header-fixed page-sidebar-menu-light " id="side-menu">
							<li className="sidebar-search-wrapper">
								<div className="sidebar-search">									
									<a href="javascript:;" className="remove">
										<i className="icon-close"></i>
									</a>
									<div className="input-group">
										<input type="text" className="search-input form-control" placeholder="Search..." />
											<span className="input-group-btn">
												<a href="javascript:;" className="btn btn-search">
													<i className="glyphicon glyphicon-search"></i>
												</a>
											</span>
									</div>
								</div>
              </li>
              <li className="nav-item">
								<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp;Dashboard</a>
							</li>
							<li className="nav-item"> 
								<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp;Tables</a>
							</li>
							<li className="nav-item"> 
								<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Forms</a> 
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}