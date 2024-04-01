import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home'
import Company from '../company-1/src/Company'
import { saveAs } from 'file-saver'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [chosenItems, setChosenItems] = useState([])
  const [order, setOrder] = useState(false)
  const [tableNum, setTableNum] = useState(0)
  const [searchItems, setSearchItems] = useState([])
  const [searchBar, setSearchBar] = useState(false)
  const [searchString, setSearchString] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalItem, setModalItem] = useState({})

  useEffect(function () {
    async function fetchData() {

      try{
      const res = await fetch("http://companies-co8z.onrender.com/companies");
      const getData = await res.json();
      setData(getData);
      setLoading(false);   
      }
      catch (error) 
      { 
        console.log(error);
      }
    }
    fetchData();
  }, []); 

  console.log(data)

  const handleSaveFile = (company) => {
    let log = ""
    chosenItems.map(item => {
      log += item.count + "x "
      log += item.name + " "
      log += "\n"
    })
    const file = new Blob([`${company.name}\n\nOrder No: ${company.orderNum}\n\n${log}\n\nTable: ${tableNum}`],
     { type: 'text/plain;charset=utf-8' });
    saveAs(file, `${company.name} order No ${company.orderNum}`);
  }

  const handleShowModal = (item) => {
    setShowModal(true)
    setModalItem(item)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  const handleSearchState = () => {
    searchBar === false ? setSearchBar(true) : setSearchBar(false)
  }

  const handleSearchString = (e, company) => {
    e.preventDefault()
    setSearchString(e.target.value)
    handleSearchItems(e.target.value, company)
  }

  const handleChangeItemRoute = () => {
    setSearchString("")
  }

  const handleChosenItems = (item) => {
    if (item.count === 0) {
      item.count++
      setChosenItems([...chosenItems, item])
    }
    if (!chosenItems.length) setOrder(false) 
  }

  const handleOrder = () => {
    order === false ? setOrder(true) : setOrder(false)
  }

  const handleCurTable = (table) => {
    setTableNum(table)
  }

  const handleIncreaseItems = (item) => {
    let items = []
    chosenItems.map(obj => {
      if (obj.name === item.name)
      {
        obj.count++
      }
      items.push(obj)
    })
    setChosenItems(items)
  }

  const handleDecreaseItems = (item) => {
    let items = []
    chosenItems.map(obj => {
      if (obj.name === item.name)
      {
        if (obj.count > 1)
        {
          obj.count--
        }
      }
      items.push(obj)
    })
    setChosenItems(items)
  }

  const handleDelete = (item) => {
    let filteredItems = []
    item.count = 0
    chosenItems.map(obj => {
      if (obj.name !== item.name)
      {
        filteredItems.push(obj)
      }
    })
    setChosenItems(filteredItems)
  }

  const sendOrder = () => {
    console.log("Ready")
  }

  function handleSearchItems(query, company) {
    let wholeSearchedItems = []
    company.items.map(item => {
      let wholeSearchedItem;
      let searchedItems = [];
      item[item.name].map(obj => {
        obj[obj.name.toLowerCase()].map(name => {
          if (name.name.toLowerCase().startsWith(query) && query) {
            searchedItems.push(name)
          };
        });
        if (searchedItems.length) {
          wholeSearchedItem = {
            name: obj.name,
            img: obj.img,
            items: searchedItems
          };
          wholeSearchedItems.push(wholeSearchedItem)
        };
      });
    });
    setSearchItems(wholeSearchedItems)
  }
    
  if (loading) return <div className="loading"><p>Loading...</p></div>
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Home companies={data} />} />
          {
            data.map(company => 
              <Route key={company.name} exact path={`${company.linkName}/*`} element={<Company searchBar={searchBar} modalItem={modalItem} handleSearchState={handleSearchState} handleSearchItems={handleSearchItems} handleSearchString={handleSearchString} searchString={searchString} handleChangeItemRoute={handleChangeItemRoute} handleSaveFile={handleSaveFile} company={company} searchItems={searchItems} chosenItems={chosenItems} handleChosenItems={handleChosenItems} order={order} handleOrder={handleOrder} tableNum={tableNum} handleCurTable={handleCurTable} handleDecreaseItems={handleDecreaseItems} handleIncreaseItems={handleIncreaseItems} handleDeleteItem={handleDelete} sendOrder={sendOrder} showModal={showModal} handleShowModal={handleShowModal} handleHideModal={handleHideModal} />} />
            )
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
