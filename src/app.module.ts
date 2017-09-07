 import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TitleComponent} from "./title.component";
import {RibbonComponent} from "./ribbon.component";
import {InlineSVGModule} from "ng-inline-svg";
import {HttpClientModule} from "@angular/common/http";
import {SplitComponent} from "./split.component";
import {ProjectPanelComponent} from "./project-panel.component";
import {MatButtonModule, MatFab} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        InlineSVGModule,
        HttpClientModule,
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        TitleComponent,
        RibbonComponent,
        SplitComponent,
        ProjectPanelComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}