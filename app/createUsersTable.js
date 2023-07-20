export function createUsersTable() {
  const usersTable = document.createElement('table');
  const tableHead = document.createElement('thead');
  const firstRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  const emailHeader = document.createElement('th');
  const tableBody = document.createElement('tbody');

  usersTable.classList.add('table');
  nameHeader.innerText = 'User Name';
  nameHeader.scope = 'col';
  emailHeader.innerText = 'email';
  emailHeader.scope = 'col';
  firstRow.append(nameHeader, emailHeader);
  tableHead.append(firstRow);
  usersTable.append(tableHead, tableBody);
  return usersTable;
}
