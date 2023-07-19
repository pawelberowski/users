export function getCompaniesData() {
  return fetch('http://localhost:3000/companies').then((response) =>
    response.json(),
  );
}
