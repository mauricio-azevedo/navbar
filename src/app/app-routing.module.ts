import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {NavigationComponent} from './navigation/navigation.component'
import {MenuOneComponent} from './pages/menu-one/menu-one.component'
import {MenuTwoComponent} from './pages/menu-two/menu-two.component'
import {MenuThreeComponent} from './pages/menu-three/menu-three.component'
import {MenuFourComponent} from './pages/menu-four/menu-four.component'
import {MenuFiveComponent} from './pages/menu-five/menu-five.component'
import {MenuSixComponent} from './pages/menu-six/menu-six.component'
import {MenuSevenComponent} from './pages/menu-seven/menu-seven.component'

const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      {path: '1', component: MenuOneComponent},
      {path: '2', component: MenuTwoComponent},
      {path: '3', component: MenuThreeComponent},
      {path: '4', component: MenuFourComponent},
      {path: '5', component: MenuFiveComponent},
      {path: '6', component: MenuSixComponent},
      {path: '7', component: MenuSevenComponent}
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule
{
}
