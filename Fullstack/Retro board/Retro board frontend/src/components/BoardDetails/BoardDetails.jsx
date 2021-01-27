import React from 'react';

const BoardDetails = ({ boardDetails, isBoardDetailsLoading }) => (
  <>
    <h4>This is board details component</h4>
    {isBoardDetailsLoading && <div>loading...</div>}
    <div>
      <ul>
        {boardDetails.items.map(item => (
          <li key={item.itemId}>{item.text}</li>
        ))}
      </ul>
    </div>
  </>
);

export default BoardDetails;
