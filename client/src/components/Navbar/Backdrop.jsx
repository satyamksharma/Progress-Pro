import ReactDOM from 'react-dom';
const Backdrop = ({ isOpen, setIsOpen }) => {
    return ReactDOM.createPortal(
        <div
            className='bg-black/[0.5] fixed z-40 w-full h-full'
            onClick={() => setIsOpen(!isOpen)}
        ></div>,
        document.getElementById('backdrop')
    );
};

export default Backdrop;
