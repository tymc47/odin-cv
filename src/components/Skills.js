import React, { Component } from "react";

class Skills extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isEdit: true,
            skill: ""
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
            (<div className="skill-input">
                <input type="text" onChange={this.handleChange} id="skill" placeholder="Skill" value={this.state.skill} />
                <button id="save-btn" onClick={this.toggleEdit}>Save</button>
                <button id="delete-btn" data-skills={this.props.id} onClick={this.props.handleDelete}>Delete</button>
            </div>)
        : (<div className="skill-entry">
            <p>{this.state.skill}</p>
            <button id="edit-btn" onClick={this.toggleEdit}>Edit</button>
            </div>
        )  
    }
}

export default Skills;