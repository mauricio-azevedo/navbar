import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {NavigationComponent} from './navigation/navigation.component'
import {MenuOneComponent} from './pages/menu-one/menu-one.component'
import {MenuTwoComponent} from './pages/menu-two/menu-two.component'
import {MenuThreeComponent} from './pages/menu-three/menu-three.component'
import {MenuFourComponent} from './pages/menu-four/menu-four.component'
import {MenuFiveComponent} from './pages/menu-five/menu-five.component'
import {MenuSixComponent} from './pages/menu-six/menu-six.component'
import {MenuSevenComponent} from './pages/menu-seven/menu-seven.component'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuOneComponent,
    MenuTwoComponent,
    MenuThreeComponent,
    MenuFourComponent,
    MenuFiveComponent,
    MenuSixComponent,
    MenuSevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule
{
}
