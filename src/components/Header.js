import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click');
    };
    
    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='+ Add' onClick={onClick} />
        </header>
    );
};

Header.defualtProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: '#F00',
//     backgroundColor: '#000',
// }

export default Header;