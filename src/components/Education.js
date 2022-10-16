import React, { Component } from "react";
import "../styles/output.css"



class Education extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isEdit: true,
            courseName: "",
            schoolName: "",
            schoolLocation: "",
            startDate: "", 
            endDate: "",
            isPresent: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleCheckbox(event){
        this.setState({isPresent: event.target.checked})
    }

    toggleEdit(){
        this.setState({isEdit: this.state.isEdit ? false : true})
    }

    render(){
        return this.state.isEdit ?
               (<div className="edu-form">
                    <div className="name-input">
                        <input type="text" onChange={this.handleChange} id="schoolName" placeholder="School Name" value={this.state.schoolName} />
                        <input type="text" onChange={this.handleChange} id="courseName" placeholder="Program Name" value={this.state.courseName} />
                    </div>
                    <div className="info-input">
                        <input type="date" onChange={this.handleChange} id="startDate" value={this.state.startDate} />
                        <input type="date" onChange={this.handleChange} id="endDate" disabled = {this.state.isPresent} value={this.state.endDate} />
                        <label htmlFor="isPresent">Current Education: 
                            <input type="checkbox" onChange={this.handleCheckbox} id="isPresent" checked={this.state.isPresent} />
                        
                        </label>
                        <input type="text" onChange={this.handleChange} id="schoolLocation" placeholder="School Location" value={this.state.schoolLocation} />
                    </div>
                    <div className="button">
                        <button id="save-btn" onClick={this.toggleEdit}>Save</button>
                        <button id="delete-btn" data-education={this.props.id} onClick={this.props.handleDelete}>Delete</button>
                    </div>
                </div>)
           : (<div className="education output" onClick={this.toggleEdit}>
                <ul>
                    <li className="school-name">{this.state.schoolName}</li> 
                    <li className="program">{this.state.courseName}</li>
                </ul>
                <div className="date-location">
                    <span>{this.state.startDate} - {this.state.isPresent ? "Present" : this.state.endDate}</span> 
                    <span>{this.state.schoolLocation}</span>
                </div>
            </div>
        )
    }
}

export default Education;