 import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Create, ListAll } from './1_Task_EmployeeDetails';

export let RegisterForm=()=>
{
    const[uservalues,setUservalues]=useState({
        "empId":0, 
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExperience":0,
        "empSalary":0
    })
    
    const setavalue=(temp)=>
    {
        const{name,value}=temp.target
    
        setUservalues((getting)=>
        {
            return{
                ...getting,//Spread
                [name]:value
            }   
        })
    }

        const register=()=>
        {
            alert("Welcome to Zealouus Tech Corp (your values added successfully)"+JSON.stringify(uservalues))
            Create(uservalues)
            alert(ListAll())
        }
        const reject=()=>
        {
            alert(" your data is rejected....!")
        }

    return(
        <>
        <div className='container col-lg-7 col-md-9 col-sm-12'>
            <div className='row justify-content-center fw-bold fs-4'>
                <h1 className='fw-bold text-center'>Zoho Tech Corp Register Form</h1><br/>
                <label className='form-label '>Employee Id</label>
                <input 
                name="empId"
                placeholder='Enter your Id'
                type="number"
                className='form-control'
                value={uservalues.empId}
                onChange={setavalue}
                />
                 <label className='form-label'>Employee Name</label>
                <input 
                name="empName"
                placeholder='Enter your Name'
                type="text"
                className='form-control'
                value={uservalues.empName}
                onChange={setavalue}
                />
                 <label className='form-label'>Employee Username</label>
                <input 
                name="empUsername"
                placeholder='Enter your Username'
                type="text"
                className='form-control'
                value={uservalues.empUsername}
                onChange={setavalue}
                />
                 <label className='form-label'>Employee Password</label>
                <input 
                name="empPassword"
                placeholder='Enter your Password'
                type="password"
                className='form-control'
                value={uservalues.empPassword}
                onChange={setavalue}
                />
                <label className='form-label'>Employee Designation</label>
                <input 
                name="empDesignation"
                placeholder='Enter your Designation'
                type="text"
                className='form-control'
                value={uservalues.empDesignation}
                onChange={setavalue}
                />
                <label className='form-label'>Employee Experience</label>
                <input 
                name="empExperience"
                placeholder='Enter your experience'
                type="number"
                className='form-control'
                value={uservalues.empExperience}
                onChange={setavalue}
                />

                <label className='form-label'>Employee Salary</label>
                <input 
                name="empSalary"
                placeholder='Enter your Salary'
                type="number"
                className='form-control'
                value={uservalues.empSalary}
                onChange={setavalue}
                />
            </div>
            <div className='row justify-content-center mt-3'>
                <button className='btn btn-outline-success col-5' onClick={register}>Register</button>
                <button className='btn btn-outline-danger col-5 ms-3' onClick={reject}>Cancel</button>
            </div>
        </div>
        </>
    );
}