import { Component } from '@angular/core';
import { AppRoutePaths } from './enums/path.enums';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Categorias', url: `${AppRoutePaths.CATEGORY}/${AppRoutePaths.CATEGORIESLIST}`, icon: 'copy' },
    { title: 'Cuotas', url: `${AppRoutePaths.FEE}/${AppRoutePaths.FEE}`, icon: 'journal' },
    { title: 'Configuraciones', url: `${AppRoutePaths.SETTINGS}/${AppRoutePaths.SETTINGS}`, icon: 'settings' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
