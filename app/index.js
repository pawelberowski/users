import './styles/styles.scss';
import { getUsersData } from './getUsersData';
import { getCompaniesData } from './getCompaniesData';
import { renderUsersTable } from './renderUsersTable';

window.onload = () => {
  renderUsersTable();
};
getUsersData().then((data) => console.log(data));
getCompaniesData().then((data) => console.log(data));
