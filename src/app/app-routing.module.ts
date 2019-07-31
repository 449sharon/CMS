import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'hotel-create', loadChildren: './pages/hotel-create/hotel-create.module#HotelCreatePageModule' },
  { path: 'hotel-detail', loadChildren: './pages/hotel-detail/hotel-detail.module#HotelDetailPageModule' },
  { path: 'hotel-list', loadChildren: './pages/hotel-list/hotel-list.module#HotelListPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'room-details', loadChildren: './pages/room-details/room-details.module#RoomDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
