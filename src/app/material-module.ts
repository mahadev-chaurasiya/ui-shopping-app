import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import {FormsModule} from "@angular/forms"
import {MatCardModule} from "@angular/material/card"
import {MatButtonModule} from "@angular/material/button"

@NgModule({
    exports:[
        MatInputModule,
        FormsModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule{}