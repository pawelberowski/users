export function getUserRow(name, email) {
  const row = document.createElement('tr');
  const nameData = document.createElement('td');
  const emailData = document.createElement('td');
  nameData.innerText = `${name}`;
  emailData.innerText = `${email}`;
  row.append(nameData, emailData);
  return row;
}
