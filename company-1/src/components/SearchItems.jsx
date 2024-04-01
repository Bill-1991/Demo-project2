import { Container, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ItemModal from './ItemModal'

function SearchItems({ searchItems, modalItem, showModal, handleShowModal, handleChosenItems, handleHideModal }) {
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
                                    <div className='item-head'>
                                        <img src={obj.img} />
                                        <p className='title'>{obj.name}</p>
                                    </div>
                                    <p className='desc'>{obj.desc}</p>
                                    <p className='price'>{obj.price + '€'}</p>
                                </Card>
                                </Col>)}
                        </Row>
                    </div>
                )
            }
            {showModal ?
             <ItemModal handleChosenItems={handleChosenItems} showModal={showModal} item={modalItem} handleHideModal={handleHideModal} />
              :
               undefined}
        </Container>
        
    )
}

export default SearchItems;