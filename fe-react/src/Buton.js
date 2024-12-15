const Buton = (props) => {
    const { style, title, isDisabled } = props;
    return (
        <div style={props.style}>
            <button disabled={props.disabled}>
                {props.title}
            </button>

        </div>
    );


};

export default Buton;