import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor (props){
        super(props);
        this.state = {
            isEdit: true,
            firstName: "Abc",
            lastName: "Wood",
            email: "abcWood@gmail.com",
            phone: "+852-12345678",
            location: "Hong Kong"
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
               (<>
                    <input type="text" onChange={this.handleChange} id="firstName" placeholder="First Name" value={this.state.firstName} />
                    <input type="text" onChange={this.handleChange} id="lastName" placeholder="Last Name" value={this.state.lastName} />
                    <input type="email" onChange={this.handleChange} id="email" placeholder="Email" value={this.state.email} />
                    <input type="text" onChange={this.handleChange} id="phone" placeholder="Phone" value={this.state.phone} />
                    <input type="text" onChange={this.handleChange} id="location" placeholder="Location" value={this.state.location} />
                    <button id="save" onClick={this.toggleEdit}>Save</button>
                </>)
           : (<>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <p>Location: {this.state.location}</p>
                <button id="edit" onClick={this.toggleEdit}>Edit</button>
            </>
        )
    }
}

export default PersonalInfo;