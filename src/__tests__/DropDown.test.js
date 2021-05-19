import ReactDOM from 'react-dom';
import DropDown from '../DropDown';

const users = [
  {
    id: 1,
    name: 'James',
    username: 'Gold',
    email: 'james@mail.com',
    url: 'https//hello.com',
  },
];

const photos = [
  {
    id: 1,
    albumId: 1,
    title: 'Sugar',
    url: 'https//hello.com',
    thumbnailUrl: 'https//example.com',
  },
];

const handleClick = () => {
  console.log('working');
};

test('renders correct content', () => {
  const root = document.createElement('div');
  ReactDOM.render(
    <DropDown users={users} photos={photos} handleClick={handleClick} />,
    root
  );
  expect(root.querySelector('ul')).toBeTruthy();
  expect(root.querySelector('li')).toBeTruthy();
  expect(root.querySelector('img')).toBeTruthy();
  expect(root.querySelector('span').textContent).toBeTruthy();
});
