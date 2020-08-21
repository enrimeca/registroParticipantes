import React from 'react'

function Modal(props) {
  return (
    <div className="modal" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">¿Está seguro?</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Está a punto de eliminar este participante.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
            <button type="button"
             onClick={props.onDeleteParticipant}
             className="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
