import {login} from "../../redux/auth-reducer";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import s from './LoginPage.module.scss';

export const LoginPage = () => {
    type FormikErrorType = {
        username?: string
        password?: string
    }
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.username) {
                errors.username = 'Required';
            }
            if (!values.password) {
                errors.password = 'Please enter your password'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values.username, values.password))
            formik.resetForm()
        },

    })
    if (isLoggedIn) {
        return <Navigate to={"/"}/>
    }

    return (
        <div className={s.page}>
            <h1>Авторизуйтесь в системе</h1>
            <form>
                <div>
                    <input className={s.input} placeholder={"Username"} {
                        ...formik.getFieldProps('username')}/>
                </div>
                <div>
                    <input className={s.input} placeholder={"Password"}
                           {...formik.getFieldProps('password')}/>
                </div>
            </form>
            <form onSubmit={formik.handleSubmit}>
            <button className={s.button} type={"submit"}>Войти</button>
            </form>
        </div>
    )
}