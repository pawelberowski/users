export function getTableRow(companyName, [users]) {
  const row = document.createElement('tr');
  const companyNameData = document.createElement('td');
  const usersList = document.createElement('ul');

  users.forEach((user) => {
    const userData = document.createElement('li');
    userData.innerText = `name:${user.name} email:${user.email}`;
    usersList.append(userData);
  });

  companyNameData.innerText = `${companyName}`;
  usersList.title = `${users.length}`;
  row.append(companyNameData, usersList);
  return row;
}
