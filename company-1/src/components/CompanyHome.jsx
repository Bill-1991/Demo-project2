import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// CompanyHome: Render a grid of company items.
// Props: { company: { items: Array<{ name, img, linkName }> } }
export default function CompanyHome({ company }) {
  if (!company || !Array.isArray(company.items) || company.items.length === 0)
    return null;

  return (
    <Row className="company-items">
      {company.items.map((item, idx) => (
        <Col
          key={item && item.name ? item.name : `item-${idx}`}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          className="item-column"
        >
          <Link
            to={item && item.linkName ? item.linkName : "#"}
            className="company-item"
          >
            <Card>
              {item && item.img ? <Card.Img src={item.img} /> : null}
              <p>{item && item.name ? item.name : "Unnamed"}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
