import React from 'react'
import {useFormik} from 'formik';
import * as Yup from  'yup';


const FormData = () => {
    const Formik = useFormik({
      initialValues:{
        firstName:"",
        LastName:"",
        email:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        age:"",
        gender:"",
        interest:[],
        birthDate:""
      },

      validationSchema:Yup.object({
        firstName:Yup.string()
        .firstName('Invalid First Name')
        .required('Required Field'),
        lastName:Yup.string()
        .lastName('Invalid Last Name')
        .required('Required Field'),
      }),
      onSubmit:values=>{
        console.log(values)
      }

    })
  return (
   <>
   <form onSubmit={Formik.handleSubmit}> 
     <label>First Name : </label>
     <input
      type='text'
      id='firstName'
      name='firstName'
      // value={formdata.firstName}
      placeholder='Enter your First Name'
    />
    {Formik.touched.firstName && Formik.errors.firstName?(<div>{Formik.errors.firstName}</div>):null}
    <br/><br/>
    <label>Last Name : </label>
     <input
      type='text'
      id='lastName'
      name='lastName'
      // value={formdata.LastName}
      placeholder='Enter your Last Name'
    />
    {Formik.touched.lastName && Formik.errors.lastName?(<div>{Formik.errors.lastName}</div>):null}
    <br/><br/>
    <label>Email : </label>
     <input
      type='text'
      name='email'
      // value={formdata.email}
      placeholder='Enter your Email Name'
    />
    {Formik.touched.email && Formik.errors.email?(<div>{Formik.errors.email}</div>):null}
    <br/><br/>
    <label>Phone Number : </label>
     <input
      type='text'
      name='phoneNumber'
      // value={formdata.phoneNumber}
      placeholder='Enter your Phone Number'
    />
    <br/><br/>
    <label>Password : </label>
     <input
      type='password'
      name='password'
      // value={formdata.password}
      placeholder='Enter your Password'
    />
    <br/><br/>
    <label>Confirm Password : </label>
     <input
      type='password'
      name='confirmPassword'
      // value={formdata.confirmPassword}
      placeholder='Enter your Password Again'
    />
    <br/><br/>
    <label>Age : </label>
     <input
      type='number'
      name='age'
      // value={formdata.age}
      placeholder='Enter your Age'
    />
    <br/><br/>
    <label>Gender : </label>
    <select name='gender' >
        <option>Select Option</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
    </select>
    <br/><br/>
    <label>Interest : </label> 
    <input
    type='checkbox'
    name='cricket'
    // value={formdata.interest.includes('cricket')}
    />
    Cricket
    <input
    type='checkbox'
    name='football'
    // value={formdata.interest.includes('football')}
    />
    Football
    <input
    type='checkbox'
    name='reading'
    // value={formdata.interest.includes('reading')}
    />
    Reading
    <br/><br/>
    <label>Birth Date : </label>
     <input
      type='date'
      name='birthDate'
      // value={formdata.birthDate}
      placeholder='Enter your Birth Date'
    />

    <br/><br/>
    <button>Submit</button>
   </form>
   </>
  )
}

export default FormData