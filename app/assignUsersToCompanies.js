function createCompaniesDictionary(companiesArray) {
  const companiesDictionary = {};
  companiesArray.forEach(function (company) {
    companiesDictionary[company.uri] = company;
  });
  return companiesDictionary;
}
export function assignUsersToCompanies(companies, users) {
  const companiesDictionary = createCompaniesDictionary(companies);
  users.forEach(function (user) {
    const companyUri = user.uris.company;
    const matchingCompany = companiesDictionary[companyUri];
    if (!matchingCompany) {
      return;
    }
    matchingCompany.users = matchingCompany.users || [];
    matchingCompany.users.push(user);
  });
  return Object.values(companiesDictionary);
}
