import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';

class Suppliers extends Component {
  state = {
    totalOwnS: null
  };

  render() {
    const { suppliers } = this.props;

    if (suppliers) {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-user-friends" /> Sppliers
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Totat: <span className="text-danger">300.00 DA</span>
              </h5>
            </div>
          </div>
          <table className="table table-stripped table-hover ">
            <thead className="table-iverse">
              <tr>
                <th>Supllier</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {suppliers.map(supplier => (
                <tr key={supplier.id}>
                  <td>
                    {supplier.firstName} {supplier.lastName}
                  </td>
                  <td>{supplier.email}</td>
                  <td
                    className={classnames({
                      'text-danger': supplier.balance > 0,
                      'text-success': supplier.balance < 0
                    })}
                  >
                    {parseFloat(supplier.balance).toFixed(2)}
                  </td>
                  <td>
                    <Link
                      to={`/suppliers/${supplier.id}`}
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

Suppliers.propTypes = {
  firestore: PropTypes.object.isRequired,
  suppliers: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'suppliers' }]),
  connect((state, props) => ({
    suppliers: state.firestore.ordered.suppliers
  }))
)(Suppliers);
