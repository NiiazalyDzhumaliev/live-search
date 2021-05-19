import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import App from '../App';

describe('App snapshot test', () => {
  test('testing app component', () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
  test('renders correct content', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
    expect(root.querySelectorAll('[placeholder="Search"]')).not.toBeNull();
    expect(root.querySelector('input[type="text"]')).toBeTruthy();
  });
});
