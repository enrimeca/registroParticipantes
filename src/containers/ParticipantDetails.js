import React, { Fragment } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import '../assets/styles/containers/ParticipantDetails.scss';
import Loader from '../components/Loader';
import Error from '../containers/Error';
import Participant from '../components/Participant';
import api from '../api';

import Modal from '../components/Modal'

class ParticipantDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();    
  }

  componentWillUnmount(){   
    $('body').removeClass('modal-open');   
    $('.modal-backdrop').remove()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.participants.read(this.props.match.params.participanteId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDeleteParticipant = async e =>{
    this.setState({ loading: true, error: null });

    try {
      await api.participants.remove(this.props.match.params.participanteId);
      this.setState({ loading: false });

      this.props.history.push('/participantes');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

    const participant = {
      name : this.state.data.name,
      lastName : this.state.data.lastName,    
      email : this.state.data.email, 
      twitter :'twitter',
      job : this.state.data.job
    }

    return (
      <Fragment>
        <div className="ParticipantDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col ParticipantDetails__hero-attendant-name">
                <h1 className="text__hero">
                  Participante:
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Participant formData={participant} />
            </div>            
          </div>
          <div className="row">
           <div className="col-md-6 text-center">               
              <div>
                <Link
                  className="btn btn-primary m-3" 
                  to={`/participantes/${this.state.data._id}/edit`}
                >
                  Editar
                </Link>
                <button className="btn btn-danger m-3"
                data-toggle="modal" data-target="#exampleModal"
                >Eliminar
                </button>
                <Modal 
                  onDeleteParticipant={this.handleDeleteParticipant}
                />
              </div>                
            </div> 
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ParticipantDetails