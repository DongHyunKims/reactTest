import React, { Component } from 'react';

class Register extends Component {
	
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div className="registerArea">
			    <div className="imgArea">
		            <img src="" id="previewImg"/>
		            <input type="file" name="imgFile" className="fileInput"/>

		       	</div>

		       	<div className="formArea">
		            <input type="text" maxLength="10" className="nameInput" name="nameText"/>
		            <input type="text" className="tagInput" name="tagText" /><br/>
		            <input type="button" value="등록" id="submitBtn" />
		        </div>
		    </div> 
		);
	}
}



export default Register;
  		
    