import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {register, reset} from '../features/auth/authSlice'
import {toast} from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import Spinner from '../components/Spinner'

const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()  
  const {user, message, isLoading, isError, isSuccess} = useSelector(
    (state) => state.auth
  ) 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        confirmPassword: ''
    })

    const { name, email, phone, password, confirmPassword } = formData

    const handlechange =(e) => {
      setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    useEffect( ()=>{
      if(isError){
        toast.error(message)
      }

      if(isSuccess || user){
        navigate('/')
      }

      dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    

    const onSubmit =(e) => {
      e.preventDefault()

      if(password !== confirmPassword){
        toast.error('passwords do not match')
      }
      else{
        const userData = 
        {name, email, phone, password}
        dispatch(register(userData))
      }
    }

    if(isLoading){
      return <Spinner />
    }

  return (
    <>
    <section className='heading'>
        <h1><FaUser /> Register</h1>
        <p>Please create an account</p>
    </section>

    <section className='form'>
       <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={handlechange} />

          <input type='email' className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={handlechange} />

          <input type='number' className='form-control'
            id='phone'
            name='phone'
            value={phone}
            placeholder='Enter your phone number'
            onChange={handlechange} />

          <input type='password' className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter your password'
            onChange={handlechange} />

          <input type='password' className='form-control'
            id='confirmPassword'
            name='confirmPassword'
            value={confirmPassword}
            placeholder='Confirm your password'
            onChange={handlechange} />
        </div> 
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
       </form>
    </section>
    </>
  )
}

export default Register