import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// automatically executed by Jest with 'npm start test'
Enzyme.configure({adapter: new Adapter()});