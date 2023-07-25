export function getExpandButton(numberOfUsers) {
  if (numberOfUsers === 0) {
    return null;
  }
  const expandButton = document.createElement('button');
  expandButton.classList.add('btn', 'btn-primary');
  expandButton.innerText = `Expand ${numberOfUsers} users`;
  return expandButton;
}
