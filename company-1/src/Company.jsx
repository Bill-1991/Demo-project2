/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
// import { useURLID } from "../../src/functions"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/navbar'
import Items from './components/Items'
import Order from './components/Order'
import CompanyHome from './components/CompanyHome'
import SearchItems from './components/SearchItems'

function Company({ modalItem, showModal, handleShowModal, handleHideModal, searchBar, handleSearchState, handleSearchString, searchString, handleChangeItemRoute, searchItems, handleSearchItems, company, chosenItems, handleChosenItems, order, handleOrder, tableNum, handleCurTable, handleIncreaseItems, handleDecreaseItems, handleDeleteItem, sendOrder, handleSaveFile }) {
  let path = useLocation()
  
  return (
    
    <div id={company.name} className='company'>
        <NavBar path={path} handleChangeItemRoute={handleChangeItemRoute} handleSearchState={handleSearchState} handleSearchString={handleSearchString} searchBar={searchBar} handleSearchItems={handleSearchItems} searchString={searchString} company={company} items={company.items}  />
        
          <Routes>
          <Route exact path="/" element={ !searchString ? <CompanyHome company={company} /> : <SearchItems searchItems={searchItems} showModal={showModal} handleChosenItems={handleChosenItems} modalItem={modalItem} handleShowModal={handleShowModal} handleHideModal={handleHideModal}/>} />
          {
            company.items.map(item => 
              <Route key={item.name} exact path={`/${item.linkName}`} element={ !searchString && !order ? 
              <Items company={company} items={item[item.name]} name={item.name} chosenItems={chosenItems} handleChosenItems={handleChosenItems} modalItem={modalItem} showModal={showModal} handleShowModal={handleShowModal} handleHideModal={handleHideModal} /> 
              :
              !searchString && order ? undefined
              :
              searchString && order ? undefined
              :
              <SearchItems searchItems={searchItems} showModal={showModal} handleChosenItems={handleChosenItems} modalItem={modalItem} handleShowModal={handleShowModal} handleHideModal={handleHideModal} />
            } />
            )
          }
          </Routes>
        <Order company={company} chosenItems={chosenItems} order={order} handleOrder={handleOrder} tableNum={tableNum} handleCurTable={handleCurTable} handleDecreaseItems={handleDecreaseItems} handleIncreaseItems={handleIncreaseItems} handleDeleteItem={handleDeleteItem} sendOrder={sendOrder} handleSaveFile={handleSaveFile} />
    </div>
  )
}

export default Company
