import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

document.body.innerHTML = '<div id="root"></div>';

export default undefined;
