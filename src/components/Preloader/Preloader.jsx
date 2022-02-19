import style from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? 
                <div className={style.loaderBlock}>
                    <div className={style.loader}></div>
                </div>
            : null }
       </div>
    )}

export default Preloader;