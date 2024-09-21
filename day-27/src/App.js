

import './App.css';
import {useFormik} from 'formik';
import * as Yup from  'yup';

function App() {


    const Formik =useFormik({
      initialValues:{
        email:"",
        password:""
      },
      validationSchema:Yup.object({
        email:Yup.string()
        .email('Invalid email address')
        .required('Required'), 
        password:Yup.string()
        .min(6,'Passowrd must be at least 6 character')
        .required('Required'),
        phone:Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid phone number')
        
        .required('Required'),
      }),
      onSubmit:values =>{
        console.log(values);
      }
    })
  
  


  return (
    <>
   <form onSubmit={Formik.handleSubmit}>
    <div>
      <label>Email : </label>
      <input type='email' placeholder='Enter Email Here'  id='email' {...Formik.getFieldProps('email')}/>
      {Formik.touched.email && Formik.errors.email?(<div>{Formik.errors.email}</div>):null}
      <br/><br/>
      <label>Password : </label>
      <input type='password' placeholder='Enter Password Here'  id='password' {...Formik.getFieldProps('password')}/>
      {Formik.touched.password && Formik.errors.password?(<div>{Formik.errors.password}</div>):null}
      <br/><br/>
      <label>Mobile Number : </label>
      <input type='number' placeholder='Enter Mobile Number Here'  id='phone' {...Formik.getFieldProps('phone')}/>
      {Formik.touched.phone && Formik.errors.phone?(<div>{Formik.errors.phone}</div>):null}
      <br/><br/>
      <button >Submit</button>
    </div>
   </form>
    </>
  );
}

export default App;
