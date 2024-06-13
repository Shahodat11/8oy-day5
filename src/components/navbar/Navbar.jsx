import React, {useState, memo} from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import logo from '../../assets/лого.svg'
import SearchSection from './SearchSection'
import { useGetSearchProductsQuery } from '../../context/productApi'

const Navbar = () => {
  // const [showSearch, setShowSearch] = useState(false)
  const [value, setValue] = useState("")
  let {data} = useGetSearchProductsQuery({q:value})
  return (
    <div className='container'>
      <div className="nav-links">
        <div className="item">
          <ul>
            <li>
              <a href="#">СЛАДКИЕ ДНИ</a>
            </li>
            <li>
              <a href="#">ПОДАРОЧНЫЕ НАБОРЫ</a>
            </li>
            <li>
              <a href="#">СОБРАТЬ НАБОР</a>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
        <div className="nav">
          <div className="navbar__search">
            <input 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            // onFocus={()=> setShowSearch(true)} 
            // onBlur={()=> setShowSearch(false)} 
            type="text" 
            placeholder='Search Product...' />        
            {
              value.trim() ?
              <SearchSection data={data?.products}/>
              :
              <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Navbar)