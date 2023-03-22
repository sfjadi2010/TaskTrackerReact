import ProptTypes from 'prop-types';

const Button = ({color, text, onClick}) => {  
    return (
        <button className="btn" 
            onClick={onClick}
            style={{backgroundColor: color}}>
            {text}
        </button>
    );
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: ProptTypes.string,
    color: ProptTypes.string,
    onClick: ProptTypes.func,
}

export default Button;