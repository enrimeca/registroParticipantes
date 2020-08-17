import React, { Fragment/*, useState */} from 'react';

const ParticipantForm = ({handleChange, handleSubmit, formData}) => {

  // const [formData, setformData] = useState({})

  // const handleChange = e =>{
  //   setformData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  const handleClick = e =>{
    console.log("Clic en el botón")
  }

  // const handleSubmit = e =>{
  //   e.preventDefault();
  //   console.log('Form ', formData)    
  // }

  return (
    <Fragment>
        <h1>Nuevo Participante</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombres</label>
              <input className="form-control" onChange={handleChange} type="text" name="firstName" value={formData.firstName}></input>
            </div>

            <div className="form-group">
              <label>Apellidos</label>
              <input className="form-control" onChange={handleChange} type="text" name="lastName" value={formData.lastName}></input>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input className="form-control" onChange={handleChange} type="text" name="email" value={formData.email}></input>
            </div>

            <div className="form-group">
              <label>Profesión</label>
              <input className="form-control" onChange={handleChange} type="text" name="jobTitle" value={formData.jobTile}></input>
            </div>
            <button onClick={handleClick} className='btn btn-primary'>Registrar</button>
        </form>
    </Fragment>
  );
}

export default ParticipantForm;
