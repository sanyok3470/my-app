import style from './banner.module.css';
const Banner =()=>{
    return(
        <div className={style.banner_section}>
        <div className={style.banner}>
            <p className={style.text_banner}>
                Покупайте туры он-лайн
            <br/>
            <span>
                без комиссии!
            </span>
            <br/>
            <button className={style.banner_btn}>
            Оставить заявку
            </button>
          </p>

        </div>
    </div>
    )
}
export default Banner