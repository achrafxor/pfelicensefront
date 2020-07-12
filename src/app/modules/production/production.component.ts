import { Component, OnInit } from '@angular/core';
import { ProductionService } from './production.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductiondialogComponent } from './productiondialog/productiondialog.component';

@Component({
	selector: 'app-production',
	templateUrl: './production.component.html',
	styleUrls: [ './production.component.scss' ]
})
export class ProductionComponent implements OnInit {
	updatedata = {};

	producitonlist: any[];
	listofconcession = {};
	listofpuit = {};
	listofproducts = {};
	datatopass = [];
	productionData = {
		qte: Number,
		cout: Number,
		date: Date
	};

	constructor(private _productionService: ProductionService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.productionServiceManager();
		this.ConcessionServiceManager();
		this.productServiceManager();
		this.puitServiceManager();
	}
	//?call production service
	productionServiceManager(): void {
		this._productionService.getProductionlist().subscribe((data) => {
			this.addToDataTable(data);
			this.FilterDataTable();
		});
	}
	//?call FK's services
	ConcessionServiceManager(): void {
		this._productionService.getConcessionlist().subscribe((data) => {
			console.log('concessiondata');
			console.log(data);
			this.fillConcessionForeignKeys(data);
		});
	}

	puitServiceManager(): void {
		this._productionService.getWellList().subscribe((data) => {
			console.log('puit data');
			console.log(data);
			this.fillPuitForeignKeys(data);
		});
	}

	productServiceManager(): void {
		this._productionService.getProductList().subscribe((data) => {
			console.log('product data');
			console.log(data);
			this.fillProductsForeignKeys(data);
		});
	}
	//?fill FK's  in an object
	fillPuitForeignKeys(data: any) {
		let counter = 0;
		data.forEach((element) => {
			this.listofpuit[counter] = element.id_puit;
			counter++;
		});
		console.log('this.listofPuit id');
		console.log(this.listofpuit);
	}
	fillProductsForeignKeys(data: any) {
		let counter = 0;
		data.forEach((element) => {
			this.listofproducts[counter] = element.id_produit;
			counter++;
		});
		console.log('this.listofproduct id');
		console.log(this.listofproducts);
	}
	fillConcessionForeignKeys(data: any) {
		let counter = 0;
		data.forEach((element) => {
			this.listofconcession[counter] = element.id_concession;
			counter++;
		});
		console.log('this.listofconcession id');
		console.log(this.listofconcession);
	}
	//?add data to table
	addToDataTable(data: any) {
		this.producitonlist = data;
	}
	//?filter data of table
	FilterDataTable() {
		console.log(this.producitonlist);
		this.producitonlist.forEach((element) => {
			for (var key in element) {
				if (key == 'produit_ligne_production') {
					element[key] = element[key].type;
				}
				if (key == 'concession_ligne_production') {
					element[key] = element[key].nom_concession;
				}
				if (key == 'puit_ligne_production') {
					element[key] = element[key].nom_puit;
				}
			}
		});
	}
	openAddDialogue() {
		/*
			
			TODO
			receive the data from mat dialogue

		*/
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.listofconcession);
		this.datatopass.push(this.listofproducts);
		this.datatopass.push(this.listofpuit);
		this.datatopass.push({ type: 'add' });
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(ProductiondialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.productionData.qte = data[0];
			this.productionData.cout = data[1];
			this.productionData.date = data[2];

			this._productionService.postProduction(this.productionData, data[4], data[3], data[5]).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});
		this.datatopass = [];
	}
	openUpdateDialogue(data: any) {
		/*
		*/
		this.updatedata = data;
		let idligne = this.updatedata['id_ligne'];
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.listofconcession);
		this.datatopass.push(this.listofproducts);
		this.datatopass.push(this.listofpuit);
		this.datatopass.push({ type: 'edit' });
		this.datatopass.push(this.updatedata);
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(ProductiondialogComponent, dialogConfig);

		//?after closed
		dialogRef.afterClosed().subscribe((data) => {
			this.productionData.qte = data[0];
			this.productionData.cout = data[1];
			this.productionData.date = data[2];

			this._productionService.putProduction(this.productionData, idligne, data[4], data[3], data[5]).subscribe(
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
