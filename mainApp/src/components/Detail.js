import React, { Component } from 'react';

class Detail extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="detailArea">
		        <ul className="nameListArea">
		            <li className="userName" id="">
		       
		            </li>
		            <li id="addName" >
		                 더 보기
		            </li>
		        </ul>

		        <div className="userDetail">
		            <input type="hidden" id="userId" value=""/>
		            <div className="userDetailImg">
		              <img src="" />
		            </div>
		            <hr/>
		            <p className="userDetailName"></p>
		            <hr/>
		            <div className="userDetailTag">
		              <ul className="tagArea">
		                  <li className="tag">
		                  </li>
		              </ul>
		            </div>
		            <br/>
		            <br/>
		            <input type="button" value="삭제" className="deleteBtn" />
		        </div>

	      </div>
		)
	}
}

export default Detail;