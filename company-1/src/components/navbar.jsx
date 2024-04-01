/* eslint-disable react/prop-types */
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import grFlag from '../assets/grflag.webp'
import enFlag from '../assets/enflag.jpg'
import search from '../assets/search.png'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function NavBar({ path, searchBar, handleSearchState, searchString, handleSearchString, items, company, handleChangeItemRoute }) {

    return (
    <Navbar>
        <div className="navbar">
            <div className="logo-search-bar">
                <div className="logo-bar">
                    <div className="lang">
                        <button className="greek"><img src={grFlag} /></button>
                        <button className="eng"><img src={enFlag} /></button>
                    </div>
                    <div className="logo">
                        <img loading='lazy' src={company.img} />
                    </div>
                    <div className="search-bar">
                        <button className='search' onClick={handleSearchState}>
                            <img loading='lazy' src={search} />
                        </button>
                    </div>
                </div>
                {
                    searchBar === true ?
                    <input name="search" value={searchString} type="text" placeholder="Search items" onChange={(e) => handleSearchString(e, company)} /> :
                    undefined
                }
            </div>
            { path.pathname !== `/${company.linkName}` ? 
            <div className='categories'>
            {
                items.map(item => 
                    <Link key={item.name} className='btn' to={`/${company.linkName}/${item.linkName}`}>
                        <button onClick={handleChangeItemRoute} >
                            <img loading='lazy' src={item.img} />
                            <p>{item.name}</p>
                        </button>
                    </Link>
                )
            }
            </div>
            :
            undefined
        }
        </div>
    </Navbar>
    )
  }
  
  export default NavBar
