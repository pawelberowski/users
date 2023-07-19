import './styles/styles.scss';
import { getUsersData } from './getUsersData';

window.onload = () => {
  const heading = document.querySelector('.heading');
  heading.textContent = 'It\'s working!';
};

getUsersData().then((data) => console.log(data));
