import { connect } from 'react-redux';
import { searchForGif, setModalState, selectGif } from '../../pages/Board/store/tenor/tenorSlice';
import TenorGifList from './TenorGifList';
import {
  getGifLinks,
  getTenorColumnId,
  getTenorItemId,
} from '../../pages/Board/store/tenor/tenorSelectors';

const mapStateToProps = state => ({
  gifLinks: getGifLinks(state),
  columnId: getTenorColumnId(state),
  itemId: getTenorItemId(state),
});

const mapDispatchToProps = {
  searchForGif,
  setModalState,
  selectGif,
};

export default connect(mapStateToProps, mapDispatchToProps)(TenorGifList);
