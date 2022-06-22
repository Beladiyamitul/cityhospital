import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


function ListAppoinment(props) {

  const history = useHistory();

  const [data , setData]= useState([]);

  const showData = () => {
   let listData = JSON.parse(localStorage.getItem("bookappoinment"));

   if (listData !== null) {
    setData(listData);
  }

  }

  const handleDelete =(id) =>{
    
    let dData = JSON.parse(localStorage.getItem("bookappoinment"));


    let filterdata = dData.filter((d, i) => d.id !== id);

    localStorage.setItem("bookappoinment" , JSON.stringify(filterdata))

    showData();
  }

  const handleEdit =(id) =>{
    history.push("/appoinment", {"id" : id})
    console.log(id);
  }

  useEffect(
    () =>{
      showData()
  },
  [])


  const columns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'message', headerName: 'Message', width: 130 },
    { field: 'action',
     headerName: 'Action', 
     width: 130,
     renderCell: (params) => {
      return (
          <>
              <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(params.id)}></Button>

              <IconButton aria-label="edit" onClick={()=>handleEdit(params.id)}><ModeEditIcon /></IconButton>

          </>
      )
  }
    
    },
  
];


  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <div className='appoinmentnav'>
          <div className='row text-center'>
            <div className='col-6 mb-5'>
              <NavLink activeClassName='title-border' to={"/appoinment"}>Book Appoinment</NavLink>
            </div>
            <div className='col-6 mb-5'>
              <NavLink activeClassName='title-border' to={"/listappoinment"}>List Appoinment</NavLink>
            </div>
          </div>

        </div>
        <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
 

      </div>
    </section>
  );
}

export default ListAppoinment;