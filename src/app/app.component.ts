import { Component } from '@angular/core';
import { AppRoutePaths } from './enums/path.enums';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //Comandos para deployar
  /*
ionic build
ionic capacitor build android
npx cap open android
if(error){
  npm uninstall -g ionic
  npm uninstall -g @ionic/cli
  npm install -g @ionic/cli
}



  */
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Categorias', url: `${AppRoutePaths.CATEGORY}/${AppRoutePaths.CATEGORIESLIST}`, icon: 'copy' },
    { title: 'Cuotas', url: `${AppRoutePaths.FEE}/${AppRoutePaths.FEE}`, icon: 'journal' },
    { title: 'Resumen por mes', url:  `${AppRoutePaths.SUMMARY}/${AppRoutePaths.BYMONTH}`, icon: 'eye' },
    { title: 'Resumen por año', url:  `${AppRoutePaths.SUMMARY}/${AppRoutePaths.BYYEAR}`, icon: 'eye' },
    { title: 'Configuraciones', url: `${AppRoutePaths.SETTINGS}/${AppRoutePaths.SETTINGS}`, icon: 'settings' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
