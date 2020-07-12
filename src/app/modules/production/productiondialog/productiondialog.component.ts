import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductionComponent } from '../production.component';
@Component({
	selector: 'app-productiondialog',
	templateUrl: './productiondialog.component.html',
	styleUrls: [ './productiondialog.component.scss' ]
})
export class ProductiondialogComponent implements OnInit {
	listOfConcessionId = [];
	listOfProductId = [];
	listOfPuitId = [];
	foreignkeys = [];
	productiondata = [];
	ActionType = '';
	clickedrow = {};

	constructor(public dialogRef: MatDialogRef<ProductionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		console.log('productiondialogue');
		console.log(this.data);
		this.fillConcessionForeignKeys();
		this.fillProductForeignKeys();
		this.fillPuitForeignKeys();
		this.fillACtionType();
		this.fillProductionDataWithClickedRow();
	}
	fillACtionType() {
		this.ActionType = this.data[3].type;
	}
	fillConcessionForeignKeys() {
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

		this.foreignkeys = [];
	}
	fillProductForeignKeys() {
		let counter = 0;
		this.foreignkeys.push(this.data[1]);
		this.foreignkeys.forEach((element) => {
			for (var key in element) {
				if (element.hasOwnProperty(key)) {
					this.listOfProductId[counter] = element[key];
				}
				counter++;
			}
		});

		this.foreignkeys = [];
	}
	fillPuitForeignKeys() {
		let counter = 0;
		this.foreignkeys.push(this.data[2]);
		this.foreignkeys.forEach((element) => {
			for (var key in element) {
				if (element.hasOwnProperty(key)) {
					this.listOfPuitId[counter] = element[key];
				}
				counter++;
			}
		});

		this.foreignkeys = [];
	}
	fillProductionDataWithClickedRow() {
		if (this.ActionType == 'edit') {
			this.clickedrow = this.data[4];
			this.productiondata[0] = this.clickedrow['qte'];
			this.productiondata[1] = this.clickedrow['cout'];
			this.productiondata[2] = this.clickedrow['date'];
		}
	}
	onSubmit() {
		this.dialogRef.close(this.productiondata);
	}
}
