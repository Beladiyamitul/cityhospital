import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { TextField } from '@mui/material';


function ListAppoinment(props) {

  const history = useHistory();

  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState([]);

  const showData = () => {
    let listData = JSON.parse(localStorage.getItem("bookappoinment"));

    if (listData !== null) {
      setData(listData);
    }

  }

  const handleDelete = (id) => {

    let dData = JSON.parse(localStorage.getItem("bookappoinment"));


    let filterdata = dData.filter((d, i) => d.id !== id);

    localStorage.setItem("bookappoinment", JSON.stringify(filterdata))

    showData();
  }

  const handleEdit = (id) => {
    history.push("/appoinment", { "id": id })
    console.log(id);
  }

  useEffect(
    () => {
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
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(params.id)}></Button>

            <IconButton aria-label="edit" onClick={() => handleEdit(params.id)}><ModeEditIcon /></IconButton>

          </>
        )
      }

    },

  ];

  const handlesearch = (serval) => {
    let serdata = JSON.parse(localStorage.getItem("bookappoinment"))
    
    let dataf = serdata.filter((l) =>(
        l.id.toString().includes(serval.toString()) || 
        l.name.toString().toLowerCase().includes(serval.toLowerCase()) || 
        l.email.toString().toLowerCase().includes(serval.toLowerCase()) || 
        l.phone.toString().includes(serval) || 
        l.date.toString().includes(serval) || 
        l.department.toString().toLowerCase().includes(serval.toLowerCase()) || 
        l.message.toString().toLowerCase().includes(serval.toLowerCase()) 
        
    ))
    setFilterdata(dataf)
    console.log(dataf);

  }
  const filterfinal = filterdata.length >0 ? filterdata : data


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

            <TextField
              type="text"
              id="search"
              label="Search"
              variant="standard"
              onChange={(e) => handlesearch(e.target.value)}
            />

            <div className='col-6 mb-5 mt-5'>
              <NavLink activeClassName='title-border' to={"/appoinment"}>Book Appoinment</NavLink>
            </div>
            <div className='col-6 mb-5 mt-5'>
              <NavLink activeClassName='title-border' to={"/listappoinment"}>List Appoinment</NavLink>
            </div>
          </div>

        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filterfinal}
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