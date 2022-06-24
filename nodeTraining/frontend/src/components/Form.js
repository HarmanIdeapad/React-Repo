import React, { useState } from 'react'

export default function MultipleInputs() {
    const [userRegistration, setUserRegistration] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const [record, setRecord] = useState([])
    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUserRegistration({...userRegistration, [name] : value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newRecord = {...userRegistration, id: new Date().getDate().toString()}
        setRecord([...record, newRecord])
        console.log(record)
        setUserRegistration({username:'', email:'', phone:'', password:''})
    }
    return (
        <div className='container'>
            <div className='title'>Registration</div>
            <form onSubmit={handleSubmit} >
                <div className='user-details'>
                    {/* <div className='input-box'>
                        <label className='details'>Full Name:</label>
                        <input type="text" value= {userRegistration.username} onChange={handleInput} autoComplete="off" name="username" required/>
                    </div> */}
                    <div className='input-box'>
                        <label className='details'>Email:</label>
                        <input type="email" value= {userRegistration.email} onChange={handleInput} autoComplete="off" name="email" required/>
                    </div>
                    <div className='input-box'>
                        <label className='details'>Phone:</label>
                        <input type="text" value= {userRegistration.phone} onChange={handleInput} autoComplete="off" name="phone" required/>
                    </div>
                    <div className='input-box'>
                        <label className='details'>Password:</label>
                        <input type="password" value= {userRegistration.password} onChange={handleInput} autoComplete="off" name="password" required/>
                    </div>
                    <div className='input-box'>
                        <label className='details'>Confirm Password:</label>
                        <input type="password" value= {userRegistration.confirmPassword} onChange={handleInput} autoComplete="off" name="confirmPassword" required/>
                    </div>
                </div>
                <div className='gender-details'>
                    <label className='gender-title'>Gender</label>
                    <div className='category'>
                        <label htmlFor=''>
                            <span className='dot one'></span>
                            <span className='gender'>Male</span>
                        </label>
                        <label htmlFor=''>
                            <span className='dot one'></span>
                            <span className='gender'>Female</span>
                        </label>
                        <label htmlFor=''>
                            <span className='dot one'></span>
                            <span className='gender'>Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div className='button'>
                    <button type='submit'>Registration</button>
                </div>
            </form>
            <div>
                {
                    record.map( (currEle) => {
                        const {id, username, email, phone, password} = currEle
                        return (
                        <div className="showDataStyle" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{password}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

