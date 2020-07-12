import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConcessionComponent } from 'src/app/modules/concession/concession.component';
import { element } from 'protractor';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { threadId } from 'worker_threads';

@Component({
	selector: 'app-dialogueadd',
	templateUrl: './dialogueadd.component.html',
	styleUrls: [ './dialogueadd.component.scss' ]
})
export class DialogueaddComponent implements OnInit {
	labels = [];
	foreignkeys = [];

	constructor(public dialogRef: MatDialogRef<ConcessionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		this.fetchlabels();
		this.buildform();
		this.addForeignKeys();
	}
	onNoClick(): void {}
	save(): void {}

	fetchlabels() {
		let counter2 = 0;
		let counter = 0;
		let dalength = this.data.length;

		if (dalength > 1) {
			this.data.forEach((element) => {
				for (var key in element) {
					if (element.hasOwnProperty(key) && counter2 == 0) {
						this.labels[counter] = { name: key, type: element[key] };
					}
					counter++;
				}
				counter2++;
			});
		} else {
			console.log('this.data');
			console.log(this.data);
			for (var key in this.data) {
				if (this.data.hasOwnProperty(key)) {
					this.labels[counter] = { name: key, type: this.data[key] };
				}
				counter++;
			}
		}
	}
	addForeignKeys() {
		let counter2 = 0;
		let counter = 0;
		this.data.forEach((element) => {
			if (counter2 > 0) {
				this.foreignkeys.push(element);
				console.log(this.foreignkeys);
			}
			counter2++;
		});
		console.log('this.foreignkeys');
		console.log(this.foreignkeys);
	}
	form = new FormArray([]);
	addToForm() {
		this.form.push(new FormControl(''));
	}
	buildform() {
		for (let i = 0; i < this.labels.length; i++) {
			this.addToForm();
		}
	}
	close() {
		this.dialogRef.close(this.form.value);
	}

	isNumber(val): boolean {
		return typeof val === 'number';
	}
}
