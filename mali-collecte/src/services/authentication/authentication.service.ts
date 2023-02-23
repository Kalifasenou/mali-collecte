import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginRetrieve } from 'src/models/ilogin/ilogin';
import { IRegister, IRegisterRetrieve } from 'src/models/iregister/iregister';
import { URL_REGISTER, URL_LOGIN } from 'src/utils/constant';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  register(registerPayload: IRegister): Observable<IRegisterRetrieve> {
    return this.httpClient.post<IRegisterRetrieve>(
      URL_REGISTER,
      registerPayload
    );
  }

  login(loginPayload: any): Observable<ILoginRetrieve> {
    return this.httpClient.post<ILoginRetrieve>(`http://localhost:8080/api/auth/signin`, loginPayload);
  }
}
