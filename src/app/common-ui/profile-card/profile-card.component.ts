import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from "../../helper/pipes/img-url.pipe";

@Component({
    selector: 'app-profile-card',
    standalone: true,
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.css',
    imports: [ImgUrlPipe]
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
