import { connect } from 'react-redux';
import AddBoard from './AddBoard';
import { createBoard } from '../../pages/Board/store/boardActions';

const mapDispatchToProps = {
  createBoard,
};

export default connect(null, mapDispatchToProps)(AddBoard);
