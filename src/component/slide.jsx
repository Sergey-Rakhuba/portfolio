import React from 'react'
import projectImg from '../img/project-img.png'
import offerImg from '../img/offer-img.png'
import deadlineImg from '../img/deadline-img.png'
import agreementImg from '../img/agreement-img.png'
const slide = () => {
    return (
        <div>
            <div className="flex_row">
                <div className="flex_50">
                    <img className="img_project" src={projectImg} alt="" />
                </div>
                <div className="flex_50">
                    <h2 className="aling_left flex_element">Сайт строительной фирмы “Велстрой”</h2>
                    <div className="flex_row just_cont_sbw">
                        <div className="aling_left flex_row flex_auto" > 
                            <div className="icon_30">
                                <img src={offerImg} alt="" />
                            </div>    
                            <div className="aling_left">
                                <h3>Сроки</h3>
                                <p>4 рабочих дня</p>
                            </div>                            
                        </div>
                        <div className="aling_left flex_row flex_auto"> 
                            <div className="icon_30">
                                <img src={deadlineImg} alt="" />
                            </div>    
                            <div>
                                <h3>Стоимость</h3>
                                <p>14 000 рублей </p>
                            </div>
                        </div>
                        <div className="aling_left flex_row flex_auto icon_30 flex_no_wrap"> 
                            <div className="icon_30">
                                <img src={agreementImg} alt="" />
                            </div>    
                            <div>
                                <h3>Отзыв клиента</h3>
                                <p>Мне понравилось работать с Артемом, потому что он все время был на связи и предлагал свои решения, когда мы заходили в тупик с дизайном. Мне нужны были закрывающие документы для бухгалтерии, и Артем — тот редкий фрилансер, у которого с документами все в порядке</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default slide
