import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserlistComponent } from './components/userlist/userlist.component';


const routes: Routes =[
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserlistComponent,
    },
    {
        path: 'user-details/:id',
        component: UserDetailComponent
    }
    
]
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule {

}