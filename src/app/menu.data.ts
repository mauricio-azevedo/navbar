import {MenuModel} from './menu.model'

export const menuData: MenuModel[] = [
  {
    id: 1,
    level: 1,
    label: 'menu',
    path: '/1'
  },
  {
    id: 2,
    level: 1,
    label: 'menu',
    menuList: [
      {
        id: 3,
        level: 2,
        parentMenu: 2,
        label: 'menu',
        path: '/2'
      },
      {
        id: 4,
        level: 2,
        parentMenu: 2,
        label: 'menu',
        menuList: [
          {
            id: 5,
            level: 3,
            parentMenu: 4,
            label: 'menu',
            path: '/3'
          },
          {
            id: 6,
            level: 3,
            parentMenu: 4,
            label: 'menu',
            path: '/4'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    level: 1,
    label: 'menu',
    path: '/5'
  },
  {
    id: 8,
    level: 1,
    label: 'menu',
    menuList: [
      {
        id: 9,
        level: 2,
        parentMenu: 8,
        label: 'menu',
        path: '/6'
      },
      {
        id: 10,
        level: 2,
        parentMenu: 8,
        label: 'menu',
        menuList: [
          {
            id: 11,
            level: 3,
            parentMenu: 10,
            label: 'menu',
            path: '/7'
          }
        ]
      }
    ]
  },
]
