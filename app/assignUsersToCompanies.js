export function assignUsersToCompanies(companies, users) {
  users.forEach(function(user) {
    const companyUri = user.uris.company;
    const matchingCompany = companies.find(function(company) {
      return company.uri === companyUri;
    });
    if(!matchingCompany) {
      return;
    }
    matchingCompany.users = matchingCompany.users || [];
    matchingCompany.users.push(user);
  });
}