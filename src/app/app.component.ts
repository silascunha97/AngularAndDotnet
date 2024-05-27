import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        NavbarComponent,
        AppComponent,
        PessoasComponent

    ]
})
export class AppComponent {
  title = 'Crud com ASP.NET core C#';
}


