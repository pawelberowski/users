import { getExpandButton } from './getExpandButton';

export function getTableRow(companyObject) {
  const row = document.createElement('tr');
  const companyCell = document.createElement('td');
  const usersCell = document.createElement('td');
  const usersList = document.createElement('ol');
  const numberOfUsers = companyObject.users?.length || 0;
  const expandButton = getExpandButton(numberOfUsers);

  if (expandButton) {
    usersCell.append(expandButton);
  }

  usersCell.append(usersList);
  companyObject.users?.forEach((user) => {
    const userData = document.createElement('li');
    userData.innerText = `name: ${user.name} email: ${user.email}`;
    usersList.append(userData);
  });

  companyCell.innerText = `${companyObject.name}`;
  usersList.title = numberOfUsers;
  row.append(companyCell, usersCell);
  return row;
}
