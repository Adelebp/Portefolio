import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Cv.module.css';

export default function Cv() {
	return (
        <Container fluid className={styles.center}>
        <Row>
          <Col>
            <h3 className={styles.title_about}>Humain, Nature & Technologie </h3>
          </Col>
        </Row>
        </Container>
	);
}
