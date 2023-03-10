import Api from "./Api";

class MainApi extends Api {
  constructor() {
    super({
      baseUrl: "https://api.moexp.nomoredomains.work",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const token = localStorage.getItem("token");
    if (token) this._options.headers.authorization = "Bearer " + token;
  }

  getToken() {
    return this._options.headers.authorization;
  }

  setToken(token) {
    if (!this._options.headers) this._options.headers = {};
    this._options.headers.authorization = "Bearer " + token;
    localStorage.setItem("token", token);
  }

  removeToken() {
    if (this._options?.headers?.authorization) {
      delete this._options?.headers?.authorization;
    }
    localStorage.removeItem("token");
  }

  saveMovie(data) {
    return this._fetch("/movies", "POST", data);
  }

  deleteMovie(id) {
    return this._fetch("/movies/" + id, "DELETE");
  }

  movies() {
    return this._fetch("/movies", "GET");
  }

  userPatch(data) {
    return this._fetch("/users/me", "PATCH", data);
  }

  check() {
    return this._fetch("/users/me", "GET");
  }

  login(data) {
    return this._fetch("/signin", "POST", data);
  }

  register(data) {
    return this._fetch("/signup", "POST", data);
  }
}

export const mainApi = new MainApi();
