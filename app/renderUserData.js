import { getUsersData } from './getUsersData';
import { getUserRow } from './getUserRow';

export function renderUserData() {
  const wrapper = document.querySelector('.wrapper');
  if (!wrapper) {
    return;
  }
  getUsersData().then((users) => {
    users.forEach(function ({ name, email }) {
      const row = getUserRow(name, email);
      wrapper.append(row);
    });
  });
}
