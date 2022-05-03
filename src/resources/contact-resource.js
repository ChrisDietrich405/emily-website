import http from "./http";

const ENDPOINT = "/api/contact";

export class ContactResource {
  static sendForm(data) {
    return http.post(ENDPOINT, data);
  }
}
