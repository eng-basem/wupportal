import { AngularOpenlayersModule } from 'ngx-openlayers';

import { NgModule } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// HttpModule is deprecated
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule, MatPaginatorIntl } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';
import { AppRouterModule } from 'app/app-router.module';

import { DetailsComponent } from 'app/views/details';
import { FilterComponent } from 'app/views/filter';
import { MappingComponent } from 'app/views/mapping';

import { UserTableComponent } from 'app/views/admin/users/user.table';
import { ActivityTableComponent } from 'app/views/admin/activities/activity.table';
import { OrganisationsTableComponent } from 'app/views/admin/organisations/organisation.table';
import { ProviderTableComponent } from 'app/views/admin/provider/provider.table';
import { ProviderApprovalTableComponent } from 'app/views/admin/provider/provider-approval.table';

import { LoginFormComponent } from 'app/views/admin/login/login.form';
import { AdminComponent } from 'app/views/admin/admin.component';
import { UserFormComponent } from 'app/views/admin/users/user.form';
import { OrganisationFormComponent } from 'app/views/admin/organisations/organisation.form';
import { OrganisationAdminComponent } from 'app/views/admin/organisations/organisation.admin';
import { ActivityFormComponent } from 'app/views/admin/activities/activity.form';
import { RegisterFormComponent } from 'app/views/admin/users/register.form';

import { ActivityService } from 'app/services/activity.service';
import { ProviderService } from 'app/services/provider.service';
import { LocationService } from 'app/services/location';
import { NominatimService } from 'app/services/nominatim';
import { ValidationService } from 'app/services/validation.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { Constants } from 'app/services/constants';

import { SuburbSelectionComponent } from 'app/views/admin/dialog/popup.suburb.selection';
import { AddressFormComponent } from 'app/views/admin/addresses/address.form';

import { DeleteDialogComponent } from 'app/views/admin/dialog/delete.dialog';
import { DeleteActionComponent } from 'app/views/admin/actions/delete.action';
import { OrganisationSelectionComponent } from 'app/views/admin/dialog/organisation-selection.dialog';

import { PaginatorComponent } from 'app/views/admin/table/paginator.table';
import { PaginatorLabels } from 'app/views/admin/table/paginator.labels';

@NgModule({
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,

		DetailsComponent,
		FilterComponent,
		MappingComponent,

		UserTableComponent,
		OrganisationsTableComponent,
		ActivityTableComponent,
		ProviderTableComponent,
		ProviderApprovalTableComponent,

		LoginFormComponent,
		RegisterFormComponent,
		AdminComponent,
		ActivityFormComponent,
		OrganisationFormComponent,
		OrganisationAdminComponent,
		UserFormComponent,

		SuburbSelectionComponent,
		AddressFormComponent,
		DeleteDialogComponent,
		DeleteActionComponent,
		OrganisationSelectionComponent,

		PaginatorComponent
	],
	imports: [
		AngularOpenlayersModule,
		// HttpModule is deprecated
		HttpModule,
		HttpClientModule,

		BrowserAnimationsModule,
		BrowserModule,
		AppRouterModule,

		MatButtonModule,
		MatExpansionModule,
		MatCardModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
		MatSortModule,
		MatTabsModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		MatPaginatorModule,
		MatDialogModule,
		MatChipsModule,
		MatListModule,
		MatDatepickerModule,
		MatCheckboxModule,
		MatStepperModule
	],
	providers: [
		ActivityService,
		ProviderService,
		LocationService,
		NominatimService,
		Constants,
		ValidationService,
		AuthenticationService,
		{ provide: MatPaginatorIntl, useClass: PaginatorLabels }
	],
	entryComponents: [
		SuburbSelectionComponent,
		AddressFormComponent,
		DeleteDialogComponent,
		OrganisationSelectionComponent
	], exports: [
		MatNativeDateModule,
	]
})

export class AppModule { }
