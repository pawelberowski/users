export function getTableRow(companyObject) {
  const row = document.createElement('tr');
  const companyNameData = document.createElement('td');
  const usersList = document.createElement('ol');

  companyObject.users?.forEach((user) => {
    const userData = document.createElement('li');
    userData.innerText = `name: ${user.name} email: ${user.email}`;
    usersList.append(userData);
  });

  companyNameData.innerText = `${companyObject.name}`;
  usersList.title = `${companyObject.users?.length || 0}`;
  row.append(companyNameData, usersList);
  return row;
}
