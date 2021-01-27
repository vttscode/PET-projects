import { mockApi } from '../../../app/store/api';

const initialMockedBoard = {
  board: {
    boardId: 10,
    title: 'Mocked board',
    columns: [
      {
        id: 'first',
        name: 'Went well',
        note: 'happy',
        inputs: [],
        items: [
          {
            columnId: 'first',
            itemId: '6d6aeefb-86eb-423c-8374-e83ef253076c',
            text: 'First Column First Item',
            voteCount: 3,
            comments: [
              {
                id: '7d6aeefb-86eb-423c-8374-e83ef253076c',
                text: 'This is mocked comment',
              },
            ],
          },
          {
            columnId: 'first',
            itemId: '6d6aeefb-86eb-423c-8374-e83ef253076d',
            text: 'First Column Second Item',
            voteCount: 2,
            comments: [],
          },
        ],
        isVotable: true,
      },
      {
        id: 'second',
        name: 'To improve',
        note: 'we-will-rock-you-in-the-future',
        inputs: [],
        items: [],
        isVotable: true,
      },
      {
        id: 'third',
        name: 'Action items',
        note: 'queue-the-rocky-music',
        inputs: [],
        items: [],
        isVotable: false,
      },
    ],
  },
};

const createdBoardResponse = {
  boardId: 11,
};

const boardApi = {
  updateVote: () => mockApi.get('', { data: true }),
  addItem: () => mockApi.get('', { data: true }),
  addComment: () => mockApi.get('', { data: true }),
  fetchBoard: () => mockApi.get('', { data: initialMockedBoard }),
  updateItemsMock: () => mockApi.get('', { data: true }),
  createBoard: () => mockApi.get('', { data: createdBoardResponse }),
};

export default boardApi;
