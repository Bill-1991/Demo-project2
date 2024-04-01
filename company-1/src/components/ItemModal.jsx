import { Modal, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function ItemModal({ item, handleChosenItems, showModal, handleHideModal }) {
    return (
    <Card id='itemModal'>
        <Modal show={showModal} onHide={handleHideModal} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className="modalHeader" onClick={handleHideModal}>
                <Modal.Title id="contained-modal-title-vcenter" className="modalTitle">
                    {item.name}
                </Modal.Title>
            </Modal.Header>
            <div className='modalBody'>
                <img src={item.img} />
                <p className='desc'>{item.desc}</p>
            </div>
            <Modal.Footer className='modalFooter'>
                <p>{item.price + "€"}</p>
                <button onClick={() => handleChosenItems(item)} >Προσθήκη στο καλάθι</button>
            </Modal.Footer>
        </Modal>
    </Card>
    )
}

export default ItemModal