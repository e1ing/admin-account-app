import React from 'react';
import s from './PersonalData.module.scss'

export const PersonalData = () => {

    return (
        <div>
            <h1>Личный кабинет системного администратора</h1>
            <div className={s.editPanel}>
                <h2>Персональные данные</h2>
                <button className={s.button}>🖉 Редактировать</button>
            </div>

            <div>
                Photo
            </div>
            <div>
               <span> ФИО </span>
               <span> Email </span>
            </div>
        </div>
    )
}