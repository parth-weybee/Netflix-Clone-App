
export const authValidation = (email,password,name= null)=>
{
    const nameRegex = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/;
    if(name && !nameRegex.test(name))
    {
        return "Enter Valid Name";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!emailRegex.test(email))
    {
        return "Enter Valid Email";
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password))
    {
        return "Enter Valid Password";
    }
    return true;
}