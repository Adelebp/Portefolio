import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
// import styles from './Navbar.module.css';

const MyNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color='light' light expand='md'>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem>
							<NavLink href='/src/components/Home/Home.jsx'>Accueil</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/src/components/Cv/Cv.jsx'>
								Curriculum Vitae
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
