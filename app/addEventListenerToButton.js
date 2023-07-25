export function addEventListenerToButton(button, usersList, numberOfUsers) {
  return button.addEventListener('click', function () {
    if (usersList.classList.contains('hidden')) {
      usersList.classList.remove('hidden');
      button.innerText = 'Collapse';
      addEventListener(button, usersList, numberOfUsers);
    } else {
      usersList.classList.add('hidden');
      button.innerText = `Expand ${numberOfUsers} users`;
      addEventListener(button, usersList, numberOfUsers);
    }
  });
}
