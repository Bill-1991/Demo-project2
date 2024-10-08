import { Container, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ItemModal from './ItemModal'

function SearchItems({ searchItems, company, modalItem, showModal, handleShowModal, handleChosenItems, handleHideModal }) {
    return (
        <Container fluid className='searchItems'>
            {
                searchItems.map(item => 
                    <div key={ item.name } className="searchItem">
                        <h1 className='Title'>{item.name}</h1>
                        <img src={item.img} />
                        <Row>
                            {item.items.map(obj => 
                                <Col xs={12} sm={12} md={6} lg={4} key={obj.name} className='column'>
                                    <Card onClick={() => handleShowModal(obj)} className='item'>
                                    <p className='title'>{obj.name}</p>
                                    <div className='item-head'>
                                        <img src={obj.img} />
                                        <div className="body">
                                            <p className='desc'>{obj.desc}</p>
                                            <p className='price'>{obj.price + '€'}</p>
                                        </div>
                                    </div>
                                </Card>
                                </Col>)}
                        </Row>
                    </div>
                )
            }
            {showModal ?
             <ItemModal company={company} handleChosenItems={handleChosenItems} showModal={showModal} item={modalItem} handleHideModal={handleHideModal} />
              :
               undefined}
        </Container>
        
    )
}

export default SearchItems;