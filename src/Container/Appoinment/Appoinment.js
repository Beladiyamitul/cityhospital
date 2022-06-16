import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { form } from 'reactstrap';
import * as yup from 'yup';
import Inputbox from '../../Components/InputBox/Inputbox';

function Appoinment(props) {

  const historydata = useHistory();





  let schema = yup.object().shape({
    name: yup.string("Please enter your name").required("Please enter your name"),
    email: yup.string().email("Please enter Valid email").required("Please enter your email"),
    phone: yup.number().required("Please enter your number").positive().integer(),
    date: yup.string().required("Please enter your date"),
    department: yup.string().required("Please Select department"),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      department: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2));

      const  {
        name,
        email,
        phone,
        date,
        department
      }=values

      const appodata ={
        id:Math.floor(Math.random() * 1000),
        name,
        email,
        phone,
        date,
        department
      }
      console.log(appodata);

      let bookdata = JSON.parse(localStorage.getItem("bookappoinment"));

      if (bookdata == null) {
        localStorage.setItem("bookappoinment", JSON.stringify([appodata]));
      }else{
        bookdata.push(appodata);
        localStorage.setItem("bookappoinment", JSON.stringify(bookdata));
      }

      historydata.push("/Listappoinment")





    }
  });


const {handleSubmit , handleChange , errors} = formik;

console.log(errors);

  return (
    <main id="main">
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

          <Formik value={formik}>

            <Form key={formik} onSubmit={handleSubmit}  className="php-email-form">
              <div className="row">
                <div className="col-md-4 form-group">
                  <Inputbox
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    error={Boolean(errors.name)}
                    errormessage={errors.name}
                    onChange={handleChange}
                   />
                 
                </div>


                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <Inputbox
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    errormessage={errors.email}
                   />
                 
                </div>



                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <Inputbox
                    type="tel"
                    className="form-control"
                    name="phone" id="phone"
                    placeholder="Your Phone"
                    maxLength={10}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    errormessage={errors.phone}
                    />
                 
                </div>
              </div>



              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <Inputbox
                    type="datetime"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    onChange={handleChange}
                    placeholder="Appointment Date"
                    error={Boolean(errors.date)}
                    errormessage={errors.date}
                    />
                
                </div>



                <div className="col-md-4 form-group mt-3">
                  <Inputbox type="select" name="department" id="department" className="form-select" onChange={handleChange} error={Boolean(errors.department)}  errormessage={errors.department}>
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </Inputbox>

                 
                </div>

              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div className="text-center"><button className="appointment-btn scrollto" type='submit'>Make an Appointment</button></div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>

  );
}

export default Appoinment;