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
