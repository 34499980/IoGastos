import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutePaths } from './enums/path.enums';
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
},
{
    
  path: AppRoutePaths.CATEGORY,
  loadChildren: ()=> import('../app/modules/Categories/category.routes')

},{
    
  path: AppRoutePaths.FEE,
  loadChildren: ()=> import('../app/modules/Fee/fee.routes')

},
{
    
  path: AppRoutePaths.SETTINGS,
  loadChildren: ()=> import('../app/modules/Settings/settings.routes')

},{
    
  path: AppRoutePaths.SUMMARY,
  loadChildren: ()=> import('../app/modules/Summary/summary.routes')

},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
