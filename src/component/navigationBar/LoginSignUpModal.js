import Modal from "antd/lib/modal/Modal";
import {Input, Button} from 'antd';
import './LoginSignUpModal.css';
import { useState } from "react";
import axios from "axios";

function LoginSignUpModal(props){
  const[enteredEmail, setEnteredEmail] = useState('');
  const[inputPassword, setInputPassword] = useState('');

  const changedEmail= (event) =>{
    setEnteredEmail(event.target.value);
  };

  const changedPassword=(event) =>{
    setInputPassword(event.target.value);
  }

  const onOk = async () =>{
    var email = enteredEmail;
    var password = inputPassword;
    var data = JSON.stringify({
      userName: email,
      password: password
    });
    let response=await axios.post("https://localhost:44334/api/Shopper/LoginCheck", data,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(response.data){
      props.handleSuccess()
    }
    console.log(response);
  };


    return(
        <Modal visible={props.visible} onCancel={props.onCancel} onOk={onOk} title="Login"
        footer={[<p className="LoginPara">
          <Button key="back" onClick={props.onCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" id="submitButton" onClick={onOk}>
              Submit
            </Button>,
        </p>,
            
          ]}>

            <form>
                <label htmlFor='email'>E-Mail</label>
                <Input type='text' id="email" onChange={changedEmail} name="email"/>
                <label htmlFor='password'>Password</label>
                <Input type='password' id="loginPassword" onChange={changedPassword} name="loginPassword"/>
                <p className="LoginPara"><a>Not a user? Sign up</a></p>
            </form>
        </Modal>
    );
}

export default LoginSignUpModal;