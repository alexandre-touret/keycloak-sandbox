import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './app-authguard';
import { RandomWordComponent } from './random-word/random-word.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: 'random',
    component: RandomWordComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
