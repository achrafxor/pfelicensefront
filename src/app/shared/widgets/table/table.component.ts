import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

/*{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neonx', weight: 20.1797, symbol: 'Ne' }*/

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnChanges, OnInit {
	@Input() ELEMENT_DATA: any = [];
	@Output() updateClicked: EventEmitter<Object> = new EventEmitter();
	clickedobject = {};
	datasource: any;

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		this.datasource = this.ELEMENT_DATA;
		this.transformData();
		this.fillDataFromSource();
	}
	ngOnInit(): void {}

	//?columns is an array of object of name and label dynamicly filled by the data source
	columns: Array<any> = [];

	//?is object of type ('name','label') to be pushed in our columns array
	object: any;

	/*
	?The values of this array are the column orders and keys of *matHeaderRowDef, which need to be 
	?identical to the names of the ng-container column sections (specified via the matColumnDef directive).
	*/
	displayedColumns: string[];

	fillDataFromSource() {
		let datarowscounter = 0;
		let datacolumnscounter = 0;
		this.ELEMENT_DATA.forEach((element) => {
			for (var key in element) {
				this.object = {};
				if (element.hasOwnProperty(key) && datarowscounter == 0) {
					if (datacolumnscounter == 0) {
						this.object.name = key;
						this.object.label = key;
						this.columns[0] = this.object;
					} else {
						this.object.name = key;
						this.object.label = key;
						this.columns.push(this.object);
					}

					datacolumnscounter++;
				}
			}
			datarowscounter++;
		});

		this.displayedColumns = this.columns.map((column) => column.name);
	}
	transformData() {
		//fill the displayed columns

		//this.displayedColumns.push('action');
		this.datasource.forEach((element) => {
			element['Action'] = '<h1>Action</h1>';
		});
	}
	sendUpdateData(row: any) {
		this.clickedobject = row;

		this.updateClicked.emit(this.clickedobject);
	}
}
