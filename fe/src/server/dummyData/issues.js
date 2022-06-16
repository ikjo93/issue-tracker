const issues = [
  {
    id: 13414,
    number: 1,
    subject: '이슈1 제목',
    description: '이슈1 설명',
    writer: 'happyGyu',
    profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
    status: 'open',
    createdDatetime: '2022-06-14T18:00:00',
    assignee: ['happyGyu'],
    labels: [
      {
        id: 124123,
        name: '라벨1',
        color: 'red',
      },
    ],
    milestone: {
      id: 123214,
      name: '마일스톤1',
    },
  },
  {
    id: 212312,
    number: 2,
    subject: '이슈2 제목',
    description: '이슈2 설명',
    writer: 'happyGyu',
    profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
    status: 'closed',
    createdDatetime: '2022-06-14T19:00:00',
    assignee: ['happyGyu', 'healtheloper'],
    labels: [
      {
        id: 124123,
        name: '라벨1',
        color: 'red',
      },
      {
        id: 12412312,
        name: '라벨2',
        color: 'blue',
      },
    ],
    milestones: {
      id: 123214,
      name: '마일스톤1',
    },
  },
  {
    id: 343535,
    number: 3,
    subject: '이슈3 제목',
    description: '이슈3 설명',
    writer: 'healtheloper',
    profileUrl: 'https://avatars.githubusercontent.com/u/58503584?v=4',
    status: 'open',
    createdDatetime: '2022-06-14T19:01:00',
    assignee: ['happyGyu', 'healtheloper'],
    labels: [
      {
        id: 1241233345,
        name: '라벨3',
        color: 'green',
      },
    ],
    milestones: {
      id: 1232145,
      name: '마일스톤2',
    },
  },
  {
    id: 457467,
    number: 4,
    subject: '이슈4 제목',
    description: '이슈4 설명',
    writer: 'healtheloper',
    profileUrl: 'https://avatars.githubusercontent.com/u/58503584?v=4',
    status: 'closed',
    createdDatetime: '2022-06-14T19:02:00',
    assignee: ['healtheloper'],
    labels: [
      {
        id: 124123,
        name: '라벨1',
        color: 'red',
      },
    ],
    milestones: {
      id: 1232145,
      name: '마일스톤2',
    },
  },
  {
    id: 567568,
    number: 5,
    subject: '이슈5 제목',
    description: '이슈5 설명',
    writer: 'ikjo93',
    profileUrl: 'https://avatars.githubusercontent.com/u/82401504?v=4',
    status: 'open',
    createdDatetime: '2022-06-14T19:03:00',
    assignee: ['ikjo93'],
    labels: [
      {
        id: 12412312,
        name: '라벨2',
        color: 'blue',
      },
    ],
    milestones: {
      id: 123214,
      name: '마일스톤1',
    },
  },
];

export default issues;
