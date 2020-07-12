import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductComponent } from '../product.component';

@Component({
	selector: 'app-productdialogue',
	templateUrl: './productdialogue.component.html',
	styleUrls: [ './productdialogue.component.scss' ]
})
export class ProductdialogueComponent implements OnInit {
	productdata = [];
	ActionType = '';
	clickedrow = {};

	constructor(public dialogRef: MatDialogRef<ProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		this.fillActionType();
		console.log(this.data);
		this.fillProductDatawithClickerRow();
	}
	fillActionType() {
		this.ActionType = this.data[0].type;
		console.log(this.ActionType);
	}
	fillProductDatawithClickerRow() {
		if (this.ActionType == 'edit') {
			this.clickedrow = this.data[1];
			this.productdata[0] = this.clickedrow['qualite'];
			this.productdata[1] = this.clickedrow['type'];
			this.productdata[2] = this.clickedrow['qte'];
		}
	}
	onSubmit() {
		this.dialogRef.close(this.productdata);
	}
}
