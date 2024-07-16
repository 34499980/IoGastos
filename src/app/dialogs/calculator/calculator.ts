import {Component, inject, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';

export interface DialogData {
    name: string;
    object: string;
  }
  export interface ValueAndSymbol{
    value: number;
    symbol: string;
  }
@Component({
    selector: 'calculator',
    templateUrl: 'calculator.html',
    styleUrls: ['./calculator.scss'],
    standalone: true,
    imports: [ FormsModule,        
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        CommonModule,
        NgFor,
        NgIf,
        IonicModule]
  })
  export class Calculator {
    name: string;
    object: string;
    firstValue: number = -999999;
    auxValue: string = '';
    auxSymbol: string = '';
    arrayValues: ValueAndSymbol[] = [];
    result: number = -999999;
    view: string = '';
    public dialogRef = inject(MatDialogRef<DialogData>);
    constructor(    
      @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    ) {
        this.object = data.object;
        this.name = data.name;
    }
    input(value: string){
      this.auxValue += value;
      this.view += value;
      
    }
    addValue(value: number){
      if(this.firstValue == -999999){
        this.firstValue = value;
      } else {     
        const item: ValueAndSymbol = {
          value: value,
          symbol: this.auxSymbol
        };
        this.arrayValues.push(item);       
      }
    }
    addSymbol(value: string){
      this.auxSymbol = value;
      this.view += value;
     
      if(this.result != -999999){
        this.arrayValues = [];
        this.view = this.result.toString() + value;
        this.firstValue =  -999999;        
        this.auxValue = this.result.toString();
        this.result = -999999;
      }
       const num = parseFloat(this.auxValue);
       this.addValue(num);
       this.auxValue = '';
      
     
    }
    clean(){
      this.firstValue = -999999;
      this.auxSymbol = '';
      this.view = '';
      this.arrayValues = [];
      this.auxValue = '';
      this.result = -999999;
    }
    calculate(){
      const num = parseFloat(this.auxValue);
      this.addValue(num);
      let result = this.firstValue;
      this.arrayValues.forEach(element => {
        switch (element.symbol){
          case '+':
            result += element.value;
             break;
          case '-':
            result -= element.value;
             break;
          case '/':
            result = result / element.value;
             break;
          case '*':
            result = result * element.value;
             break;
        }
      });
      this.result = result;
      this.view = '';
    }
    cancel(): void {
      this.dialogRef.close(false);
    }
    accept(){
      this.dialogRef.close(this.result);
    }
  }