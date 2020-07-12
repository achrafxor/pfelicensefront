import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WellComponent } from '../well.component';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-welldialog',
	templateUrl: './welldialog.component.html',
	styleUrls: [ './welldialog.component.scss' ]
})
export class WelldialogComponent implements OnInit {
	listOfConcessionId = [];
	foreignkeys = [];
	welldata = [];
	ActionType = '';
	clickedrow = {};
	constructor(public dialogRef: MatDialogRef<WellComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		console.log(this.data);
		this.filllistConcessionId();
		this.fillActionType();
		this.fillWellDataWithClickedRow();
	}
	/*
  
 
  TODO
  submit form
  */
	filllistConcessionId() {
		let counter = 0;
		this.foreignkeys.push(this.data[0]);
		this.foreignkeys.forEach((element) => {
			for (var key in element) {
				if (element.hasOwnProperty(key)) {
					this.listOfConcessionId[counter] = element[key];
				}
				counter++;
			}
		});
		console.log(this.listOfConcessionId);
	}
	fillActionType() {
		this.ActionType = this.data[1].type;
		console.log(this.ActionType);
	}
	fillWellDataWithClickedRow() {
		if (this.ActionType == 'edit') {
			this.clickedrow = this.data[2];
			this.welldata[0] = this.clickedrow['nom_puit'];
		}
	}
	onSubmit() {
		this.dialogRef.close(this.welldata);
	}
}
