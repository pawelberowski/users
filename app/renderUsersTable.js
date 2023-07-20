import { getUsersData } from './getUsersData';
import { getUserRow } from './getUserRow';
import { createUsersTable } from './createUsersTable';

export function renderUsersTable() {
  const wrapper = document.querySelector('.wrapper');
  if (!wrapper) {
    return;
  }
  const usersTable = createUsersTable();

  getUsersData().then((users) => {
    users.forEach(function ({ name, email }) {
      const row = getUserRow(name, email);
      row.scope = 'row';
      usersTable.querySelector('tbody').append(row);
    });
  });
  wrapper.append(usersTable);
}
