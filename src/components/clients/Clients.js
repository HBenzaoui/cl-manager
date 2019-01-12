import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Clients extends Component {
  render() {
    const clients = [
      {
        id: 1,
        firstName: 'Hamza',
        lastName: 'Benzaoui',
        email: 'hamzapdd@gmail.com',
        phone: '+213-661-45-81-97',
        balance: '100'
      },
      {
        id: 2,
        firstName: 'Hadjer',
        lastName: 'Barka',
        email: 'Hadjer@gmail.com',
        phone: '+213-00-00-00-00',
        balance: '1300'
      },
      {
        id: 3,
        firstName: 'Mido',
        lastName: 'Benz',
        email: 'mido@gmail.com',
        phone: '+213-661-45-81-97',
        balance: '150.10'
      }
    ];

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

export default Clients;
