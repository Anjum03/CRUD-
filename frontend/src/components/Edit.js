import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {

    const [inpval, setINP] = useState({
       
        email: "",
        password:""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

  return (
    <div className='container'>
      <NavLink to="/">home2</NavLink>
      <form>
        <div className='mt-4'>
        <div className='row'>
          <div class="mmb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" onChange={setdata} value={inpval.email} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" onChange={setdata} value={inpval.password} name='password' class="form-control" id="exampleInputPassword1" />
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </div>
      </form>

    </div>
  )
}

export default Edit