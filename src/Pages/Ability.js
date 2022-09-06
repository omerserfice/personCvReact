import React, { useState, useEffect } from 'react';
import '../Assets/css/Ability.css'
import getAbility from '../Redux/actions/Ability/action';
import { useDispatch, useSelector } from 'react-redux';
import CustomBreadcrumb from '../Component/CustomBreadcrumb/CustomBreadcrumb';

const Ability = () => {
    const tags=[
        {
            page: "Anasayfa",
            href : `/`
        },
        {
            page: "Yetenekler",
        },
    ]
    const dispatch = useDispatch();
    const abilityData = useSelector(state => state.abilityReducers.abilityData);

    useEffect(() => {

        dispatch(getAbility())

    }, []);


    return (
        <>
            <div className='ability container'>
            <CustomBreadcrumb  tagslength={tags.length} tags={tags}></CustomBreadcrumb><br />
                <h5>Yeteneklerim ve İlgilendiğim Teknolojiler</h5>
                <hr />
                <div class="container">
                    <div class="row">
                        {
                            abilityData.map((item, key) => {
                                return (
                                    
                                    <>
                                    
                                        <div key={key} class="col-md-6">
                                            <h3 class="progressbar-title">{item.abilityName}</h3>
                                            <div class="progress">
                                                <div class="progress-bar" style={{ width:`${item.abilityPoint}%`,
                                                 background:`${key % 2 == 0 ? '#30475E' : '#f05454'}` }}>
                                                    <span class="progress-value">%{item.abilityPoint}</span>
                                                    <span class="progress-icon" style={{ borderBottomColor: `${key % 2 == 0 ? '#30475E' : '#f05454'}` }}></span>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }

                    </div>
                </div>
            </div>

        </>

    );
};

export default Ability;
