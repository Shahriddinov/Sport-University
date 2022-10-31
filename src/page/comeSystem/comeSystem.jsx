import React, {useState} from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import Logo from "../../assets/images/logo.svg"

import "./comeSystem.scss"
import 'antd/dist/antd.css';
import UzFlag from "../../assets/images/Uz.png";
import RuFlag from "../../assets/images/ruFlag.png";
import {useTranslation} from "react-i18next";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SpeedIcon from '@mui/icons-material/Speed';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Notification from "../../components/Notification/notification";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import {useNavigate} from "react-router";

const label = {inputProps: {'aria-label': 'Switch demo'}};
const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const ComeSystem = (props) => {
    const [regions, setRegions] = React.useState('');
    const [text, setText] = React.useState('');
    const navigate = useNavigate();


    const handleRegions = (event) => {
        setRegions(event.target.value);
    };
    const [collapsed, setCollapsed] = useState(false);

    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };



    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',

                }}
            >

                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="d-flex align-items-center p-2 mt-1">
                        <img src={Logo} alt="" className="layoutLogo"/>
                        <span className="layoutText">JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QATTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</span>
                    </div>
                    <div className="logo"/>
                    <Menu theme="dark" style={{marginTop: "36%"}} defaultSelectedKeys={['1']} mode="inline"
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <div className="container">
                            <div className="leftses">
                                {/*<div className="name">ФИО</div>*/}
                                <div className="jobTitle">{t("jobTitle")}</div>
                            </div>
                            <div className="right">
                                <button className="flagButton" onClick={() => handleChangeLng("uz")}>
                                    <img className="iconFlag" src={UzFlag} alt=""/>
                                    Uz
                                </button>
                                <button className="flagButton" onClick={() => handleChangeLng("ru")}>
                                    <img className="iconFlag" src={RuFlag} alt=""/>
                                    Ру
                                </button>
                                <Notification/>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div className="info">
                            <a href="/" className="left">
                                <ArrowBackIosNewIcon className="icon"/>
                                <div className="pro">{t("comeSystem")}</div>
                            </a>

                            <div className="rights">
                                <SpeedIcon className="icon"/>
                                <Breadcrumb.Item style={{color: "#2B63C0"}}>{t("gallery")}</Breadcrumb.Item>
                                <Breadcrumb.Item style={{opacity: "0.5"}}> {t("systemAccess")}</Breadcrumb.Item>
                                {/*<Breadcrumb.Item style={{opacity:"0.5"}}> Профиль</Breadcrumb.Item>*/}
                            </div>
                        </div>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                height: "68vh",
                                border: "0.5px solid rgba(0, 0, 0, 0.04)",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                                borderRadius: "12px",
                            }}
                        >
                            <div className="form-control">
                                <label className="cityLabel">Филиалы *</label>

                                <FormControl sx={{minWidth: 120}} className="city" size="small">
                                    <InputLabel id="demo-select-small">{t("region")}</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={regions}
                                        required
                                        label={t("region")}
                                        onAbort={handleRegions}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Toshkent</MenuItem>
                                        <MenuItem value={20}>Samarqand</MenuItem>
                                        <MenuItem value={30}>Farg'ona</MenuItem>
                                    </Select>
                                </FormControl>

                                <label className="cityLabel">Логин *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '25ch'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Login"
                                        variant="outlined"
                                        className="city"
                                        required
                                        type="username"
                                    />

                                </Box>
                                <label className="cityLabel">Пароль *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '25ch'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Пароль"
                                        required="error"
                                        variant="outlined"
                                        className="city"/>

                                </Box>
                            </div>
                            <div className="d-flex p-3 align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <Switch {...label} />

                                    <div className="radioText">
                                        Я согласен с политикой конфедициальности
                                    </div>
                                </div>
                                <div className="passwordError">
                                    Забыли пароль ?
                                </div>
                            </div>
                        </div>
                        <div className="NextPrev">
                            <Stack spacing={2} direction="row">
                                <Button className="button" href="/" variant="contained"> <span
                                    className="icones"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                            </Stack>
                            <Stack spacing={2} direction="row">
                                <Button href="/profile" className="button"
                                        style={{backgroundColor: "#0FBE7B"}}
                                        variant="contained"> <span className="icones"><CheckCircleOutlineOutlinedIcon
                                    fontSize="small"/></span> Продолжить</Button>
                            </Stack>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
        ;
};

export default ComeSystem;