const alanProfileURL = 'https://avatars.githubusercontent.com/u/95538993?v=4';
const ikjoProfileURL = 'https://avatars.githubusercontent.com/u/82401504?v=4';
const parkProfileURL = 'https://avatars.githubusercontent.com/u/58503584?v=4';

const issues = [
  {
    id: 1,
    status: 'OPEN',
    subject: '백엔드 기능 구현',
    description: '백엔드',
    writer: 'ikjo',
    profileUrl: ikjoProfileURL,
    createdDateTime: '2022-06-21T21:23:00',
    milestone: {
      id: 1,
      subject: '이슈 트래커 서비스 구현',
      description: '프론트 및 백엔드 구현',
    },
    assignees: [
      {
        memberId: 1,
        identity: 'ikjo',
        name: '익조',
        profileUrl: ikjoProfileURL,
      },
    ],
    labels: [
      {
        id: 1,
        name: 'be',
        description: '백엔드 라벨',
        color: '#333333',
      },
      {
        id: 3,
        name: 'bug',
        description: '버그 해결',
        color: '#444444',
      },
    ],
  },
  {
    id: 2,
    status: 'OPEN',
    subject: '프론트엔드 기능 구현',
    description: '프론트엔드',
    writer: 'happyGyu',
    profileUrl: alanProfileURL,
    createdDateTime: '2022-06-21T21:23:00',
    milestone: {
      id: 1,
      subject: '이슈 트래커 서비스 구현',
      description: '프론트 및 백엔드 구현',
    },
    assignees: [],
    labels: [
      {
        id: 2,
        name: 'fe',
        description: '프론트엔드 라벨',
        color: '#222222',
      },
    ],
  },
  {
    id: 3,
    status: 'OPEN',
    subject: '배포',
    description: '배포',
    writer: 'healtheloper',
    profileUrl: parkProfileURL,
    createdDateTime: '2022-06-21T21:23:00',
    milestone: null,
    assignees: [],
    labels: [],
  },
  {
    id: 4,
    status: 'CLOSED',
    subject: '이슈 4번 제목',
    description: 'ㅇㅇㅇㅇ',
    writer: 'ikjo',
    profileUrl: ikjoProfileURL,
    createdDateTime: '2022-06-22T21:23:00',
    milestone: {
      id: 2,
      subject: '마일스톤 2번 제목',
      description: '마일스톤 2번 설명',
    },
    assignees: [
      {
        memberId: 2,
        identity: 'happyGyu',
        name: '앨런',
        profileUrl: alanProfileURL,
      },
      {
        memberId: 3,
        identity: 'healtheloper',
        name: '파크',
        profileUrl: parkProfileURL,
      },
    ],
    labels: [
      {
        id: 2,
        name: '2번라벨',
        description: '2번 라벨 설명',
        color: '#222222',
      },
    ],
  },
  {
    id: 5,
    status: 'CLOSED',
    subject: '이슈 5번 제목',
    description: 'ㅇㅇㅇㅇ',
    writer: 'happyGyu',
    profileUrl: alanProfileURL,
    createdDateTime: '2022-06-22T21:23:00',
    milestone: {
      id: 2,
      subject: '마일스톤 2번 제목',
      description: '마일스톤 2번 설명',
    },
    assignees: [
      {
        memberId: 2,
        identity: 'happyGyu',
        name: '앨런',
        profileUrl: alanProfileURL,
      },
    ],
    labels: [
      {
        id: 4,
        name: '4번라벨',
        description: '4번 라벨 설명',
        color: '#555555',
      },
    ],
  },
];

export default issues;
