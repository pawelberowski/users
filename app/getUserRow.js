export function getUserRow(name, email) {
  const row = document.createElement('div');
  const paragraph = document.createElement('p');
  paragraph.innerText = `name: ${name} email: ${email} `;
  row.append(paragraph);
  return row;
}
