import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Collapse, Navbar, Nav, NavLink } from 'reactstrap';
import styles from './Navbar.module.css';

const MyNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className={styles.body}>
			<Navbar color='light' light expand='md'>
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavLink href='/src/components/Home/Home.jsx'>Accueil</NavLink>

						<NavLink className={styles.cv} href='/src/components/Cv/Cv.jsx'>
							Curriculum Vitae
						</NavLink>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
