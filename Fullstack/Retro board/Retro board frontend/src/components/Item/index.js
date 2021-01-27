import { connect } from 'react-redux';
import Item from './Item';
import { upVote, addComment, dragDropItem } from '../../pages/Board/store/boardActions';

const mapDispatchToProps = {
  upVote,
  addComment,
  dragDropItem,
};

export default connect(null, mapDispatchToProps)(Item);
