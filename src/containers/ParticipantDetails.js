import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/containers/ParticipantDetails.scss';
import confLogo from '../assets/images/logoGral.jpg';
import Loader from '../components/Loader';
import Error from '../containers/Error';
import Participant from '../components/Participant';
import api from '../api';

class ParticipantDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
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
                  to={`/participants/${participant.id}/edit`}
                >
                  Editar
                </Link>
                <button className="btn btn-danger m-3">Eliminar</button>
              </div>                
            </div> 
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ParticipantDetails