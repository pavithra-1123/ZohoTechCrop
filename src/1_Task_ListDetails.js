import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { RegisterForm } from './1_Task_RegisterForm';
import { Reading1 } from './1_Task_ReadPage';
import { Deleting, ListAll, fetchExact1 } from './1_Task_EmployeeDetails';
import { Updating1 } from './1_Task_Update';


export let ListPage1=()=>
{
    const[temparray,setTemparray]=useState([]);
    const[createview,setCreateview]=useState(false);
    const[readview,setReadview]=useState(false);
    const[pos,setPos]=useState(0);
    const[updateview,setUpdateview]=useState(false);
    const[object,setObject]=useState({})

    const setavalue=()=>
    {
        setTemparray(ListAll)
    }
    useEffect(()=>
    {
        setavalue()
    })
  
    return(
        <>
            <div className='row justify-content-center'>
                <br/><br/>
                <div className='table-responsive-md'>
            
                    {
                        (createview)?
                        <><RegisterForm/>
                        <div className='text-center'>
                        <br/><br/>
                        <button className='btn btn-outline-info'
                        onClick={
                            ()=>
                            {
                                setCreateview(false)
                            }
                        }
                        >
                            Back
                        </button><br/><br/>
                        </div>
                        </>
                        :
                        (readview)?
                        <>
                        
                        <div className='text-center'>
                        <Reading1 ind={pos} /><br/><br/>
                        <button className='btn btn-outline-info col-2'
                        onClick={()=>
                        {
                            setReadview(false)
                        }}>
                         Back   
                        </button><br/><br/><br/><br/>
                        </div>
                        </>
                        :
                        (updateview)?
                        <>
                        <Updating1 who={pos} mention={object}/>
                        <div className='text-center'><br/><br/>
                        <button className='btn btn-info text-center'
                        onClick={()=>
                        {
                            setUpdateview(false)
                        }}>
                            BACK
                        </button><br/><br/>
                      </div>
                        </>
                        :
                        <>
                               <h4 className='text-light bg-dark '><br/><span className='ms-3'>Employee Management App</span> <br/><br/> </h4>
                <h3 className='text-center'>Employee List</h3>
                <h5 className='text-info ms-5'>If you want to add employee details, click 'Register' button</h5>
                <br/>
                        <button className='btn btn-info ms-5'
                        onClick={()=>
                        {
                            setCreateview(true)
                        }}
                        >
                            Register
                        </button>
                        <br/><br/>
                 
                         <table className='col-lg-8 col-md-10 col-sm-12 table table-striped table-info table-hover'>
                         <thead>
                             <tr>
                                 <th>Employee Id</th>
                                 <th>Employee Name</th>
                                 <th>Employee Username</th>
                                 <th>Employee Password</th>
                                 <th>Employee Designation</th>
                                 <th>Employeee Experience</th>
                                 <th>Employeee Salary</th>
                                 <th colspan-5>Employee Actions</th>
                             </tr>
                         </thead>
                         <tbody>
                            {
                             temparray.map((data,index)=>
                             (
                                 <>
                                 <tr style={{backgroundColor:''}}>
                                     <td>{data.empId}</td>
                                     <td>{data.empName}</td>
                                     <td>{data.empUsername}</td>
                                     <td>{data.empPassword}</td>
                                     <td>{data.empDesignation}</td>
                                     <td>{data.empExperience}</td>
                                     <td>{data.empSalary}</td>   
                                     <td>
                                        <button className='btn btn-outline-warning'
                                         onClick={()=>
                                         {
                                             setPos(index)
                                             setReadview(true)
                                         }}>
                                         Read
                                        </button>
                                         
                                         <button className='btn btn-outline-success ms-2 '
                                         onClick={()=>
                                         {
                                            setUpdateview(true);
                                            setPos(index);
                                            const temp=fetchExact1(data.empName);
                                            setObject(temp);
                                         }}>Update</button>

                                         <button className='btn btn-outline-danger ms-2'
                                         onClick={()=>
                                         {
                                            setTemparray(Deleting(index));
                                         }}>Delete</button>
                                     </td> 
                                 </tr>
                                 </>     
                              ))
                              }
                         </tbody>
 
                     </table>
                        </>
                    }
                   
                </div>
                <h6 className="text-light text-center bg-dark"><br/>All Rights Reserverd 2020@Java Guides<br/><br/></h6>

            </div>
        </>
    );
}