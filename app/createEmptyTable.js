export function createEmptyTable() {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const firstRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  table.classList.add('table');
  tableHead.append(firstRow);
  table.append(tableHead, tableBody);
  return table;
}
