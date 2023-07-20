export function getCompanyRow(name) {
  const row = document.createElement('tr');
  const nameData = document.createElement('td');
  nameData.innerText = `${name}`;
  row.append(nameData);
  return row;
}