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
Promise.all([getCompaniesData(), getUsersData()]).then(([companies, users]) => {
  console.log(assignUsersToCompanies(companies, users));
});
