import { connect } from 'react-redux';
import SignupModalComponent from '../../components/signup-modal';
import Actions from '../../reducers/actions';

const mapStateToProps = state => ({
  isSignupModalOpen: state.login.isSignupModalOpen,
});
const mapDispatchToProps = dispatch => ({
  closeSignupModal: () => {
    const action = {
      type: Actions.login.closeSignupModal,
    };

    dispatch(action);
  },
  swapModal: () => {
    const action = {
      type: Actions.login.swapModal,
    };

    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupModalComponent);
