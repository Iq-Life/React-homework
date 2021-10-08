import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loadingPage.loading)
    const dispatch = useDispatch()

     const setLoading = () => {
         dispatch(loadingAC(true))
         setTimeout(()=>{
             dispatch(loadingAC(false))
         }, 3000)
     };

    return (
        <div>
            {loading
                ?
                <div>
                    крутилка...
                </div>
                :
                <div>
                    <SuperButton title={"set loading..."} onClick={setLoading}/>
                </div>
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    )
}

export default HW10
