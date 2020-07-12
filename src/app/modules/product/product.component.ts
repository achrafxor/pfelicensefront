import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueaddComponent } from 'src/app/shared/widgets/dialogueadd/dialogueadd.component';
import { DialogueupdateComponent } from 'src/app/shared/widgets/dialogueupdate/dialogueupdate.component';
import { ProductService } from './product.service';
import { ProductdialogueComponent } from './productdialogue/productdialogue.component';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {
	updatedata = {};
	productList: any[];
	datatopass = [];

	productData = {
		qualite: String,
		type: String,
		qte: Number
	};

	constructor(private _productService: ProductService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.serviceManager();
	}
	/*
      TODO
      pass data to open adddialiogue
      TODO
      fetch the clicked row
      TODO
      pass data to open editdialiogue    
   */
	serviceManager(): void {
		this._productService.getProductList().subscribe((data) => {
			this.productList = data;
		});
	}

	openDialogAdd() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push({ type: 'add' });
		dialogConfig.data = this.datatopass;

		const dialogRef = this.dialog.open(ProductdialogueComponent, dialogConfig);

		dialogRef.afterClosed().subscribe((data) => {
			this.productData.qualite = data[0];
			this.productData.type = data[1];
			this.productData.qte = data[2];
			this._productService.postProduct(this.productData).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});

		this.datatopass = [];
	}
	openUpdateDialogue(data: any) {
		this.updatedata = data;
		console.log(this.updatedata);
		let id_produit = this.updatedata['id_produit'];
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push({ type: 'edit' });
		this.datatopass.push(this.updatedata);
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(ProductdialogueComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.productData.qualite = data[0];
			this.productData.type = data[1];
			this.productData.qte = data[2];
			console.log(this.productData);

			this._productService.putProduct(this.productData, id_produit).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});

		this.datatopass = [];
		this.updatedata = [];
	}
}
