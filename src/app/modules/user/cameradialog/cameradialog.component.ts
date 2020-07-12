import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserComponent } from '../user.component';

@Component({
	selector: 'app-cameradialog',
	templateUrl: './cameradialog.component.html',
	styleUrls: [ './cameradialog.component.scss' ]
})
export class CameradialogComponent implements OnInit {
	constructor(public dialogRef: MatDialogRef<UserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {}
	onSelectedFile(event) {
		console.log(event);
	}
}
