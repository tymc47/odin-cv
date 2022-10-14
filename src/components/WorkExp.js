import React, { Component } from "react";

class WorkExp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isEdit: true,
            jobTitle: "Summer Intern",
            company: "BNP Paribas",
            companyLocation: "Hong Kong",
            startDate: "2016-10-30", 
            endDate: "2022-10-30",
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
               (<div className="edu-input">
                    <input type="text" onChange={this.handleChange} id="jobTitle" placeholder="Job Title" value={this.state.jobTitle} />
                    <input type="text" onChange={this.handleChange} id="company" placeholder="Company" value={this.state.company} />
                    <input type="text" onChange={this.handleChange} id="companyLocation" placeholder="Company Location" value={this.state.companyLocation} />
                    <input type="date" onChange={this.handleChange} id="startDate" value={this.state.startDate} />
                    <input type="date" onChange={this.handleChange} id="endDate" disabled = {this.state.isPresent} value={this.state.endDate} />
                    <label htmlFor="isPresent">Current Job: </label>
                    <input type="checkbox" onChange={this.handleCheckbox} id="isPresent" checked={this.state.isPresent} />
                    <button id="save-btn" onClick={this.toggleEdit}>Save</button>
                    <button id="delete-btn" data-entry={this.props.id} onClick={this.props.handleDelete}>Delete</button>
                </div>)
           : (<div className="edu-entry">
                <p>{this.state.jobTitle}</p>
                <p>{this.state.company}</p> 
                <p>{this.state.companyLocation}</p>
                <p>{this.state.startDate} - {this.state.isPresent ? "Present" : this.state.endDate}</p>
                <button id="edit-btn" onClick={this.toggleEdit}>Edit</button>
            </div>
        )
    }
}

export default WorkExp;