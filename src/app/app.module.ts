import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the FeedbackService
import { FeedbackService } from './_services/feedback.service';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home/home.component';
import { FeedbackModule } from './feedback/feedback.module'; // Import FeedbackModule here


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule, // Add FormsModule here
        HttpClientModule,
        AppRoutingModule,
        FeedbackModule // Add FeedbackModule here

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        FeedbackService // Ensure FeedbackService is included here
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
