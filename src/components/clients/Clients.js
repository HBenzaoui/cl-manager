import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

export class Clients extends Component {
  state = {
    totalOwed: null
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      //Add balances
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);

      return { totalOwed: total };
    }
    return null;
  }

  render() {
    const { clients } = this.props;
    const { totalOwed } = this.state;

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
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Total:{' '}
                <span className="text-danger">
                  {parseFloat(totalOwed).toFixed(2)} DA
                </span>
              </h5>
            </div>
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
      return <Spinner />;
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
