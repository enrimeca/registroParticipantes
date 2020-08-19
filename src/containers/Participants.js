import React, { Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../containers/Error';

import '../assets/styles/containers/Participants.scss';
import confLogo from '../assets/images/badge-header.svg';
import ParticipantsList from '../components/ParticipantsList';

import api from '../api'

class Participants extends Component {
  state = {
    loading : true,
    error : null,    
    data : undefined
  }
  
  componentDidMount() {
    this.fetchData();
  }
 
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.participants.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render(){

      if(this.state.loading === true) {
        return <Loader />
      }

      if (this.state.error) {
        return <Error error={this.state.error} />;
      }
  
      return (
        <Fragment>
          <div className="Participants">
            <div className="Participants__hero">
              <div className="Participants__container">
                <img
                  className="Participants_conf-logo"
                  src={confLogo}
                  alt="Conf Logo"
                />
              </div>
            </div>
          </div>

          <div className="Participants__container">
            <div className="Participants__buttons">
              <Link to="/participantes/new" className="btn btn-primary">
                Registrar
              </Link>
            </div>

            <ParticipantsList participants={this.state.data} /> 
          </div>
        </Fragment>
      );
  }
}

export default Participants;