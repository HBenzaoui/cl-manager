import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

export class Clients extends Component {
  render() {
    const { clients } = this.props;

    if (clients) {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <i className="fas fa-users" /> Clients{' '}
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped table-hover ">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.lastName} {client.firstName}
                  </td>
                  <td>{client.email}</td>
                  <td>{parseFloat(client.balance).toFixed(2)} DA</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-info  btn-sm b"
                    >
                      <i className="fas fa-info-circle" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
