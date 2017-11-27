import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/models/user';
import { MatTableDataSource } from '@angular/material';

import { DataServiceFactory, UserService } from 'app/services/data.service.factory';
import { DataService } from 'app/services/data.service';
import { Constants } from 'app/views/common/constants';
import { AbstractTableComponent } from 'app/views/admin/table.abstract';

@Component({
	selector: 'edit-users',
	styleUrls: ['../table.abstract.css'],
	templateUrl: '../table.abstract.html',
	providers: [
		{ provide: UserService, useFactory: DataServiceFactory(UserService), deps: [HttpClient] },
	]
})
export class UsersTableComponent extends AbstractTableComponent {

	displayedColumns: Map<string, string> = new Map(
		['username', constants.user],
		['fullname', constants.nameString],
		['phone', constants.phone],
	);

	dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

	constructor(
		@Inject(UserService) protected dataService: DataService,
		public constants: Constants) {
		super(dataService, constants);
	}
}
