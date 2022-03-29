import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path ='/dialogs/' + props.id
  return (
    <div className={s.Dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
       <DialogItem name='Yan' id='1' />
       <DialogItem name='Yan' id='2' />
       <DialogItem name='Yan' id='3' />
       <DialogItem name='Yan' id='4' />
      </div>
      <div className={s.messages}>
        <Message message='hi'/>
        <Message message='hello'/>
        <Message message='no'/>
        <Message message='yes'/>
      </div>
    </div>
  )
}

export default Dialogs
