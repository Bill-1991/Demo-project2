import "./App.css";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

function Home({ companies }) {
  return (
    <>
      <Row id="/" className="home">
        {companies.map((company) => (
          <Row key={company.name}>
            <Col className="all" xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Link
                  className="link"
                  reloadDocument
                  to={`/${company.linkName}`}
                >
                  <img src={company.img} />
                </Link>
              </Card>
            </Col>
          </Row>
        ))}
      </Row>
    </>
  );
}

export default Home;
