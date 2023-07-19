import './styles/styles.scss';
import { getUsersData } from './getUsersData';
import { getCompaniesData } from './getCompaniesData';
import { renderUserData } from './renderUserData';

window.onload = () => {
  renderUserData();
};

getUsersData().then((data) => console.log(data));
getCompaniesData().then((data) => console.log(data));
