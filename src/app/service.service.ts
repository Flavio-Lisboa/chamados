import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  route = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public login(email: any) {
    return this.http.get(`${this.route}user/login?email=${email}`);
  }

  public userData(id: any) {
    return this.http.get(`${this.route}user?id=${id}`);
  }

  public saveUser(user: any) {
    return this.http.post(`${this.route}user`, user);
  }

  public saveChamado(chamado: any) {
    return this.http.post(`${this.route}chamados`, chamado);
  }

  public getUserChamados(userId: any) {
    return this.http.get(`${this.route}chamados/users/${userId}`);
  }

  public getChamado(chamadoId: any) {
    return this.http.get(`${this.route}chamados/${chamadoId}`);
  }

  public updateChamado(chamadoId: any, data: any) {
    return this.http.put(`${this.route}chamados/${chamadoId}`, data);
  }

  public deleteChamado(chamadoId: any) {
    return this.http.delete(`${this.route}chamados/${chamadoId}`);
  }
}
