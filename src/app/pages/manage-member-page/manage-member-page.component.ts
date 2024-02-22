import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/model/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-manage-member-page',
  templateUrl: './manage-member-page.component.html',
  styleUrls: ['./manage-member-page.component.css']
})
export class ManageMemberPageComponent {
  members: Member[] = this.memberservice.members.getValue();
  // roles = ['ADHERENT', 'MANAGER', 'JURY'];
  roles = [
    { name: 'ADHERENT' },
    { name: 'MANAGER' },
    { name: 'JURY' },
  ];
  update(member:Member, role:string){
    member.role = role;
    this.memberservice.update(member);
  }

  constructor(private memberservice: MemberService) { }
  ngOnInit() {
    this.memberservice.members.subscribe(
      (response) => {
        console.log("new members list:");
        this.members = response;
      }
    );
  }
}
