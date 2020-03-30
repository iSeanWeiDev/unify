import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header/Header';
import SidebarComponent from './Sidebar/SidebarComponent';
import SidebarContent from './Sidebar/SidebarContent';
const AppLayout = (props) => {
	const mql = window.matchMedia(`(min-width: 800px)`);
	return (
		<div className="layout">
			<Header />
			<Container>
				<div id="page-wrap">
					{mql.matches ? <SidebarContent /> : <SidebarComponent />}
					<div style={{}} className="page-content">
						{props.children}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default AppLayout;