import React from 'react';
import Form from './form'
import InputComponent from './inputComponent'
import authService from '../services/authService';

class RegisterPage extends Form {
    state = {
        account: {
            email: '',
            name: '',
            password: ''
        },
        error: {
        }
    }

    validate = () => { 
        let error = {}
        if (this.state.account.email.trim() == "") {
            error.email = 'email is required'
        }
        if (this.state.account.name.trim() == "") {
            error.name = 'name is required'
        }
        if (this.state.account.password.trim() == "")
            error.password = 'password is required'
        return Object.keys(error).length == 0 ? "" : error
    }

    validateProperty = input => {

        if (input.name == "email") {
            if (input.value.trim() == "")
                return "email is required"
        }
        if (input.name == "name") {
            if (input.value.trim() == "")
                return "name is required"
        }
        if (input.name == "password") {
            if (input.value.trim() == "")
                return "password is required"
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const error = this.validate();
        this.setState({ error: error })
        if(error){
            console.log(error)
            return
        }
        
            // const {data:token} = await axios.post('http://localhost:5000/api/users',this.state.account)
            // console.log(token)
            // localStorage.setItem("token",token)
            authService.register(this.state.account)
            window.location= '/'
            // this.props.history.push('/')
        }

    render() {
        return (
            <div className='col-3 mx-auto my-5'>
                <h1 className='text-center'>Sign-up</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent title="E-mail" type="text" name="email" error={this.state.error.email} onChange={this.handleChange} />
                    <InputComponent title="name" type="text" name="name" error={this.state.error.name} onChange={this.handleChange} />
                    <InputComponent title="Password" type="password" name="password" error={this.state.error.password} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterPage;