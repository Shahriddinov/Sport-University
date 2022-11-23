import React, {useEffect, useReducer, useState} from 'react';
import LoginImg from "../../assets/images/loginImg.svg"
import Logo from "../../assets/images/logo.svg"
import EmailIcon from '@mui/icons-material/Email';
import Google from "../../assets/images/google.svg"
import Button from '@mui/material/Button';
import "./style.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {Link} from "react-router-dom";
import axios from "axios";
// import reducers from "../../modules/entity/reducers";
import {useNavigate} from "react-router-dom";

const ACTIONS = {
    USER_ADD: "user_add"
};

function reduser(state, action) {
    switch (action.type) {
        case ACTIONS.USER_ADD:
            state = {
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.value
                }
            };
            break;
    }
    return state;
}

const LoginIn = () => {

    const [text, setText] = useState('');
    const navigate = useNavigate();
    const onClick = () => {
        // setTimeout(() => {
        //     navigate("/userInfo");
        // }, 10);
    };
    const [id, setId] = useState('');

    const initialUser = {
        id: '',
        pnfl: "",
        pasport_seria: "",
        pasport_seria_code: ""
    };
    const [state, dispatch] = useReducer(reduser, {user: initialUser});

    function getInputValues(e) {
        dispatch({
            type: ACTIONS.USER_ADD,
            payload: {
                key: e.target.name,
                value: e.target.value
            }

        });

    }

    async function addUser() {
        axios.post("https://micros-test.w.wschool.uz/public/api/pasport", state.user).then((response) => {
            console.log(response.data)
            if (response.data.status === 'success') {
                localStorage.setItem('userId', response.data.pasport.id)
                localStorage.setItem('pnfl', response.data.pasport.pnfl)
                // let id = response.data.pasport.id
                //
                // setId(id)
                setTimeout(() => {
                    navigate("/userInfo");
                    console.log(id)
                }, 100);

            }
        }).catch((error)=>{
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }

    /************ERRORS***************/

    const initialError={
        frame:false,
        eText:''
    };

    const [ePinfl, setEPnfl] = useState(initialError);
    const [ePassport, setEPassport] = useState(initialError);
    const [ePassportNum, setEPassportNum] = useState(initialError);

    function isUpper(str) {
        return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    }

    function errorPinfl(e){
        if(e.target.value.length !== 14) setEPnfl({frame:true, eText: "Incorrect PINFL"});
        else setEPnfl(initialError);
    }

    function errorPassport(e){
        if(e.target.value.length === 2 && isUpper(e.target.value))
            setEPassport(initialError);
        else
            setEPassport({frame:true, eText:"Incorrect passport seria"});
    }

    function errorPasspotNum(e){
        if(e.target.value.length !== 7)
            setEPassportNum({frame:true, eText:"Incorrect passport number"});
        else
            setEPassportNum(initialError);
    }

    /************ERRORS***************/

    return (
        <div className="loginIn">
            <div className="left">
                <div className="lgBlur"></div>
                <img className="loginImg" src={LoginImg} alt=""/>
            </div>
            <div className="right">
                <div className="container">
                    <div className="col-md-10 offset-1">
                        <img src={Logo} alt="" className="loginLogo"/>
                        <div className="loginTitle">Добро пожаловать</div>
                        <h4 style={{color:'red'}}>{text}</h4>
                        {/*<h4>{JSON.stringify(state.user)}</h4>*/}
                        <div className="form-group mt-5">
                            <label className="label">Введите ПИНФЛ*</label>
                            <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    error={ePinfl.frame}
                                    helperText={ePinfl.eText}
                                    className="numberPhone"
                                    id="outlined-basic"
                                    label="1234567891011121314"
                                    variant="outlined"
                                    type="number"
                                    placeholder="1234567891011121314"
                                    onChange={(e)=>{
                                        getInputValues(e);
                                        errorPinfl(e);
                                    }}
                                    name={'pnfl'}
                                />
                            </Box>
                            {/*<input type="number" placeholder="+99 890 123 45 67" className="numberPhone"/>*/}
                        </div>
                        <div className="Infopass">
                            <div className="w-100">
                                <label className="label">Введите Серию паспорта*</label>

                                <Box
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        error={ePassport.frame}
                                        helperText={ePassport.eText}
                                        className="line"
                                        id="outlined-basic"
                                        label="AB"
                                        variant="outlined"
                                        placeholder="AB"
                                        type="text"
                                        name={'pasport_seria'}
                                        onChange={(e)=>{
                                            getInputValues(e);
                                            errorPassport(e);
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="w-100">
                                <label className="label">Введите номер паспорта*</label>

                                <Box
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        error={ePassportNum.frame}
                                        helperText={ePassportNum.eText}
                                        className="line"
                                        id="outlined-basic"
                                        label="12345689"
                                        variant="outlined"
                                        placeholder="12345689"
                                        type="number"
                                        onChange={(e)=>{
                                            getInputValues(e);
                                            errorPasspotNum(e);
                                        }}
                                        name={'pasport_seria_code'}
                                    />
                                </Box>
                            </div>
                        </div>
                        <Button onClick={addUser} variant="outlined" className="sends"> Продолжить</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginIn;