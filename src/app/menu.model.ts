export interface MenuModel
{
  id: number
  label: string
  level: number
  path?: string
  parentMenu?: number
  isOpened?: boolean
  isActive?: boolean
  hasActiveChild?: boolean
  menuList?: MenuModel[]
}
