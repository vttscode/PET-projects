import api from '../../../app/store/api';

const boardDertailsMock = {
  id: 'mockBoardID',
  items: [
    {
      columnId: 'third',
      itemId: '003d86f4-41eb-4c9b-8d32-8e09cec81ab6',
      text: 'This is mocked item text 1',
    },
    {
      columnId: 'third',
      itemId: '003d86f4-41eb-4c9b-8d32-8e09cec81ab7',
      text: 'This is mocked item text 2',
    },
  ],
};

const boardDetailsApi = {
  getBoardDetails: boardId => api.get(`boarddetails/${boardId}`, boardDertailsMock),
};

export default boardDetailsApi;
