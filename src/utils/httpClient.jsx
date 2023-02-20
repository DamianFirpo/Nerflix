
const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA5MGM5YjQ5OTFhZTllY2FkZmYyZjZkZWIyZWJiYyIsInN1YiI6IjYzZDgzNDBmMjJkZjJlMDA4NDNiNTFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_TN1DbpH6rVH3wo2mOyp3siSp2uwrrDXlFwK4tc4yo",
         "Content-Type": "application/json;charset=utf-8"
      },
    })
    .then((result) => result.json())
}