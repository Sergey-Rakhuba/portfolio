import React from 'react'
import './body.css'
import logo from '../img/logo.png'
import textlogo from '../img/text-logo.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Soc from './soc'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import img
import img_person from '../img/hero-avatar.png'

import offerImg from '../img/offer-img.png'
import deadlineImg from '../img/deadline-img.png'
import agreementImg from '../img/agreement-img.png'
import stepsImg from '../img/steps-img.png'
import storageImg from '../img/storage-img.png'
import conversationImg from '../img/conversation-img.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slid from './slide'
const body = () => {
    return (
        <div className="body">
            <header>
                <div className="header">
                    <div className="logo flex_row">
                        <img src={logo} alt="Logo" />
                        <img src={textlogo} alt="textlogo" />
                    </div>
                    <div className="nav">
                        <Soc/>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <div className="flex_row">
                        <div className="aling_left flex_element item_first_768">
                            <h4>Фрилансер</h4>
                            <h1>Артем Исламов</h1>
                            <p>Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и верстку небольшого сайта или интернет-магазина</p>
                            <button>Бесплатная консультация</button>
                        </div>
                        <div className=" flex_element aling_right">
                            <img className="img_person" src={img_person} alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex_column">
                        <div>
                            <h2 className="aling_left flex_element">Со мной удобно работать</h2>
                        </div>
                        <div className="flex_row flex_block">
                            <div className="flex_element aling_left"> 
                                <img src={offerImg} alt="" />
                                <h3>По договору</h3>
                                <p>Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС.</p>
                            </div>
                            <div className="flex_element aling_left"> 
                                <img src={deadlineImg} alt="" />
                                <h3>Точно в срок</h3>
                                <p>В договоре прописана моя  ответственность за срок проекта. Если просрочу — плачу неустойку. </p>
                            </div>
                            <div className="flex_element aling_left"> 
                                <img src={agreementImg} alt="" />
                                <h3>Ценник под вас</h3>
                                <p>Если у вас нетиповой проект, сделаю рассчет цены за работу и объясню, как складывается цена. </p>
                            </div>
                            <div className="flex_element aling_left"> 
                                <img src={stepsImg} alt="" />
                                <h3>Премежуточные итоги</h3>
                                <p>Показываю работу поэтапно, а не в последий момент перед крайним сроком. </p>
                            </div>
                            <div className="flex_element aling_left"> 
                                <img src={storageImg} alt="" />
                                <h3>Хостинг и домен </h3>
                                <p>Если мы договорились о цене проекта, в неё входит всё: домен и хостинг на год + SSL сертификат.</p>
                            </div>
                            <div className="flex_element aling_left"> 
                                <img src={conversationImg} alt="" />
                                <h3>Не брошу после сдачи</h3>
                                <p>Научу вас или вашего сотрудника пользоваться сайтом, запишу видео-инструкции.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Последние проекты</h2>
                    </div>
                    <div>
                        <div className='slider' >
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                // navigation
                                pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <Slid/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slid/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slid/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slid/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slid/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slid/>
                                </SwiperSlide>
                                
                            </Swiper>
                            
                        </div>
                    </div>
                </section>
                
            </main>
            <footer>
                <h2>Свяжитесь со мной</h2>
                <div className="flex_row form_block">
                    <div className="item_50 item_form_block text-ctr">
                        <div className="flex_element flex_column item_form">
                            <h2 className="aling_left ">Можете просто оставить заявку, я позвоню вам сегодня</h2>
                            <form action="flex_column">
                                <input type="text" placeholder="Ваше имя" />
                                <input type="text" placeholder="Ваш номер телефона" />
                                <button>Бесплатная консультация</button>
                            </form>
                        </div>                        
                    </div>
                    <div className="flex_element flex_column just_cont_sbw">
                        <div className="flex_row just_cont_sbw">
                            <div className="flex_50">
                                <h3>Телефон</h3>
                                <p>+7 999 123 45 67</p>
                            </div>
                            <div className="flex_50">
                                <h3>Почта</h3>
                                <p>ivanov@mail.ru</p>
                            </div>
                            
                        </div>
                        <div className="flex_column">
                            <h3>Мои соцсети</h3>
                            <div className="flex_row">
                                <div className="">
                                    <a href="https://t.me/ivanov">t.me/ivanov</a>
                                </div>
                                <div className="">
                                    <a href="https://www.vk.me/ivanov">vk.me/ivanov</a>
                                </div>
                                <div className="">
                                    <a href="https://fb.me/ivanov">fb.me/ivanov</a>
                                </div>
                            </div>
                            
                        </div>
                        <Soc />
                        <div className="">
                            <a href="">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default body
