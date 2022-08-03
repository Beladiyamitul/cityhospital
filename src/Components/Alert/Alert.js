import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';


function Alert(props) {

const alert = useSelector(state => state.alert)
const { enqueueSnackbar, closeSnackbar } = useSnackbar();


const dispatch = useDispatch()



useEffect(() => {
    if (alert.text !== '') {
        enqueueSnackbar(alert, {
            anchorOrigin: {
                variant: 'error', 
              vertical: 'top',
              horizontal: 'right'
            }
          });

    }


} , 

[])

    return (
        <div>
            
        </div>
    );
}

export default Alert;