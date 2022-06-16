const dropDownInfo = {
  ISSUE: {
    title: '이슈 필터',
    menus: [
      {
        name: '열린 이슈',
        queryKey: 'status',
        method: 'set',
        queryValue: 'open',
      },
      {
        name: '닫힌 이슈',
        queryKey: 'status',
        method: 'set',
        queryValue: 'closed',
      },
    ],
  },
  ASSIGNEE: {
    title: '담당자 필터',
    menus: [
      { name: '담당자가 없는 이슈', queryKey: 'assignee', method: 'delete' },
      {
        name: 'happyGyu',
        imgUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
        queryKey: 'assignee',
        method: 'append',
        queryValue: 'happyGyu',
      },
      {
        name: 'healtheloper',
        imgUrl: 'https://avatars.githubusercontent.com/u/58503584?v=4',
        queryKey: 'assignee',
        method: 'append',
        queryValue: 'healtheloper',
      },
      {
        name: 'ikjo93',
        imgUrl: 'https://avatars.githubusercontent.com/u/82401504?v=4',
        queryKey: 'assignee',
        method: 'append',
        queryValue: 'closeikjo93d',
      },
    ],
  },
  LABEL: {
    title: '레이블이 없는 이슈',
    menus: [
      { name: '레이블이 없는 이슈', queryKey: 'label', method: 'delete' },
      {
        name: '레이블1',
        queryKey: 'label',
        method: 'append',
        queryValue: 124123,
      },
      {
        name: '레이블2',
        queryKey: 'label',
        method: 'append',
        queryValue: 12412312,
      },
      {
        name: '레이블3',
        queryKey: 'label',
        method: 'append',
        queryValue: 1241233345,
      },
    ],
  },
  MILESTONE: {
    title: '마일스톤 필터',
    menus: [
      { name: '마일스톤이 없는 이슈', queryKey: 'milestone', method: 'delete' },
      {
        name: '마일스톤1',
        queryKey: 'milestone',
        method: 'append',
        queryValue: 123214,
      },
      {
        name: '마일스톤2',
        queryKey: 'milestone',
        method: 'append',
        queryValue: 1232145,
      },
    ],
  },
  WRITER: {
    title: '작성자 필터',
    menus: [
      {
        name: 'happyGyu',
        imgUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
        queryKey: 'writer',
        method: 'append',
        queryValue: 'happyGyu',
      },
      {
        name: 'healtheloper',
        imgUrl: 'https://avatars.githubusercontent.com/u/58503584?v=4',
        queryKey: 'writer',
        method: 'append',
        queryValue: 'healtheloper',
      },
      {
        name: 'ikjo93',
        imgUrl: 'https://avatars.githubusercontent.com/u/82401504?v=4',
        queryKey: 'writer',
        method: 'append',
        queryValue: 'closeikjo93d',
      },
    ],
  },
};

export default dropDownInfo;
