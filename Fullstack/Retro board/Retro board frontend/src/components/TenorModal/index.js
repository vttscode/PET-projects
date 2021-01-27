import { connect } from 'react-redux';
import { setModalState, fetchTrending } from '../../pages/Board/store/tenor/tenorSlice';
import TenorModal from './TenorModal';
import { getGifLinks, getIsModalOpen } from '../../pages/Board/store/tenor/tenorSelectors';

const mapStateToProps = state => ({
  gifLinks: getGifLinks(state),
  isModalOpen: getIsModalOpen(state),
});

const mapDispatchToProps = {
  setModalState,
  fetchTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(TenorModal);
