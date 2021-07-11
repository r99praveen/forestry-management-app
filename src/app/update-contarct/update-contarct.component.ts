import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-update-contarct',
  templateUrl: './update-contarct.component.html',
  styleUrls: ['./update-contarct.component.css']
})
export class UpdateContarctComponent implements OnInit {

  id: number = 0;
  contract: Contract = new Contract();
  constructor(private contractService: ContractService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.contractService.getContractById(this.id).subscribe(data => {
      this.contract = data; console.log(data);
    },
      error => console.log(error));

  }

  onSubmit() {
    this.contractService.UpdateContract(this.contract).subscribe(data => {
      this.navigateToContracts();
    }, error => console.log(error));
    alert("Sucessfully updated the Contract Detail");
  }


  navigateToContracts() {
    this.router.navigate(['/contracts']);
  }

}
