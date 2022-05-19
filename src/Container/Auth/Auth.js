import React from 'react';
import { Button , Form , FormGroup , Input , Label} from 'reactstrap';

function Auth(props) {
    return (
        
        <div className='container p-5'>
            <h3 className='text-center'>Log In</h3>
             <Form inline>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button>
      Submit
    </Button>
  </Form>
  </div>
       
    );
}

export default Auth;