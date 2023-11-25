import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent implements OnInit {

  isLoading = true;
  user: any;

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.service.userData(this.route.snapshot.paramMap.get('id')).pipe(
      tap((res:any) => this.user = res),
      finalize(() => this.isLoading = false)  
    ).subscribe();
  }
}
