import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Navi } from './components/navi/navi';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { EventBinding } from './databinding/event/event';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property/property';
import { Style } from './databinding/style/style';
import { TwoWayBinding } from './databinding/two-way/two-way';
import { SuppliersList } from './components/suppliers-list/suppliers-list';
import { SupplierDetails } from './components/supplier-details/supplier-details';

export const routes: Routes = [
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' },
  { path: 'suppliers', component: SuppliersList },
  { path: 'suppliers/:id', component: SupplierDetails },
  { path: 'home', component: Home },
  { path: 'navi', component: Navi },
  { path: 'attribute', component: Attribute },
  { path: 'class', component: Class },
  { path: 'event', component: EventBinding },
  { path: 'interpolation', component: Interpolation },
  { path: 'property', component: PropertyBinding },
  { path: 'style', component: Style },
  { path: 'two-way', component: TwoWayBinding },
];
