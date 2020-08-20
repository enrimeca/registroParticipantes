import React, { Fragment/*, useState */} from 'react';

const ParticipantForm = ({handleChange, handleSubmit, formData, error}) => {

  const handleClick = e =>{
    console.log("Clic en el botón")
  }

  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombres</label>
              <input className="form-control" onChange={handleChange} type="text" name="name" value={formData.name}></input>
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
              <input className="form-control" onChange={handleChange} type="text" name="job" value={formData.job}></input>
            </div>
            <button onClick={handleClick} className='btn btn-primary'>Registrar</button>

            {error && <p className='text-danger'>{error.message}</p>}
        </form>
    </Fragment>
  );
}

export default ParticipantForm;
