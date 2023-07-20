import { createEmptyTable } from './createEmptyTable';
import { getCompaniesData } from './getCompaniesData';
import { getCompanyRow } from './getCompanyRow';

export function renderCompaniesTable() {
  const wrapper = document.querySelector('.wrapper');
  if (!wrapper) {
    return;
  }
  const companiesTable = createEmptyTable();
  const nameHeader = document.createElement('th');
  nameHeader.innerText = 'Company Name';
  nameHeader.scope = 'col';
  companiesTable.querySelector('tr').append(nameHeader);

  getCompaniesData().then((companies) => {
    companies.forEach(({ name }) => {
      const row = getCompanyRow(name);
      row.scope = 'row';
      companiesTable.querySelector('tbody').append(row);
    });
  });
  wrapper.append(companiesTable);
}
