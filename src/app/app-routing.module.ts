import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import SummaryHomeComponent from './modules/home/home/summary-home.component';
import { CategoriesResolver } from './resolver/categories.resolver';
import { TypesResolver } from './resolver/types.resolver';

const routes: Routes = [
  {
    path: ``,     
    component: SummaryHomeComponent,
    resolve: {
        types: TypesResolver,
        categories: CategoriesResolver
    }      
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
