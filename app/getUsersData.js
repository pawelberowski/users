export function getUsersData() {
  return fetch('http://localhost:3000/users').then((response) =>
    response.json(),
  );
}
