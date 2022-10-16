import React, { Component } from "react";
import "../styles/output.css"



class Skills extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isEdit: true,
            skill: "",
            proficiency: ""
        }
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
            (<div className="skill-form">
                <input type="text" onChange={this.handleChange} id="skill" placeholder="Skill" value={this.state.skill} />
                <input type="text" onChange={this.handleChange} id="proficiency" placeholder="Proficiency/ Description" value={this.state.proficiency} />
                <button id="save-btn" onClick={this.toggleEdit}>Save</button>
                <button id="delete-btn" data-skills={this.props.id} onClick={this.props.handleDelete}>Delete</button>
            </div>)
        : (<div className="skill output" onClick={this.toggleEdit}>
                <span className="skillset">{this.state.skill}</span>
                <span className="proficiency">{this.state.proficiency}</span>
            </div>
        )  
    }
}

export default Skills;