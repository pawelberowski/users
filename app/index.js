import './styles/styles.scss';
import { getUsersData } from './getUsersData';
import { getCompaniesData } from './getCompaniesData';
import { renderUsersTable } from './renderUsersTable';
import { renderCompaniesTable } from './renderCompaniesTable';

window.onload = () => {
  renderUsersTable();
  renderCompaniesTable();
};
getUsersData().then((data) => console.log(data));
getCompaniesData().then((data) => console.log(data));

const list = [
  {
    name: 'company1',
    users: [
      {
        name: 'user1',
        email: 'smy@smth.com',
      },
      {
        name: 'user44',
        email: 'a@b.com',
      },
      {
        name: 'anotheruser',
        email: 'any@here.com',
      },
    ],
  },
];
