export function email(value){
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value)
}

export function username(value){
    return value.length>2
}

export function password(value){
    return value.length>2
}