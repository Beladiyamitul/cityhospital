import React from 'react';
import { NavLink } from 'react-router-dom';

function ListAppoinment(props) {
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

      </div>
    </section>
  );
}

export default ListAppoinment;