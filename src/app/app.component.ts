import { Component } from '@angular/core';
import { AppRoutePaths } from './enums/path.enums';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: AppRoutePaths.HOME, icon: 'home' },
    { title: 'Categorias', url: `${AppRoutePaths.CATEGORY}/${AppRoutePaths.CATEGORIESLIST}`, icon: 'copy' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'copy' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
