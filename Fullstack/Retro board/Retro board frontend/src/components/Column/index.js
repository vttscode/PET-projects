import { connect } from 'react-redux';
import { addColumnInput } from '../../pages/Board/store/boardActions';
import Column from './Column';

const mapDispatchToProps = {
  addColumnInput,
};

export default connect(null, mapDispatchToProps)(Column);
