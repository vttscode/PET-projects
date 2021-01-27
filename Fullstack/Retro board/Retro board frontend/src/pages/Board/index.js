import { connect } from 'react-redux';
import Board from './Board';
import { getBoardColumns, getBoardTitle, hasBoardCreated } from './store/boardSelectors';
import { fetchBoard } from './store/boardActions';

const mapStateToProps = state => ({
  columns: getBoardColumns(state),
  title: getBoardTitle(state),
  boardCreated: hasBoardCreated(state),
});

const mapDispatchToProps = {
  fetchBoard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
