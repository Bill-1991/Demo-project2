/* eslint-disable react/prop-types */
import './App.css'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'

function Home({ companies }) {
    
    return (
    <>
        <Row id="/" className="home">
            {companies.map(company =>
            <Col className= "all" xs={12} sm={6} md={4} lg={3} key={company.name}> 
            <Card>
                <Link className='link' reloadDocument to={`/${company.linkName}`}>
                    <img src={company.img} />
                </Link>
            </Card>
            </Col>
                )
            }
        </Row>
    </>
    )
  }
  
  export default Home