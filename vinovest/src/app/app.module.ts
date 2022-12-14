import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { TitleComponent } from './components/about-us/title/title.component';
import { LeveragingComponent } from './components/about-us/leveraging/leveraging.component';
import { TeamComponent } from './components/about-us/team/team.component';

// import angular material ui
import { MemberCardComponent } from './components/about-us/member-card/member-card.component';
import { NotransformBtnComponent } from './shared/ui/notransform-btn/notransform-btn.component';
import { AnimationBtnComponent } from './shared/ui/animation-btn/animation-btn.component';
import { WineInvestCardComponent } from './components/layouts/footer/wine-invest-card/wine-invest-card.component';
import { FooterListComponent } from './components/layouts/footer/footer-list/footer-list.component';
import { EmailBtnComponent } from './shared/ui/email-btn/email-btn.component';
import { HomeComponent } from './page/home/home.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { HistoryCardComponent } from './components/home/history-card/history-card.component';
import { PortfolioComponent } from './components/home/portfolio/portfolio.component';
import { PortfolioImageCardComponent } from './components/home/portfolio-image-card/portfolio-image-card.component';
import { LearnMoreBtnComponent } from './shared/ui/learn-more-btn/learn-more-btn.component';
import { HowItWorksComponent } from './components/home/how-it-works/how-it-works.component';
import { IntersectImgDirective } from './directives/intersect/intersect-img.directive';

/* Material */
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';
import { ScrollRevealDirective } from './directives/scrollReveal/scroll-reveal.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    TitleComponent,
    LeveragingComponent,
    TeamComponent,
    MemberCardComponent,
    NotransformBtnComponent,
    AnimationBtnComponent,
    WineInvestCardComponent,
    FooterListComponent,
    EmailBtnComponent,
    HomeComponent,
    HeroComponent,
    HistoryCardComponent,
    PortfolioComponent,
    PortfolioImageCardComponent,
    LearnMoreBtnComponent,
    HowItWorksComponent,
    IntersectImgDirective,
    ScrollRevealDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    CountUpModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
