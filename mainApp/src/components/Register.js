import React, { Component } from 'react';

class Register extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			name: "",
			img: null,
			tag: [],
		}
		this.handleFileInput = this.handleFileInput.bind(this);
		this.handleNameInput = this.handleNameInput.bind(this);
		this.handleTagInput = this.handleTagInput.bind(this);
	}


	handleFileInput(event){
		let { target } = event;
		let nextState = {};
		nextState = {};
		nextState.img = target.files[0];

		this.setState((state)=>{
			return nextState;
		});
	}

	handleNameInput(event){
		let { target } = event;
		let nextState = {};
		nextState.name = target.value;

		this.setState((state)=>{
			return nextState;
		});
	}

	handleTagInput(event){
		let { target } = event;
		let { tag } = this.state;
		let nextState = {};
		nextState.tag = target.value;


		this.setState((state)=>{
			return nextState;
		})
	}


	render(){
		return (
			<div className="registerArea">
			    <div className="imgArea">
		            <img src="" id="previewImg"/>
		            <input type="file" name="img" className="fileInput" onChange={this.handleFileInput} />
		       	</div>

		       	<div className="formArea">
		            <input type="text" maxLength="10" className="nameInput" name="name" onChange={this.handleNameInput} />
		            <input type="text" className="tagInput" name="tag" onChange={this.handleTagInput} /><br/>
		            <input type="button" value="등록" id="submitBtn" />
		        </div>
		    </div> 
		);
	}
}



export default Register;
  		
    