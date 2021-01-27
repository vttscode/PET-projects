import { mockApi } from '../../../app/store/api';

const initialTestBoards = {
  boards: [
    {
      id: 7,
      title: 'Board 7',
      createDate: '2020-09-14 15:12:15',
      columns: [
        {
          name: 'went well',
          quantity: 2,
          color: '#75FFB2',
        },
        {
          name: 'to improve',
          quantity: 3,
          color: '#7D33FF',
        },
        {
          name: 'action items',
          quantity: 2,
          color: '#55ACB2',
        },
        {
          name: 'test 4',
          quantity: 2,
          color: '#17EAB2',
        },
      ],
    },
    {
      id: 8,
      title: 'Board 8',
      createDate: '2020-10-14 10:12:05',
      columns: [
        {
          name: 'went well',
          quantity: 3,
          color: '#75FFB2',
        },
        {
          name: 'to improve',
          quantity: 1,
          color: '#7D33FF',
        },
        {
          name: 'action items',
          quantity: 4,
          color: '#55ACB2',
        },
      ],
    },
    {
      id: 9,
      title: 'Board 9',
      createDate: '2020-09-30 15:00:15',
      columns: [
        {
          name: 'went well',
          quantity: 7,
          color: '#75FFB2',
        },
        {
          name: 'to improve',
          quantity: 2,
          color: '#7D33FF',
        },
        {
          name: 'action items',
          quantity: 5,
          color: '#55ACB2',
        },
      ],
    },
  ],
};

const boardsApi = {
  getBoards: () => mockApi.get('', initialTestBoards),
};

export default boardsApi;
