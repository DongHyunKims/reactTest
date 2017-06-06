import React, { Component } from 'react';
import utility from '../utility/utility';
import config from '../utility/config';
import $ from 'jquery';

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
		let { MAX_SIZE } = config;
		let nextState = {};
		nextState = {};
		nextState.img = target.files[0];
		let file = nextState.img;

        let reader = new FileReader();
        let { size, type } = file;

        if(size > MAX_SIZE || !type.match("image")){
            alert("2MB 보다 작은 파일을 업로드 하거나 이미지 파일을 업로드 하세요.");
            $("#previewImg").attr("src",null);
            target.value = "";
            return;
        }

        reader.addEventListener("load",(event)=>{
            $("#previewImg").attr("src",reader.result);
        },false);

        if (file) {
            reader.readAsDataURL(file);
        }else{
            $("#previewImg").attr("src",null);
        }	

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

	handleSubmitBtn(event){
        let { state } = this;

        if(this.tagValidation(state.tag)){
            alert("tag는 최대 5개, 영어만 가능, 태그하나 당 최대 10글자입니다.");
            $(".tagInput").val("");
            return;
        }

        if(!state.img){
            alert("이미지를 넣어주세요.");
            return;
        }

        let formData = utility.createFormData(state);
        //utility.runAjaxData(reqListener,"POST",config.DEFAULT_URL + "/",formData);
	}

    tagValidation(tag){
    		let { REG_ALPHA, TAG_STR_MAX_LEN, TAG_MAX_LEN } = config;
            let tagArr = tag.split(",");

            if(tagArr.length > TAG_MAX_LEN) {
                return true;
            }
            let len = tagArr.filter((val)=>{
                return !REG_ALPHA.test(val) || val.length > TAG_STR_MAX_LEN || val === "";
            }).length;

            if(len){
                return true;
            }
            return false;
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
		            <input type="button" value="등록" id="submitBtn" onClick={this.handleSubmitBtn} />
		        </div>
		    </div> 
		);
	}
}



export default Register;
  		
    