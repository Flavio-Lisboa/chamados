import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-acompanhar-chamado',
  templateUrl: './acompanhar-chamado.component.html',
  styleUrls: ['./acompanhar-chamado.component.css']
})
export class AcompanharChamadoComponent implements OnInit {

  formAcompanharChamado: FormGroup = this.fb.group({
    titulo: [''],
    nomeUsuario: [''],
    descricao: [''],
    dataCriacao: ['', Validators.required],
    status: [''],
    atendente: [''],
    telUsuario: ['']
  })

  formUpdateChamado: FormGroup = this.fb.group({
    atendenteId: [''],
    status: ['']
  })


  formComentario: FormGroup = this.fb.group({
    userId: [''],
    atendenteId: [''],
    comentario: [''],
    chamadoId: ['']
  });

  chamado: any;
  userId = this.route.snapshot.paramMap.get('userId');
  user: any;

  displayedColumns: string[] = ['nome', 'comentario'];
  dataSource: any;

  constructor(private fb: FormBuilder, private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
    this.getChamado();
  }

  getUser() {
    this.service.userData(this.route.snapshot.paramMap.get('userId')).pipe(
      tap((res:any) => this.user = res),
      finalize(() => this.desabilitarCampos())
    ).subscribe();
  }

  getChamado() {
    this.service.getChamado(this.route.snapshot.paramMap.get('id')).pipe(
      tap((res:any) => this.chamado = res),
      finalize(() => { this.preencherForm(), this.getComentarios()})
    ).subscribe();
  }

  desabilitarCampos() {
    if (this.user.role === 'USER') {
      this.formAcompanharChamado?.disable();
    } else if (this.user.role === 'ATENDENTE') {
      this.formAcompanharChamado.get('titulo')?.disable();
      this.formAcompanharChamado.get('nomeUsuario')?.disable();
      this.formAcompanharChamado.get('telUsuario')?.disable();
      this.formAcompanharChamado.get('atendente')?.disable();
      this.formAcompanharChamado.get('dataCriacao')?.disable();
    }
  }

  preencherForm() {
    this.formAcompanharChamado.patchValue({
      titulo: this.chamado.titulo,
      nomeUsuario: this.chamado.usuario.nome,
      dataCriacao: this.chamado.dataFormatada,
      status: this.chamado.status,
      descricao: this.chamado.descricao,
      atendente: this.chamado?.atendente == null ? "Sem atendimento" : this.chamado?.atendente?.nome,
      telUsuario: this.chamado.usuario.telefone
    });
  }

  updateChamado() {
    this.formUpdateChamado.patchValue({
      atendenteId: this.userId,
      status: this.formAcompanharChamado.get('status')?.getRawValue()
    });

    this.service.updateChamado(this.chamado.id, this.formUpdateChamado.value).pipe(
      tap((res:any) => this.chamado = res),
      finalize(() => this.preencherForm())
    ).subscribe()
  }

  deleteChamado() {
    this.service.deleteChamado(this.chamado.id).pipe(
      finalize(() => {
        alert('Chamado excluído com sucesso!');
        setTimeout(() => {
          this.router.navigate(['/tabela', this.userId])
        }, 1000);
      })
    ).subscribe();
  }

  addComentario() {
    if (this.user.role === 'USER') {
      this.formComentario.patchValue({
        userId: this.userId,
        chamadoId: this.chamado.id
      });
    } else {
      this.formComentario.patchValue({
        atendenteId: this.userId,
        chamadoId: this.chamado.id
      });
    }
   
    this.service.addComentario(this.formComentario.value).pipe(
      finalize(() => { this.getComentarios(), this.limpaCampo() } )
    ).subscribe();
  }

  getComentarios() {
    this.service.getComentario(this.chamado.id).pipe(
      tap((res:any) => this.dataSource = res)
    ).subscribe();
  }

  limpaCampo() {
    this.formComentario.patchValue({comentario: ''})
  }
}
