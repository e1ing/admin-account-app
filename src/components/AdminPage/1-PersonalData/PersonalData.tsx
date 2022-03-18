import React from 'react';
import s from './PersonalData.module.scss'
import style from '../../../App/App.module.scss'
import {AppRootStateType} from "../../../redux/store";
import { useSelector } from 'react-redux';

export const PersonalData = () => {
//const avatar = useSelector<AppRootStateType, string>(state => state.user.photoId)

    return (
        <div className={style.container}>
            <h1>Личный кабинет системного администратора</h1>
            <div className={s.editPanel}>
                <h2>Персональные данные</h2>
                <button className={s.button}>🖉 Редактировать</button>
            </div>
            <div className={s.adminData}>
                <div className={s.imgStyle}>
                    <img/>
                </div>
                <div>
                    <div><span>ФИО </span> <span>ФИО</span> </div>
                    <div><span>Email </span><span>Email</span></div>
                </div>
            </div>
        </div>
    )
}