import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';


function ListAppoinment(props) {

  const [data , setData]= useState([]);

  const showData = () => {
   let listData = JSON.parse(localStorage.getItem("bookappoinment"));

   setData(listData);

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