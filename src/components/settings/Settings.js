import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setDisableBalanceAdd,
  setDisableBalanceEdit,
  setAllowRegister
} from '../../actions/settingsActions';

class Settings extends Component {
  handleAllowRegister = () => {
    const { setAllowRegister } = this.props;
    setAllowRegister();
  };

  handleDisableBalanceAdd = () => {
    const { setDisableBalanceAdd } = this.props;
    setDisableBalanceAdd();
  };
  handleDisableBalanceEdit = () => {
    const { setDisableBalanceEdit } = this.props;
    setDisableBalanceEdit();
  };

  render() {
    const {
      disableBalanceAdd,
      disableBalanceEdit,
      allowRegister
    } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashbaord
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registeration</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegister"
                  style={{ cursor: 'pointer' }}
                  checked={!!allowRegister}
                  onChange={this.handleAllowRegister}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance on Add</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceAdd"
                  style={{ cursor: 'pointer' }}
                  checked={!!disableBalanceAdd}
                  onChange={this.handleDisableBalanceAdd}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance on Edit</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceEdit"
                  style={{ cursor: 'pointer' }}
                  checked={!!disableBalanceEdit}
                  onChange={this.handleDisableBalanceEdit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  setting: PropTypes.object.isRequired,
  setDisableBalanceAdd: PropTypes.func.isRequired,
  setDisableBalanceEdit: PropTypes.func.isRequired,
  setAllowRegister: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setDisableBalanceAdd, setDisableBalanceEdit, setAllowRegister }
)(Settings);
