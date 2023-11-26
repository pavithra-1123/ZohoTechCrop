let ZohoTechDetails=[
    {
        "empId":1,
        "empName":"Pavithra ",
        "empUsername":"Pavi123",
        "empPassword":"Pavi342",
        "empDesignation":"Java Full Stack Developer",
        "empExperience":1,
        "empSalary":4.8
    },
    {
        "empId":2,
        "empName":"Thara",
        "empUsername":"Pavi123",
        "empPassword":"Pavi",
        "empDesignation":"Java Developer",
        "empExperience":5,
        "empSalary":5.5
    },
    {
        "empId":3,
        "empName":"Vijay",
        "empUsername":"vijay123",
        "empPassword":"Pavi231",
        "empDesignation":"Python Developer",
        "empExperience":3,
        "empSalary":3.5
    },
    {
        "empId":4,
        "empName":"Naruto",
        "empUsername":"naru123",
        "empPassword":"naruhina231",
        "empDesignation":"Hokage",
        "empExperience":7,
        "empSalary":6
    }

]

export const Create=(obj)=>
{
    ZohoTechDetails.push(obj);
}

export const ListAll=()=>
{
    return ZohoTechDetails;
}

export const Read=(index)=>
{
    return ZohoTechDetails[index];
    // zealousempdetails[2];
}


export const fetchExact1=(name)=>
{
    const temp=ZohoTechDetails.filter((get)=>
    {
        return get.empName===name;
    })
    return temp[0];
}

export const ReplaceValues=(data,index)=>
{
    ZohoTechDetails[index]=data;
}

export const Deleting=(ind)=>
{
    let say=prompt(" please tell us your value are delete yes/no")

    if(say==='yes')
    {
        ZohoTechDetails=ZohoTechDetails.filter((data,index)=>
        {
            return index!==ind;
        })
        return ZohoTechDetails;
    }
    else if (say==='no')
    {
        alert(" your value is not deleted")
        return ZohoTechDetails;
    }
    else
    {
        alert(" Nothing permanent")
    }
}