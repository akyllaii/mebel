import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link,useLocation} from 'react-router-dom'
import formImg from '../../assets/form.png'
import {TfiEmail} from 'react-icons/tfi'
import {BiUser} from 'react-icons/bi'
import {RiUser3Fill} from 'react-icons/ri'
import {BsTelephone} from 'react-icons/bs'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import InputMask from 'react-input-mask'
import {useForm} from "react-hook-form";
import {CustomContext} from "../../config/context/context";

const Form = () => {
    const [passwordView, setPasswordView] = useState(false)

    const {registerUser,loginUser} = useContext(CustomContext)

    const password = useRef()
    const location = useLocation()
    const {
        register,
        handleSubmit,
        formState : {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    })
    password.current = watch("password")


    const submitForm = (data) => {
        let {confirmPwd, ...user} = data


        if (location.pathname === '/login') {
            loginUser(user)
        } else {
            registerUser(user)
            console.log(user)
        }
    }

    return (
        <div className='form'>
            <div className="form__left">
                <p ref={password} className='form__logo'>Your Logo</p>
                <form onSubmit={handleSubmit(submitForm)} noValidate className="form__content">
                    <h2 className="form__content-title">
                        {
                            location.pathname === '/login' ? 'Sign in' : 'Sign up'
                        }
                    </h2>
                    <p className="form__content-text">
                        {
                            location.pathname === '/login' ? 'If you don’t have an account register' : 'If you already have an account register'
                        } <br/>
                        You can   <Link to='/register'>
                        {
                            location.pathname === '/login' ? 'Register here !' : 'Login here !'
                        } </Link>
                    </p>
                    <label className="form__label">
                        <span className="form__label-text">Email</span>
                        <div className="form__label-field">
                            <span className="form__label-icon"><TfiEmail/></span>
                            <input {...register('email',{
                                required: {
                                    message: 'Email обязателен к заполнению',
                                    value: true
                                },
                                minLength: {
                                    message: 'Минимум 10 символов',
                                    value: 10
                                },
                                pattern: {
                                    message: 'Напишите правильно свой email',
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                }
                            })} placeholder='Enter your email address' type="email" className="form__label-inp"/>
                        </div>
                        <p className="form__label-error">
                            {
                                errors.email && errors.email?.message
                            }
                        </p>
                    </label>
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Name</span>
                            <div className="form__label-field">
                                <span className="form__label-icon"><BiUser/></span>
                                <input {...register('name',{
                                    required: {
                                        message: 'Имя обязательно к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        message: 'Минимум 2 символа',
                                        value: 2
                                    },
                                    pattern: {
                                        message: 'Напишите правильно свое имя',
                                        value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                    }
                                })} placeholder='Enter your name' type="text" className="form__label-inp"/>
                            </div>
                            <p className="form__label-error">
                                {
                                    errors.name && errors.name?.message
                                }
                            </p>
                        </label>
                    }
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Surname</span>
                            <div className="form__label-field">
                                <span className="form__label-icon"><RiUser3Fill/></span>
                                <input {...register('surname',{
                                    required: {
                                        message: 'Фамилия обязательно к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        message: 'Минимум 2 символа',
                                        value: 2
                                    },
                                    pattern: {
                                        message: 'Напишите правильно свою фамилию',
                                        value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                    }
                                })} placeholder='Enter your surname' type="text" className="form__label-inp"/>
                            </div>
                            <p className="form__label-error">
                                {
                                    errors.surname && errors.surname?.message
                                }
                            </p>
                        </label>
                    }
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Phone</span>
                            <div className="form__label-field">
                                <span className="form__label-icon"><BsTelephone/></span>
                                <InputMask mask={`+\\9\\96(999)99-99-99`} {...register('phone',{
                                    required: {
                                        message: 'Номер телефона обязателен к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        message: 'Минимум 2 символа',
                                        value: 2
                                    },
                                    pattern: {
                                        message: 'Напишите правильно свой номер телефона',
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/
                                    }
                                })} placeholder='Enter your phone' type="tel" className="form__label-inp"/>
                            </div>
                            <p className="form__label-error">
                                {
                                    errors.phone && errors.phone?.message
                                }
                            </p>
                        </label>
                    }
                    <label className="form__label">
                        <span className="form__label-text">Password</span>
                        <div className="form__label-field">
                            <span
                                onClick={() => setPasswordView(prev => !prev)}
                                className="form__label-icon">
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                            <input {...register('password',{
                                required: {
                                    message: 'Пароль обязателен к заполнению',
                                    value: true
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                }
                            })} placeholder='Enter your password' type={passwordView ? "text" : "password"} className="form__label-inp"/>
                        </div>
                        <p className="form__label-error">
                            {
                                errors.password && errors.password?.message
                            }
                        </p>
                    </label>
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text"> Confirm password</span>
                            <div className="form__label-field">
                                {/*<span*/}
                                {/*    onClick={() => setPasswordView(prev => !prev)}*/}
                                {/*    className="form__label-icon">*/}
                                {/*    {*/}
                                {/*        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>*/}
                                {/*    }*/}
                                {/*</span>*/}
                                <input {...register('confirmPwd',{
                                    validate: value =>
                                        value === password.current || 'The password do not match'
                                })} placeholder='Enter your password again' type={passwordView ? "text" : "password"} className="form__label-inp"/>
                            </div>
                            <p className="form__label-error">
                                {
                                    errors.confirmPwd && errors.confirmPwd?.message
                                }
                            </p>
                        </label>
                    }
                    <button type='submit' className="form__btn">Login</button>
                </form>
            </div>
            <div className="form__right">
                <img src={formImg} alt="" className="form__right-img"/>
                <h2 className="form__right-title">Sign in to name</h2>
                <p className="form__right-text">Lorem Ipsum is simply </p>
            </div>
        </div>
    );
};

export default Form;