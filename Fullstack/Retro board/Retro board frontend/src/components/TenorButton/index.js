import { connect } from 'react-redux';
import TenorButton from './TenorButton';
import { setModalState } from '../../pages/Board/store/tenor/tenorSlice';

const mapDispatchToProps = {
  setModalState,
};

export default connect(null, mapDispatchToProps)(TenorButton);
