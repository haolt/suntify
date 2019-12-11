import { connect } from 'react-redux';
import Sidebar from './component';

const mapStateToProps = state => (
  {
    isAuthenticated: state.tokenReducer.isAuthenticated,
  }
);

export default connect(mapStateToProps, null)(Sidebar);