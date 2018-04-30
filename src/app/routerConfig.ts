import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path : 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'index',
        component: IndexComponent
    }
];

