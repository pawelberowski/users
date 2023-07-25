import { addEventListenerToButton } from './addEventListenerToButton';

export function getExpandButton(numberOfUsers, usersList) {
  if (numberOfUsers === 0) {
    return null;
  }
  const expandButton = document.createElement('button');
  expandButton.classList.add('btn', 'btn-primary');
  expandButton.innerText = `Expand ${numberOfUsers} users`;

  addEventListenerToButton(expandButton, usersList, numberOfUsers);

  return expandButton;
}
