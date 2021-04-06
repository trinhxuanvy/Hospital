import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SlideComponent } from './layouts/slide/slide.component';
import { ServiceComponent } from './layouts/service/service.component';
import { WebcomeComponent } from './layouts/webcome/webcome.component';
import { ServiceHotComponent } from './layouts/service-hot/service-hot.component';
import { TeamComponent } from './layouts/team/team.component';
import { ConsultsComponent } from './layouts/consults/consults.component';
import { ExperienceComponent } from './layouts/experience/experience.component';
import { NewsComponent } from './layouts/library/library.component';
import { BodyComponent } from './layouts/body/body.component';
import { LoginComponent } from './layouts/login/login.component';
import { SetUpTimeComponent } from './layouts/set-up-time/set-up-time.component';

const router: Routes = [
    { path: '', component: BodyComponent },
    { path: 'dat-lich-hen', component: SetUpTimeComponent,

    },
    { path: 'dang-nhap', component: LoginComponent},
    { path: 'dang-xuat', redirectTo: 'dang-nhap', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(router),
        FormsModule,
        CarouselModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [
        SlideComponent,
        ServiceComponent,
        WebcomeComponent,
        ServiceHotComponent,
        TeamComponent,
        ConsultsComponent,
        ExperienceComponent,
        NewsComponent,
        LoginComponent,
        BodyComponent,
        SetUpTimeComponent,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}