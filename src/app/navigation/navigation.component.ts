import {Component, OnInit} from '@angular/core'
import {menuData} from '../menu.data'
import {MenuModel} from '../menu.model'
import {NavigationEnd, Router} from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.sass' ]
})
export class NavigationComponent implements OnInit
{
  public activePath: string = ''

  protected readonly menuList: MenuModel[] = menuData

  constructor(
    private router: Router
  )
  {
  }

  public ngOnInit(): void
  {
    this.setActivePath()
    this.setActiveMenu(this.menuList)
  }

  private setActivePath(): void
  {
    this.activePath = this.router.url

    this.router.events.subscribe(value =>
    {
      if (value instanceof NavigationEnd)
      {
        this.activePath = value.url
      }
    })
  }

  public toggleMenu(clickedMenu: MenuModel, menuList: MenuModel[]): void
  {
    this.closeAllMenu(clickedMenu, menuList)

    clickedMenu.isOpened = !clickedMenu.isOpened
  }

  private closeAllMenu(clickedMenu: MenuModel, menuList: MenuModel[]): void
  {
    for (const menu of menuList)
    {
      if (menu.menuList)
      {
        if (clickedMenu !== menu)
        {
          menu.isOpened = false
        }
        this.closeAllMenu(menu, menu.menuList)
      }
    }
  }

  private setActiveMenu(menuList: MenuModel[]): void
  {
    for (const menu of menuList)
    {
      if (menu.path !== this.activePath)
      {
        menu.isActive = false
        menu.menuList
        && this.setActiveMenu(menu.menuList)
      }
      else
      {
        menu.isActive = true

        menu.parentMenu
        && this.openActiveMenuParent(menu.parentMenu, this.menuList)
      }
    }
  }

  private openActiveMenuParent(menuId: number, menuList: MenuModel[]): void
  {
    for (const menu of menuList)
    {
      menu.menuList
      && this.openActiveMenuParent(menuId, menu.menuList)

      if (menu.id === menuId && menu.menuList)
      {
        menu.isOpened = true
        menu.hasActiveChild = true

        menu.parentMenu
        && this.openActiveMenuParent(menu.parentMenu, this.menuList)
      }
    }
  }

}
