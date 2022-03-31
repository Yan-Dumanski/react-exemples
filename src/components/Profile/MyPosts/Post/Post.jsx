import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://cdnn21.img.ria.ru/images/07e5/0c/11/1764162382_0:265:3072:1993_1920x0_80_0_0_63fadbb271179d457de21a3b2c415a6c.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
