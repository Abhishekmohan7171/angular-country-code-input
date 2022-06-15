import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile-code';

  onCountryChange(event: { dialCode: any; name: any; iso2: any; })
{
  console.log(event.dialCode);
  console.log(event.name);
  console.log(event.iso2);
}

}
