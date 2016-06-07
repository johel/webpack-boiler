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
				<div className="body-wrapper">

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
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Visão Geral</a>
								</li>
								<li className="nav-item"> 
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Usuários Ativos</a>
								</li>
								<li className="nav-item"> 
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; eAgentes</a> 
								</li>
								<li className="nav-item"> 
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Transação eAgentes</a> 
								</li>
								<li className="nav-item"> 
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Categorias</a> 
								</li>
								<li className="nav-item"> 
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Frequência</a> 
								</li>
								<li className="nav-item"> 
									<a href=""><i className="glyphicon glyphicon-search"></i> &nbsp; Parametrização</a> 
								</li>
							</ul>
						</div>
					</div>

					<div className="content-wrapper">

						<div className="container-fluid">
							<hr/>
							<div className="row">

								<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
									<div className="dashboard-stat2 ">
										<div className="display">
											<div className="number">
												<h3 className="font-green-sharp">
													<small className="font-green-sharp">R$</small>
													<span data-counter="counterup" data-value="7800">7800</span>
												</h3>
												<small>TOTAL PROFIT</small>
											</div>
											<div className="icon">
												<i className="icon-pie-chart"></i>
											</div>
										</div>
										<div className="progress-info">
											<div className="progress">
												<span style={ {width: '76%'} } className="progress-bar progress-bar-success green-sharp">
													<span className="sr-only">76% progress</span>
												</span>
											</div>
											<div className="status">
												<div className="status-title"> progress </div>
												<div className="status-number"> 76% </div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
									<div className="dashboard-stat2 ">
										<div className="display">
											<div className="number">
												<h3 className="font-green-sharp">
												<span data-counter="counterup" data-value="7800">7800</span>
												<small className="font-green-sharp">$</small>
												</h3>
												<small>TOTAL PROFIT</small>
											</div>
											<div className="icon">
												<i className="icon-pie-chart"></i>
											</div>
										</div>
										<div className="progress-info">
											<div className="progress">
												<span style={ {width: '76%'} } className="progress-bar progress-bar-success green-sharp">
													<span className="sr-only">76% progress</span>
												</span>
											</div>
											<div className="status">
												<div className="status-title"> progress </div>
												<div className="status-number"> 76% </div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						<h1>Era uma vez</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula nibh, semper eu 
						fermentum vitae, vulputate eu ipsum. Morbi sit amet pharetra mauris, ac imperdiet metus.
						Vestibulum at metus tortor. Nulla a lacus tempus, semper erat vitae, consequat mi. 
						Vestibulum tincidunt quis augue sed pretium. Vestibulum vitae pulvinar tortor.
						Nunc faucibus tristique erat vel commodo. Pellentesque elementum condimentum tortor, 
						elementum vestibulum magna tristique at. Proin sit amet tincidunt leo. Nunc suscipit, 
						diam non finibus euismod, tellus libero accumsan purus, sagittis sollicitudin nulla enim non quam. 
						Phasellus tempus sed orci in aliquam. Proin sagittis lectus in metus elementum, a elementum massa efficitur.
						In at diam mauris. Fusce sed sagittis neque. Proin neque mi, vulputate facilisis pellentesque in, 
						sollicitudin vel velit.
						</p>
						<h1>Era uma outra vez</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula nibh, semper eu 
						fermentum vitae, vulputate eu ipsum. Morbi sit amet pharetra mauris, ac imperdiet metus.
						Vestibulum at metus tortor. Nulla a lacus tempus, semper erat vitae, consequat mi. 
						Vestibulum tincidunt quis augue sed pretium. Vestibulum vitae pulvinar tortor.
						Nunc faucibus tristique erat vel commodo. Pellentesque elementum condimentum tortor, 
						elementum vestibulum magna tristique at. Proin sit amet tincidunt leo. Nunc suscipit, 
						diam non finibus euismod, tellus libero accumsan purus, sagittis sollicitudin nulla enim non quam. 
						Phasellus tempus sed orci in aliquam. Proin sagittis lectus in metus elementum, a elementum massa efficitur.
						In at diam mauris. Fusce sed sagittis neque. Proin neque mi, vulputate facilisis pellentesque in, 
						sollicitudin vel velit.
						</p>
					</div>


				</div>

			</div>
		)
	}
}