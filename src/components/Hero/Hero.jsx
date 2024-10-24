import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
   <>
  <header className="header">
    <div className="container">
      <div className="wrapper">
        <div className="offer">
          <h1>С помощью верстки<br /> я создам ту жизнь, о которой <br /> <span>мечтаю!</span></h1>
          <p>Мои стремления + настойчивость позволят мне достичь чего угодно. Я не верю в это. Я знаю это на 100%. Меня не остановить!</p>
        <a className='btn' href=""> Двигаться к мечте!</a>
        </div>
        <img src="/main.png" alt="" className="main_img" />
      </div>
    </div>
  </header>
	<section class="learn">
		<div class="container">
			<h2>Что меня ждет впереди</h2>
			<div class="wrapper">
				<div class="block">
          <img src="/icon1.png" alt="" />
					<h3>Свободное время</h3>
					<p>Мне нужно свободное время на семью и самое настоящее</p>
				</div>
				<div class="block">
          <img src="/icon2.png" alt="" />
					<h3>Яркие путешествия</h3>
					<p>Работать откуда угодно - что может быть лучше?</p>
				</div>
				<div class="block">
          <img src="/icon3.png" alt="" />
					<h3>Создание ценности</h3>
					<p>Нет ничего сильнее, чем жить не просто так, создавая ценность</p>
				</div>
			</div>
		</div>
	</section>
  <section className="future">
    <div className="container">
      <h2>Форма заказа билета в будущее</h2>
      <div className="form">
        <form action="#" className="forma">
          <input type="text" name="name" id="" placeholder='Имя' required />
          <input type="email" name="email" id="" placeholder='E-mail' required />
          <input type="tel" name="phone" id="" placeholder='Телефон' required />
          <input type="text" name="travel" id="" placeholder='Куда я полечу в ближайшее время?' required />
          <button className='btn-1'>Двигаться к мечте!</button>

        </form>
      </div>
    </div>
  </section>

   
   </>
  )
}

export default Hero