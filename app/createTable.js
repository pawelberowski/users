export function createTable() {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const firstRow = document.createElement('tr');
  const companyNameHeader = document.createElement('th');
  const usersHeader = document.createElement('th');
  const tableBody = document.createElement('tbody');

  table.classList.add('table');
  companyNameHeader.innerText = 'Company';
  usersHeader.innerText = 'Users';

  firstRow.append(companyNameHeader, usersHeader);
  tableHead.append(firstRow);
  table.append(tableHead, tableBody);

  return table;
}
