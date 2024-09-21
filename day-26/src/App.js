import './App.css';
import { Formik,Field,Form } from 'formik';

function App() {
  return (
    <div >
      <Formik initialValues={{
        name:"",
        phone:"",
        password:"",
        gender:""
        income:"",

      }}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        <form>
          <label>Name :</label>
          <Field name="name" type ="name"></Field>
          <br/><br/>
          <label>Phone :</label>
          <Field name="phone" type ="number"/>
          <br/><br/>
          <label>Password :</label>
          <Field name="password" type ="password"/>
          <br/><br/>
          <label>Gender :</label>
          <br/><br/>
          <label>Male :</label>
          <Field name="gender"  value="male" type ="radio"/>
          <label>Female :</label>
          <Field name="gender" value="female" type ="radio"/>
          <br/><br/>
          <label>Date :</label>
          <Field name="date" type ="date"/>
          <br/><br/>
          <label>Income :</label>
          <Field name="income" as="select">
            <option  value="0">rs 0</option>
            <option  value="1000">rs 1000</option>
            <option  value="100000">rs 100000</option>
          </Field>
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
}

export default App;
