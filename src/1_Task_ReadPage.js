import { useEffect, useState } from "react"
import { Read } from "./1_Task_EmployeeDetails"



export const Reading1=(position)=>
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

        const Callreadmethod=()=>
        {
            setUservalues(Read(position.ind))
        }

        useEffect(()=>
        {
            Callreadmethod()
        })
        return(
            <>
                <div className="container text-center mt-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="text-start fw-bold">
                                <h1 className="text-center mb-5">Employee Details</h1>
                                <tr>
                                    <td style={{textAlign:'left'}}>Employee ID :<span className="ms-5 " style={{textAlign:'right'}}>{uservalues.empId}</span></td>
                                </tr>
                                <tr>
                                    <td>Employee NAME:<span className="ms-5 " style={{textAlign:'right'}}>{uservalues.empName}</span></td>
                                </tr>
                                <tr>
                                    <td>Employee USERNAME:<span className="ms-5" style={{textAlign:'right'}}>{uservalues.empUsername}</span></td>
                                </tr>
                                <tr>
                                    <td>Employee PASSWORD:<span className="ms-5" style={{textAlign:'right'}}>{uservalues.empPassword}</span></td>
                                   
                                </tr>
                                <tr>
                                    <td>Employee DESIGNATION:<span className="ms-5" style={{textAlign:'right'}}>{uservalues.empDesignation}</span></td>
                                   
                                </tr>
                                <tr>
                                    <td>Employee EXPERIENCE:<span className="ms-5" style={{textAlign:'right'}}>{uservalues.empExperience}</span></td>
                                </tr>
                                <tr>
                                <td>Employee SALARY:<span className="ms-5">{uservalues.empSalary}</span></td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}