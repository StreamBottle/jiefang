import { HomeService } from './../views/home/home.service';
import { TestQuestionsComponent,TestQuestionsService } from './../views/testQuestions';
import { HandleErrorService } from './../components/handle_error/handle_error.service';
import { GearPanelService } from './../components/gear_panel/gear_panel.service';
import { DashboardService } from './../components/dashboard/dashboard.service';
import { GearPanelComponent } from './../components/gear_panel/gear_panel.component';
import { HandleErrorComponent } from './../components/handle_error/handle_error.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import {CommunicationService} from './../components/communication';

import { MultimeterComponent,MultimeterService } from './../components/multimeter';
import { AppdataService } from './appdata.service';
import { ContentComponent } from './../views/content/content.component';
import { HelpComponent } from './../views/help/help.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

/*
 * 平台和环境引入
 */
import { ENV_PROVIDERS } from '../environment';
import { ROUTES } from './app.routes';
// 最外层的组件
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppService, InternalStateType } from './app.service';

import { HomeComponent } from '../views/home';



import { ReplaceComponent, ReplaceService } from '../views/replace';


/**
 * 内部小组件
 */

import { CloseWindowComponent, CloseWindowService } from '../components/close_window';

import { ButtonClickComponent } from '../components/buttonClick';

import { SwiperComponent } from '../components/swiper';
/**
 * 指令
 */
import { XLargeDirective } from '../directives/x-large';
import { HaloDirective } from '../directives/halo';
import { TwinkleDirective } from '../directives/twinkle';
import { InputDirective } from '../directives/input';
import { FocusDirective } from '../directives/focus';
import { Ficker1Directive, Ficker2Directive } from '../directives/ficker';
import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';

import { PljDiagnosticComponent, PljDiagnosticService } from '../views/plj_diagnostic';

// 应用的一些功能提供商
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppService,
  CloseWindowService,
  ReplaceService,
  AppdataService,MultimeterService,DashboardService,GearPanelService,HandleErrorService,HomeService,
  TestQuestionsService,
  CommunicationService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
};
/**
 * `AppModule 主入口
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    ReplaceComponent,
    ContentComponent,
    ButtonClickComponent,
    SwiperComponent,
    CloseWindowComponent,
    MultimeterComponent,
    DashboardComponent,
    HandleErrorComponent,
    GearPanelComponent,
    TestQuestionsComponent,
    XLargeDirective,
    PerfectScrollbarDirective,
    HaloDirective,
    TwinkleDirective,
    FocusDirective,
    Ficker1Directive,
    Ficker2Directive,
    InputDirective
  ],
  imports: [ // 引入angular模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {


}
