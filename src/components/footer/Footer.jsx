import React from 'react'
import '../footer/footer.css'
import img1 from '../../assets/Frame.svg'
import img2 from '../../assets/Group 18.svg'
import img3 from '../../assets/Vector (3).svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
          <div className="footer__nav-links">
            <div className="footer__nav-link2">
              <div className="footer__nav-link1">
                <img className='footer__img' src={img1} alt="" />
                <h6>Готовим вручную и с любовью</h6>
              </div>
              <div className="footer__nav-link1">
                <img className='footer__img' src={img2} alt="" />
                <h6>Доставим в день заказа</h6>
              </div>
              <div className="footer__nav-link1">
                <img className='footer__img' src={img3} alt="" />
                <h6>100%  миндальная мука и натуральные ингредиенты</h6>
              </div>
            </div>
            <div className="footer__nav-link">
              <h3>Информация</h3>
              <h5>О компании Гарантии</h5>
              <h5>вкуса и свежести</h5>
              <h5>Доставка и оплата</h5>
              <h5>Контакты</h5>
            </div>
            <div className="footer__nav-link3">
              <h3>Каталог</h3>
              <h5>Каталог десертов</h5>
              <h5>Готовые наборы</h5>
              <h5>Собрать свой набор</h5>
              <h5>Наборы с печатью</h5>
              <h5>Свадебные предложения</h5>
              <h5>Акции</h5>
            </div>
            <div className="footer__nav-link">
              <h3>ДЛЯ БИЗНЕСА</h3>
              <h5>Корпоративные подарки</h5>
              <h5>Для юридических лиц</h5>
              <h5>Оповикам</h5>
            </div>
            <div className="footer__nav-link">
              <h3>+7 (812) 309 82 88</h3>
              <h5>с 9:00 до 21:00</h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer