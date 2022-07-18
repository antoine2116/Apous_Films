import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TMBDService{
  private API_KEY = "a2349344d224a2f6c212b44a64f614c6";
  private API_URL = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(this.API_URL + url + "?api_key=" + this.API_KEY);
  }
}
