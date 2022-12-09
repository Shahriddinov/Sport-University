
import {useTranslation} from "react-i18next";
import "antd/dist/antd.css";
import "./works.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import dayjs from 'dayjs';
import Slayder from "../../components/Slayder/slayder";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Toast from "light-toast";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {baseApi} from "../../services/api";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Works() {
    const {t, i18n} = useTranslation();
    const [count, setCount] = useState('');

    const [region_id, setRegion_id ] =useState('');
    const [district, setDistrict] = useState('');
    const [work_place, setWork_place] =useState('');
    const [faculty, setFaculty] = useState('');
    const [cafedra, setCafedra] = useState('');
    const [position, setPosition] = useState('');
    const [work_name, setWork_name] = useState('');
    const [work_phone, setWork_phone] = useState('');
    const [date_start, setDate_start] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [date_end, setDate_end] = React.useState(dayjs('2014-08-18T21:11:54'));
    const navigate = useNavigate();




    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    function works() {
        let work ={
            user_id: localStorage.getItem('userId'),
            region_id,
            district,
            work_place,
            faculty,
            cafedra,
            position,
            work_name,
            work_phone,
            date_start,
            date_end
        }
        axios.post(`${baseApi}/work`, work, {
            headers:{
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response)=>{
            console.log(response.data);
            if (response.data.status === 'ok') {
                setTimeout(() => {
                    navigate("/qualification");
                }, 100);
                toast.success(response.data.Message);
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    return (
        <section id="Profile" className="Profile">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items/>
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                {/*<Page1/>*/}
                <div className="forms">
                    <Slayder val={2}/>
                    <div className="workInfo">
                        <div className="workAbout">{t("workAbout")}</div>
                    </div>

                    <div className="form">
                        <div className="left-form">
                            <div className="Region">
                                <Box sx={{mt: 1, minWidth: "500px", mb: 2}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label={t("region")}
                                            onChange={(e) => setRegion_id(e.target.value)}
                                        >
                                            <MenuItem value={1}>Ташкент</MenuItem>
                                            <MenuItem value={2}>Nukus</MenuItem>
                                            <MenuItem value={3}>Samarkand</MenuItem>
                                            <MenuItem value={4}>Fergana</MenuItem>
                                            <MenuItem value={5}>Kashkadarya</MenuItem>
                                            <MenuItem value={6}>Navoi</MenuItem>
                                            <MenuItem value={7}>Namangan</MenuItem>
                                            <MenuItem value={8}>Bukhara</MenuItem>
                                            <MenuItem value={9}>Sirdarya</MenuItem>
                                            <MenuItem value={10}>Surkhandarya</MenuItem>
                                            <MenuItem value={11}>Jizzakh</MenuItem>
                                            <MenuItem value={12}>Khorezm</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="Area">
                                <Box sx={{mt: 4, minWidth: "500px", mb: 4}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="outlined-basic"
                                            label={t("district")}
                                            variant="outlined"
                                            onChange={(e)=>setDistrict(e.target.value)}
                                        />
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="institution">
                                <Box sx={{mt: 4, minWidth: "500px", mb: 4}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="outlined-basic"
                                            label={t("typeWork")}
                                            variant="outlined"
                                            onChange={(e)=>setWork_name(e.target.value)}
                                        />
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="institution">
                                <Box sx={{mt: 4, minWidth: "500px", mb: 4}}>
                                    <FormControl fullWidth>
                                        <PhoneInput
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="UZ"
                                            value={work_phone}
                                            onChange={(e) => setWork_phone(e)}/>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="institution">

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label={t("startJob")}
                                            inputFormat="MM/DD/YYYY"
                                            value={date_start}
                                            onChange={setDate_start}
                                            className="mb-3"

                                            renderInput={(params) => {
                                                return <TextField {...params} />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                            {/*<FormGroup>*/}
                            {/*    <FormControlLabel control={<Checkbox/>} label={t("check")}/>*/}
                            {/*</FormGroup>*/}
                        </div>
                        <div className="right-form">
                            <div className="Faculty">
                                <Box sx={{mt: 1, minWidth: "500px", mb: 2}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="outlined-basic"
                                            label={t("faculty")}
                                            variant="outlined"
                                            onChange={(e)=>setFaculty(e.target.value)}

                                        />
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%', mt: 2, mb: 4},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className=""
                                        id="outlined-basic"
                                        label={t("department")}
                                        variant="outlined"
                                        onChange={(e)=>setCafedra(e.target.value)}

                                    />
                                </Box>
                            </div>
                            <div className="">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%', mb: 4},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className=""
                                        id="outlined-basic"
                                        label={t("jobTitle")}
                                        variant="outlined"
                                        onChange={(e)=>setWork_place(e.target.value)}

                                    />
                                </Box>
                            </div>
                            <div className="">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%', mb: 3},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className=""
                                        id="outlined-basic"
                                        label={t("jobName")}
                                        variant="outlined"
                                        onChange={(e)=>setPosition(e.target.value)}

                                    />
                                </Box>
                            </div>
                            <div className="institution">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label={t("startJob")}
                                            inputFormat="MM/DD/YYYY"
                                            value={date_end}
                                            className="workEnd"
                                            onChange={setDate_end}
                                            renderInput={(params) => {
                                                return <TextField {...params} />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                            <Button className=" added" onClick={() => {
                                setCount(count + 1);
                            }} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>

                        </div>
                    </div>

                </div>
                {count.length > 0 && (
                    <div className="forms mt-5">
                        <div className="form">
                            <div className="left-form">
                                <div className="Region">
                                    <Box sx={{mt: 1, minWidth: "500px", mb: 2}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label={t("region")}
                                                onChange={(e) => setRegion_id(e.target.value)}
                                            >
                                                <MenuItem value={1}>Ташкент</MenuItem>
                                                <MenuItem value={2}>Nukus</MenuItem>
                                                <MenuItem value={3}>Samarkand</MenuItem>
                                                <MenuItem value={4}>Fergana</MenuItem>
                                                <MenuItem value={5}>Kashkadarya</MenuItem>
                                                <MenuItem value={6}>Navoi</MenuItem>
                                                <MenuItem value={7}>Namangan</MenuItem>
                                                <MenuItem value={8}>Bukhara</MenuItem>
                                                <MenuItem value={9}>Sirdarya</MenuItem>
                                                <MenuItem value={10}>Surkhandarya</MenuItem>
                                                <MenuItem value={11}>Jizzakh</MenuItem>
                                                <MenuItem value={12}>Khorezm</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="Area">
                                    <Box sx={{mt: 4, minWidth: "500px", mb: 4}}>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="outlined-basic"
                                                label={t("district")}
                                                variant="outlined"
                                                onChange={(e)=>setDistrict(e.target.value)}
                                            />
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="institution">
                                    <Box sx={{mt: 4, minWidth: "500px", mb: 4}}>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="outlined-basic"
                                                label={t("typeWork")}
                                                variant="outlined"
                                                onChange={(e)=>setWork_name(e.target.value)}
                                            />
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="institution">
                                    <Box sx={{mt: 4, minWidth: "500px", mb: 4}}>
                                        <FormControl fullWidth>
                                            <PhoneInput
                                                international
                                                countryCallingCodeEditable={false}
                                                defaultCountry="UZ"
                                                value={work_phone}
                                                onChange={(e) => setWork_phone(e)}/>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="institution">

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                label={t("startJob")}
                                                inputFormat="MM/DD/YYYY"
                                                value={date_start}
                                                onChange={setDate_start}
                                                className="mb-3"

                                                renderInput={(params) => {
                                                    return <TextField {...params} />
                                                }}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                {/*<FormGroup>*/}
                                {/*    <FormControlLabel control={<Checkbox/>} label={t("check")}/>*/}
                                {/*</FormGroup>*/}
                            </div>
                            <div className="right-form">
                                <div className="Faculty">
                                    <Box sx={{mt: 1, minWidth: "500px", mb: 2}}>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="outlined-basic"
                                                label={t("faculty")}
                                                variant="outlined"
                                                onChange={(e)=>setFaculty(e.target.value)}

                                            />
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': {width: '100%', mt: 2, mb: 4},
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className=""
                                            id="outlined-basic"
                                            label={t("department")}
                                            variant="outlined"
                                            onChange={(e)=>setCafedra(e.target.value)}

                                        />
                                    </Box>
                                </div>
                                <div className="">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': {width: '100%', mb: 4},
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className=""
                                            id="outlined-basic"
                                            label={t("jobTitle")}
                                            variant="outlined"
                                            onChange={(e)=>setWork_place(e.target.value)}

                                        />
                                    </Box>
                                </div>
                                <div className="">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': {width: '100%', mb: 3},
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className=""
                                            id="outlined-basic"
                                            label={t("jobName")}
                                            variant="outlined"
                                            onChange={(e)=>setPosition(e.target.value)}

                                        />
                                    </Box>
                                </div>
                                <div className="institution">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                label={t("startJob")}
                                                inputFormat="MM/DD/YYYY"
                                                value={date_end}
                                                className="workEnd"
                                                onChange={setDate_end}
                                                renderInput={(params) => {
                                                    return <TextField {...params} />
                                                }}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                <Button className=" added" onClick={() => {
                                    setCount(count + 1);
                                }} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>

                            </div>
                        </div>

                    </div>
                )}
                <div className="next-page">

                    <div className="back-btn">
                        <Stack spacing={2} direction="row">
                            {/*<Button className="button" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>*/}

                            <Button href="/education" className="button" variant="contained"> <span
                                className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                        </Stack>
                    </div>
                    <div className="next-btn">
                        {/*<button>Продолжить</button>*/}
                        <Button onClick={works} className="button" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icon"><CheckCircleOutlineOutlinedIcon fontSize="small"/></span> Продолжить</Button>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Works;