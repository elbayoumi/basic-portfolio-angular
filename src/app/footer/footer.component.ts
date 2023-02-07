import { Component } from '@angular/core';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faAddressCard=faAddressCard;
  faMessage=faMessage;
  faLinkedin=faLinkedin;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
}
