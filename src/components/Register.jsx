import React from 'react'
import { MDBBtn, MDBCheckbox, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
 import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Register() {
  return (
    <div>
        <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='Name' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='Username' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='Email' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='Password' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
    </div>
  )
}
