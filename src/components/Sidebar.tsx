import styles from './Sidebar.module.css'
import wallaper from '../images/wallpaper.jpg'
import user from '../images/bruno_user.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src={wallaper} 
            />

            <div className={styles.profile}>
                <Avatar src={user}/>
                <strong>Bruno A Amaral</strong>
                <span>Full-stack Programmer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size = {20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}