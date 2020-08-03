import axios from "axios";


/***************************FETCH*************************************/
export const getProducts=()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:8083/CRM/customer")
        .then((posRes)=>{
            dispatch(fun_one(posRes.data));
        },(errRes)=>{
            console.log(errRes);
        })
    }
}

export const fun_one=(records)=>{
    return { type:"FETCH",value:records }
}
/***********************************************************************/


/*****************************INSERT***********************************/
export const addProduct = (record)=>{
    return (dispatch)=>{
        return axios.post("http://localhost:8083/CRM/AddCustomer",record)
                    .then((posRes)=>{
                        posRes.data.record = record;
                        dispatch(fun_two(posRes.data));
                    },(errRes)=>{
            console.log(errRes);
        });
    };
};
export const fun_two = (response)=>{
    return {type:"INSERT",value:response};
};
/**********************************************************************/


/*****************************UPDATE************************************/
export const updateProduct = (record)=>{
    return (dispatch)=>{
        return axios.put("http://localhost:8083/CRM/update",record)
                    .then((posRes)=>{
                        posRes.data.record = record;
                        dispatch(fun_three(posRes.data))
                    },(errRes)=>{
                console.log(errRes);
        });
    }
}
export const fun_three = (response)=>{
    return {type:"UPDATE",value:response};
};
/***********************************************************************/


/***********************************DELETE ****************************/

export const deleteProduct = (record)=>{
    return (dispatch)=>{
        return axios.delete("http://localhost:8083/CRM/deleteCustomer",{data:record})
                    .then((posRes)=>{
                        posRes.data.id = record.id;
                        dispatch(fun_four(posRes.data));
                    },(errRes)=>{
                console.log(errRes);
        });
    };
};
export const fun_four = (response)=>{
    return {type:"DELETE",value:response}
}



/*********************************************************************/





















