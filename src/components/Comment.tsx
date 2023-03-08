import style from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import user from '../images/bruno_user.jpg'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment (content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src={user}/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.autherAndTime}>
                            <strong>User_Name</strong>
                                <time title="data e hora" dateTime="date USA">
                                    Publicado hà 1 hora
                                </time>
                        </div>

                        <button onClick={handleDeleteComment} title= "Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}