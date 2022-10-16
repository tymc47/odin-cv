import React, { Component } from "react";
import "../styles/output.css"
import "../styles/input.css"

class PersonalInfo extends Component {
    constructor (props){
        super(props);
        this.state = {
            isEdit: true,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    toggleEdit(){
        this.setState({isEdit: this.state.isEdit ? false : true})
    }

    render(){
        return this.state.isEdit ?
               (<div className="info input">
                    <h1>Personal Information</h1>
                    <div className="personal-form">
                        <div className="name-input">
                            <input type="text" onChange={this.handleChange} id="firstName" placeholder="First Name" value={this.state.firstName} />
                            <input type="text" onChange={this.handleChange} id="lastName" placeholder="Last Name" value={this.state.lastName} />
                        </div>
                        <div className="info-input">
                            <input type="email" onChange={this.handleChange} id="email" placeholder="Email" value={this.state.email} />
                            <input type="text" onChange={this.handleChange} id="phone" placeholder="Phone" value={this.state.phone} />
                            <input type="text" onChange={this.handleChange} id="location" placeholder="Location" value={this.state.location} />
                        </div>
                    </div>
                    <button id="save" onClick={this.toggleEdit}>Save</button>
                </div>)
           : (<div className="info output" onClick={this.toggleEdit}>

                    <ul className="name">
                        <li className="first-name">{this.state.firstName}</li>
                        <li className="first-name">{this.state.lastName}</li>
                    </ul>
                    <table className="info-list">
                        <tr><td>Email </td><td>{this.state.email}</td></tr>
                        <tr><td>Phone </td><td>{this.state.phone}</td></tr>
                        <tr><td>Location </td><td>{this.state.location}</td></tr>                       
                    </table>
                
            </div>
        )
    }
}

export default PersonalInfo;