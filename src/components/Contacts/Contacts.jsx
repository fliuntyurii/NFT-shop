import style from './Contacts.module.css'

const Contacts = (props) => {
    return (
        <div className={style.block}>
            <a name='contacts'></a>
            <div className={style.contact}>
                <h3>Contacts</h3>
                <p>Ukraine, Lviv</p>
                <p>GitHub: <a href="https://github.com/fliuntyurii">click</a></p>
            </div>
        </div>
    )
}

export default Contacts;