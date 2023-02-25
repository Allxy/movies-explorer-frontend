import Api from "./Api";

class MoviesApi extends Api {
  constructor() {
    super({
      baseUrl: "https://api.nomoreparties.co",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  movies() {
    return this._fetch("/beatfilm-movies", "GET");
  }
}

export const moviesApi = new MoviesApi();
