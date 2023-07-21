import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { getUsersData } from './getUsersData';
import { getCompaniesData } from './getCompaniesData';
import { renderUsersTable } from './renderUsersTable';
import { renderCompaniesTable } from './renderCompaniesTable';
import { assignUsersToCompanies } from './assignUsersToCompanies';

window.onload = () => {
  renderUsersTable();
  renderCompaniesTable();
};
getCompaniesData().then(function (companies) {
  getUsersData().then(function (users) {
    assignUsersToCompanies(companies, users);
  });
});

