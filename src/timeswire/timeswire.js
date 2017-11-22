import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  loadTimeswireStart,
} from './state';
import Timeswires from './components/timeswires';
import {selectTimeswires, selectIsBussy} from './state/timeswire-selectors';

class Timeswire extends PureComponent {
  componentDidMount() {
    const {initialize} = this.props;
    initialize();
  }

  render() {
    return (<Timeswires
      {...this.props}
    />);
  }
}

Timeswire.propTypes = {
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  timeswires: selectTimeswires(state),
  isBussy: selectIsBussy(state),
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(loadTimeswireStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeswire);
