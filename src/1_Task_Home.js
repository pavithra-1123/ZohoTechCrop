import './1_Task_Css.css';
import React from 'react';
//import zoho from './image/zoho-logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'


export let Home1=()=>
{
    return(
        <>
        <aside className='sidebar'>
        </aside>
        <div className="conatiner bg-warning">
            <div className=" row justify-content-center">
                <div className="" id='img'>
                    <h3 className="mt-3 fw-bold text-center">Zoho Tech Corp</h3>
                    <h6 className="text-center mt-5">Run your entire business on Zoho with our unified cloud software, designed to help you break down silos ,<br/>between departments and increase organizational efficiency.</h6>
                    {/* <img src='src/picture/zo.jpg' alt='' /> */}
                    {/* <div style={{backgroundImage:URL("/picture/zo.jpg")}}></div> */}
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/>

                    {/* <img src={zoho} alt='' height={"400px"} width={"500px"} className='image-container row justify-content-center col-4'  /> */}
                </div>
            </div> 
        </div>
        </>
    );
}