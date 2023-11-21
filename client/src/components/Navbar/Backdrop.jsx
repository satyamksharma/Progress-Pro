import ReactDOM from 'react-dom';
const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div
            className={`bg-black/[0.5] fixed w-full h-full z-${props.zindex}`}
            onClick={() => props.setIsOpen(!props.isOpen)}
        ></div>,
        document.getElementById('backdrop')
    );
};

export default Backdrop;
