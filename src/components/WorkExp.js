import React, { Component } from "react";
import "../styles/output.css"


class WorkExp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isEdit: true,
            jobTitle: "",
            company: "",
            companyLocation: "",
            startDate: "", 
            endDate: "",
            jobDescription: "",
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
               (<div className="work-form">
                    <div className="name-input">
                        <input type="text" onChange={this.handleChange} id="company" placeholder="Company" value={this.state.company} />
                        <input type="text" onChange={this.handleChange} id="jobTitle" placeholder="Job Title" value={this.state.jobTitle} />
                    </div>
                    <div className="info-input">
                        <input type="date" onChange={this.handleChange} id="startDate" value={this.state.startDate} />
                        <input type="date" onChange={this.handleChange} id="endDate" disabled = {this.state.isPresent} value={this.state.endDate} />
                        <label htmlFor="isPresent">Current Job: 
                            <input type="checkbox" onChange={this.handleCheckbox} id="isPresent" checked={this.state.isPresent} />
                        </label>
                        <input type="text" onChange={this.handleChange} id="companyLocation" placeholder="Company Location" value={this.state.companyLocation} />
                    </div>
                    <label htmlFor="job-description">Job description: </label>
                        <textarea rows="8" col="33" onChange={this.handleChange} id="jobDescription" value={this.state.jobDescription} />

                    <div className="button">
                        <button id="save-btn" onClick={this.toggleEdit}>Save</button>
                        <button id="delete-btn" data-workExp={this.props.id} onClick={this.props.handleDelete}>Delete</button>
                    </div>
                </div>)
           : (<div className="work output" onClick={this.toggleEdit}>
                <div className="job-info">
                    <ul>
                        <li className="company">{this.state.company}</li> 
                        <li className="title">{this.state.jobTitle}</li>
                    </ul>
                    <div className="date-location">
                        <span>{this.state.startDate} - {this.state.isPresent ? "Present" : this.state.endDate}</span> 
                        <span>{this.state.companyLocation}</span>
                    </div>
                </div>
                <div className="job-des">
                    {this.state.jobDescription}
                </div>
            </div>
        )
    }
}

export default WorkExp;