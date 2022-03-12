import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {PersonalData} from "./1-PersonalData/PersonalData";
import {AppRootStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

export const AdminPage = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
   /* useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])
*/
    if(!isLoggedIn){
        return <Navigate to={"/login"}/>
    }

    return (
        <>
            <PersonalData/>
        </>
    );
}
