const Modal = ({ closeModal }) => {
    return (
        <div>
            <p onClick={closeModal()}>CLOSE</p>
            <h3>shiiiiit</h3>
        </div>
    );
}

export default Modal;