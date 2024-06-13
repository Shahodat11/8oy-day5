import React from 'react'
import '../header/header.css'
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineShopping } from "react-icons/ai";

function Header() {
  return (
    <div className="headers">
        <div className='container'>
        <div className="header">
            <ul>
                <li>
                    <a href="#">Гарантия свежести</a>
                </li>
                <li>
                    <a href="#">Доставка и оплата</a>
                </li>
                <li>
                    <a href="#">Оптовые поставки</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
                <li>
                    <SlScreenSmartphone />
                    8 812 309-82-88
                </li>
                <li>
                    <AiOutlineShopping />
                    В корзине (4 товара)
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Header