import React, {useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTranslation} from "react-i18next";
import "./adminprofile.scss";
import ProfileSidebar from "../../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../../components/Layout/Footer/Footer";
import TeacherCard from "../../../components/admin/teacherCard/teacherCard";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import DownloadIcon from '@mui/icons-material/Download';




const AdminProfile = () =>{

    let Query = [
        {
            eduName:"I. Руководители и заместители спортивных учебных заведений",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"II. Инструкторы-методисты спортивных учебных заведений",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"III. Тренеры республиканских школ высшего спортивного мастерства, колледжей олимпийского резерва, специализированных детско-юношеских спортивных школ, специализированных школ олимпийского резерва",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"IV. Тренеры спортивных школ для детей и подростков",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"V. Спортивные психологи",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"VI. Руководители и педагоги высших учебных заведений по физической культуре и спорту",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"VII. Преподаватели физической культуры профессиональных образовательных учреждений (кроме специальностей физической культуры и спорта)",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"VIII. Учителя физической культуры общеобразовательных и средних специальных образовательных организаций",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"IX. Инструкторы по физической культуре дошкольных образовательных организаций",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        }

    ];

    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState({});
    const [showTeachers, setShowTeachers] = useState(false);
    const [showTeacher, setShowTeacher] = useState(false);
    const [indexTeacher, setIndexTeacher] = useState(0);

    function Univer(index) {
        setTeachers(Query[index].teachers);
        setShowTeachers(true);
    }

    function Teachers(index) {
        setTeacher(teachers[index]);
        setShowTeacher(true);
        setIndexTeacher(index);
        document.getElementById("teacherSpec").value = teachers[index].speciality;
    }

    const {t, i18n} = useTranslation();

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Профиль", "1", <AddCircleIcon/>),
        getItem("Главная", "2", <HomeIcon/>),
        getItem("Портфолио", "3", <SdCardIcon/>),
        getItem("Логин", "4", <LoginIcon/>),
        getItem("Настройки", "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const [age, setAge] = React.useState('age');
    const [label, setLabel]=React.useState('jasur');




    return (
        <>
            <section id="admin" className="admin">
                <ProfileSidebar items={items}/>
                <div className="basePart">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>

                    <ProfileNavbar title={"profile"}/>
                    <div className="selection">

                        <div className="all-directions-select">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Все направления</option>
                                <option value="I. Руководители и заместители спортивных учебных заведений">I. Руководители и заместители спортивных учебных заведений</option>
                                <option value="II. Инструкторы-методисты спортивных учебных заведений">II. Инструкторы-методисты спортивных учебных заведений</option>
                                <option value="III. Тренеры республиканских школ высшего спортивного мастерства, колледжей олимпийского резерва, специализированных детско-юношеских спортивных школ, специализированных школ олимпийского резерва">III. Тренеры республиканских школ высшего спортивного мастерства, колледжей олимпийского резерва, специализированных детско-юношеских спортивных школ, специализированных школ олимпийского резерва</option>
                                <option value="IV. Тренеры спортивных школ для детей и подростков">IV. Тренеры спортивных школ для детей и подростков</option>
                                <option value="V. Спортивные психологи">V. Спортивные психологи</option>
                                <option value="VI. Руководители и педагоги высших учебных заведений по физической культуре и спорту">VI. Руководители и педагоги высших учебных заведений по физической культуре и спорту</option>
                                <option value="VII. Преподаватели физической культуры профессиональных образовательных учреждений (кроме специальностей физической культуры и спорта)">VII. Преподаватели физической культуры профессиональных образовательных учреждений (кроме специальностей физической культуры и спорта)</option>
                                <option value="VIII. Учителя физической культуры общеобразовательных и средних специальных образовательных организаций">VIII. Учителя физической культуры общеобразовательных и средних специальных образовательных организаций</option>
                                <option value="IX. Инструкторы по физической культуре дошкольных образовательных организаций">IX. Инструкторы по физической культуре дошкольных образовательных организаций</option>
                                <option value="all">Показать всё</option>
                            </select>

                        </div>


                        <div className="listOfOrganize">
                            <div className="boxNav">
                                <h1>Список направлений</h1>
                            </div>
                            <div className="pdf-part">
                                <div className="pdf">
                                    <div className="pdf-item">
                                        {
                                            Query.map((item, index) => {
                                                return <div className="pdf-own d-flex justify-content-between" onClick={()=>Univer(index)}>
                                                    {/*<div className="EduPicture">*/}
                                                    {/*    <img src="logo.png" alt="logo"/>*/}
                                                    {/*</div>*/}
                                                    <div className="EduInfo">
                                                        <h5>{item.eduName}</h5>
                                                        <h6>Педагоги:    {item.teachers.length}</h6>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total-teachers">
                            <p>Всего 58 педагогов</p>

                                <input  id='date' type="date"/>


                        </div>
                        {
                            showTeachers ? <div className="listOfOrganize">
                                <div className="boxNav1 d-flex justify-content-end pb-3">
                                    {/*<h1>ТДИУ Университет всего 58 педагогов</h1>*/}
                                    <button className="btn btn-primary" onClick={()=>setShowTeachers(false)}></button>
                                </div>
                                <div className="pdf-part">
                                    <div className="pdf">
                                        <div className="pdf-item">
                                            {
                                                teachers.map((item, index) =>{
                                                    return <div style={{margin:0}} onClick={()=>Teachers(index)}>
                                                        <TeacherCard props={item}/>

                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="download-icons">
                                    <div className="download-word">
                                        <DownloadIcon/>
                                        <p>Загрузить в Word</p>
                                    </div>
                                    <div className="download-exel">
                                        <DownloadIcon/>
                                        <p>Загрузить в Exel</p>
                                    </div>
                                    <div className="download-pdf">
                                        <DownloadIcon/>
                                        <p>Загрузить в PDF</p>
                                    </div>
                                </div>
                            </div> : ""
                        }
                        {
                            showTeacher ? <div className="InfoOfTeacher">
                                <div className="boxNav">
                                    <h1>Человек {indexTeacher}</h1>
                                    <button className="btn btn-primary" onClick={()=>setShowTeacher(false)}></button>
                                </div>
                                <div className="displayFlex">
                                    <div className="leftSide">
                                        <div className="firstInfo">
                                            <div className="TeacherImage">
                                                <img src={teacher.image} alt="teacher"/>
                                            </div>
                                            <div className="FullName">
                                                <h4>{t("FullName")}</h4>
                                                <div className="BoxForInfo">
                                                    {teacher.name}
                                                </div>
                                            </div>
                                        </div>
                                        <FormGroup>
                                            <FormControlLabel style={{color:"#2B63C0"}} control={<Switch defaultChecked />} label="Мужчина" />
                                        </FormGroup>
                                        <h4 className="InfoTitle">{t("QualInfo")}</h4>
                                        <div className="QualInfo">
                                            {teacher.qualificationInformation}
                                        </div>
                                        <h4 className="InfoTitle">{t("DateLastQual")}</h4>
                                        <div className="DataQual">
                                            {teacher.dateLastQual}
                                        </div>
                                        <h4 className="InfoTitle">{t("Education")}</h4>
                                        <div className="DataQual">
                                            {teacher.education}
                                        </div>
                                    </div>
                                    <div className="rightSide">
                                        <label className="labelSpec">{t("speciality")}</label>
                                        <input type="text" id="teacherSpec" className="form-control editSpec" placeholder="Специальность"/>
                                        <label className="labelSpec">{t("DirectioName")}</label>
                                        <select id="DirectioName" className="form-control DirectForm">
                                            <option value="0">Название направления</option>
                                            <option value="1">Инвалид</option>
                                            <option value="2">Годен</option>
                                            <option value="3">Пенсионер</option>
                                            <option value="3">Женщина с ребенком</option>
                                        </select>
                                        <label className="labelSpec">{t("Subjects")}</label>
                                        <select id="Subjects" className="form-control DirectForm">
                                            <option value="0">Предметы, которые преподает учитель</option>
                                            <option value="1">Физика</option>
                                            <option value="2">Математика</option>
                                            <option value="3">Родной язык</option>
                                            <option value="3">Физическая культура</option>
                                        </select>
                                        <Stack spacing={2} direction="row">
                                            <Button style={{
                                                backgroundColor:"#0FBE7B",
                                                fontSize:16,
                                                width:270,
                                                height:48,
                                                marginLeft:'auto'
                                            }} variant="contained"> <span style={{marginRight:15}}><CheckCircleOutlineIcon fontSize="small"/></span> Перейти в профиль</Button>
                                        </Stack>
                                    </div>
                                </div>

                                <div className="download-icons pt-5 mr-">
                                    <div className="download-word">
                                        <DownloadIcon/>
                                        <p>Загрузить в Word</p>
                                    </div>
                                    <div className="download-exel">
                                        <DownloadIcon/>
                                        <p>Загрузить в Exel</p>
                                    </div>
                                    <div className="download-pdf">
                                        <DownloadIcon/>
                                        <p>Загрузить в PDF</p>
                                    </div>
                                </div>

                            </div> : ""
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>

    )
};

export default AdminProfile;