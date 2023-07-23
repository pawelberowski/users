import { createTable } from './createTable';
import { getCompaniesData } from './getCompaniesData';
import { getUsersData } from './getUsersData';
import { assignUsersToCompanies } from './assignUsersToCompanies';
import { getTableRow } from './getTableRow';

export function renderTable() {
  const wrapper = document.querySelector('.wrapper');
  if (!wrapper) {
    return;
  }
  const table = createTable();
  Promise.all([getCompaniesData(), getUsersData()]).then(
    ([companies, users]) => {
      const tableData = assignUsersToCompanies(companies, users);
      tableData.forEach((element) => {
        const row = getTableRow(element);
        table.querySelector('tbody').append(row);
      });
    },
  );
  wrapper.append(table);
}
