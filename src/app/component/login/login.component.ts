import { Component, OnInit, Input } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class LoginComponent implements OnInit {
  @Input() adressMailsignup: string;
  @Input() passwordsignup: string;
  @Input() adressMailsignin: string;
  @Input() passwordsignin: string;
  constructor(private modalService: NgbModal) {

  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1500/700`);
  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      let intermediateVar = result.split(" ");
      this.adressMailsignup = intermediateVar[0];
      this.passwordsignup = intermediateVar[1];
      console.log(this.adressMailsignup);
      console.log(this.passwordsignup);
    }, (reason) => {
    });
  }
  openSignIn(contentsignin) {
    this.modalService.open(contentsignin, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      let intermediateVar = result.split(" ");
      this.adressMailsignin = intermediateVar[0];
      this.passwordsignin = intermediateVar[1];
      console.log(this.adressMailsignin);
      console.log(this.passwordsignin);
    }, (reason) => {
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
