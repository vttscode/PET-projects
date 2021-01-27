import { connect } from 'react-redux';
import BoardDetails from './BoardDetails';
import { initiateBoardDetailsFetch } from '../../pages/Boards/store/boardDetailsSlice';
import {
  getBoard,
  getBoardDetails,
  isBoardDetailsLoading,
} from '../../pages/Boards/store/boardDetailsSelectors';

const mapStateToProps = state => ({
  board: getBoard(state),
  boardDetails: getBoardDetails(state),
  isBoardDetailsLoading: isBoardDetailsLoading(state),
});

const mapDispatchToProps = {
  initiateBoardDetailsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails);
