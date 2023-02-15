export const email: any = (value: any, formValues: any) => {
    if (!ValidateEmail(value)) {
        return 'Invalid email address'
    }
    return null;
}

function ValidateEmail(mail: string) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}