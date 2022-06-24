import React, { useState } from 'react'

export default function MultipleInputs() {
    const [userRegistration, setUserRegistration] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        // confirmPassword: ''
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
        <>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Registration</legend>
            <div class="form-group">
                <label for="username">Full Name</label>
                <input value= {userRegistration.username} onChange={handleInput} autoComplete="off" name="username" type="text" class="form-control" id="username" placeholder="Enter full name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input value= {userRegistration.email} onChange={handleInput} autoComplete="off" name="email" type="email" class="form-control" id="email" placeholder="Enter email" required/>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input value= {userRegistration.phone} onChange={handleInput} autoComplete="off" name="phone" type="text" class="form-control" id="phone" placeholder="Enter phone" required/>
            </div>
            <div class="form-group">
                <label for="email">Password</label>
                <input value= {userRegistration.password} onChange={handleInput} autoComplete="off" name="password" type="password" class="form-control" id="password" placeholder="Enter password" required/>
            </div>
            <button type="submit" class="btn btn-primary">Registration</button>
            </fieldset>
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
        </>
    )
}

