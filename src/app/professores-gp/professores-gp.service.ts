import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfessoresGpModel } from './professores-gp.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get<ProfessoresGpModel[]>(`${environment.api_Url_ProfGp}/professores`);
  }

save(professorObj : ProfessoresGpModel){
 return this.httpClient.post<ProfessoresGpModel>(`${environment.api_Url_ProfGp}/professores`, professorObj);
}

delete(id :number){
  // return this.httpClient.delete('http://localhost:8080/professores/' +id);
  return this.httpClient.delete(`${environment.api_Url_ProfGp}/professores/${id}`);
}

getOne(id :number) {
  return this.httpClient.get<ProfessoresGpModel>(`${environment.api_Url_ProfGp}/professores/${id}`);
}

update(id : number, professorObj : ProfessoresGpModel) {
  return this.httpClient.patch<ProfessoresGpModel>(`${environment.api_Url_ProfGp}/professores/${id}`, professorObj);
}
}
