import React from 'react';

const ProgressStat = () => {
	return(
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
	)
}

export default ProgressStat