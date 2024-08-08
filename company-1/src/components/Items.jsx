/* eslint-disable react/prop-types */
import { Container, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ItemModal from './ItemModal'

function Items({ items, name, handleChosenItems, showModal, modalItem, handleShowModal, handleHideModal }) {
    
    return (
        <Container fluid id={`${name}`} className='items'>
            <h1 className='Title'>{name}</h1>
            <div className='outer-container'>
               {items.map(item => 
                    <div key={item.name} className='upper'>
                        <div className="head">
                            {items.length > 1 ? <h3 className='row-title'>{item.name}</h3> : undefined} 
                            <img src={item.img} />
                        </div>
                        
                        <Row className='inner-container'>
                            {item[item.name.toLowerCase()].map(obj => 
                            <Col xs={12} sm={12} md={6} lg={4} key={obj.name} className='column' >
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
                )}
            </div>
            
            {showModal ?
             <ItemModal handleChosenItems={handleChosenItems} showModal={showModal} item={modalItem} handleHideModal={handleHideModal} />
              : undefined}
        </Container>
    )
}

export default Items;