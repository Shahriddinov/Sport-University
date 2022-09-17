import React from 'react';
import './work.scss';
import Icon from '@mui/material/Icon';
import Slayder from "../../components/Slayder/slayder";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useTranslation } from "react-i18next";



function Work(props) {


    return (
        <div>

            <Slayder/>

           <div className="work">

               <div className="left">

               </div>
               <div className="right ">

                   <div className="inputForm w-100">

                       <h2 className='mt-0'>Сведения о работе</h2>
                       <div className="inputs">
                           <div className="col-6 ">
                               <div className="Region">
                                   <label htmlFor="">Область *</label>
                                   <select name="" id="">
                                       <option value="Toshkent">Toshkent</option>
                                       <option value="Samarqand">Samarqand</option>
                                       <option value="Farg'ona">Farg'ona</option>
                                       <option value="Nukus">Nukus</option>
                                   </select>
                               </div>
                               <div className="Area">
                                   <label htmlFor="area">Район *</label>
                                   <select name="" id="area">
                                       <option value="Toshkent">Toshkent</option>
                                       <option value="Samarqand">Samarqand</option>
                                       <option value="Farg'ona">Farg'ona</option>
                                       <option value="Nukus">Nukus</option>
                                   </select>
                               </div>
                               <div className="institution">
                                   <label htmlFor="">Образовательное учреждение *</label>
                                   <select name="" id="">
                                       <option value="Toshkent">Toshkent</option>
                                       <option value="Samarqand">Samarqand</option>
                                       <option value="Farg'ona">Farg'ona</option>
                                       <option value="Nukus">Nukus</option>
                                   </select>
                               </div>
                               <div className="Location-type">
                                   <label htmlFor="">Тип место работы *</label>
                                   <select name="" id="">
                                       <option value="Toshkent">Toshkent</option>
                                       <option value="Samarqand">Samarqand</option>
                                       <option value="Farg'ona">Farg'ona</option>
                                       <option value="Nukus">Nukus</option>
                                   </select>
                               </div>
                               <div className="Job-number m-0">
                                   <label htmlFor="">Номер место работы </label>
                                   <select className='m-0' name="" id="">
                                       <option value="Toshkent">Toshkent</option>
                                       <option value="Samarqand">Samarqand</option>
                                       <option value="Farg'ona">Farg'ona</option>
                                       <option value="Nukus">Nukus</option>
                                   </select>
                               </div>
                           </div>
                           <div className="col-6 ">
                               <div className="Faculty">
                                   <label htmlFor="">Факультет *</label>
                                   <select name="" id="">
                                   <option value="Toshkent">Toshkent</option>
                                   <option value="Samarqand">Samarqand</option>
                                   <option value="Farg'ona">Farg'ona</option>
                                   <option value="Nukus">Nukus</option>
                                   </select>
                                </div>
                               <div className="Chair">
                                   <label htmlFor="">Кафедра *</label>
                                   <input placeholder='Кафедра'  className='form-control' type="text"/>

                                </div>
                               <div className="Job-title">
                                   <label htmlFor="">Должность *</label>
                                   <input placeholder='Тренер'  className='form-control' type="text"/>
                                </div>
                               <div className="place-name">
                                   <label htmlFor="">Название место работы *</label>
                                   <input placeholder='Название' className='form-control' type="text"/>
                                </div>
                           </div>
                       </div>
                   </div>

               </div>

           </div>
            <div className="next">

                <div className="Back">
                    <button>
                        <Icon color="primary">add_circle</Icon>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Work;