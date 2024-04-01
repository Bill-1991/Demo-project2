import React from "react";
import '../../../company-1/src/App.css';
import { Card } from "react-bootstrap";

function Order({ company, chosenItems, order, handleOrder, tableNum, handleCurTable, handleIncreaseItems, handleDecreaseItems, sendOrder, handleDeleteItem, handleSaveFile }) {
    let tables = []
    if (company.tables > 0)
    {
        for (let table = 1; table <= company.tables; table++)
        {
            tables.push(table)
        }
    }

    return (
            chosenItems.length > 0 && order === true ?
                <div id="order" className="order">
                    <button className="close" onClick={handleOrder}><p>X</p></button>
                    <div id="orderedItems" className="orderedItems">
                    {chosenItems.map(item => 
                        <div key={item.name} className="orderedItem">
                            <div className="stuff">
                                <Card.Img src={item.img}></Card.Img>
                                <p>{item.name}</p>
                            </div>
                            <div className="quantity">
                                <p onClick={() => handleDecreaseItems(item)}>-</p>
                                <p>{item.count}</p>
                                <p onClick={() => handleIncreaseItems(item)}>+</p>
                            </div>
                            <div className="final">
                                <p className="eachPrice">{item.price * item.count + "€"}</p>
                                <button className="delete" onClick={() => handleDeleteItem(item)}>Delete</button>
                            </div>    
                        </div>)}
                    </div>
                    <div className="tables">
                        {company.tables > 0 ? <p>Choose table:</p> : undefined}
                        <div className="allTables">{tables.map(table => <button key={table} onClick={() => handleCurTable(table)}>{table}</button>)}</div>
                        <button className="send" onClick={() => handleSaveFile(company)}>Send Order</button>
                    </div>
                </div> : 
                chosenItems.length > 0 && order === false ? 
                <button id="basket" className="basket" onClick={handleOrder}>
                    <p>{chosenItems.length}</p>
                </button> :
                undefined
    )
}

export default Order
