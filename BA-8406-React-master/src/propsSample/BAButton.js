// const BAButton = (props) => {
//     const { style, title, isDisabled } = props;

//     return (
//         // <div style={props.style}>
//         //     <button disabled={props.isDisabled}>{props.title}</button>
//         // </div>
//         <div style={style}>
//             <button disabled={isDisabled}>{title}</button>
//         </div>
//     );
// };

const BAButton = ({ style, title, isDisabled }) => {
    return (
        // <div style={props.style}>
        //     <button disabled={props.isDisabled}>{props.title}</button>
        // </div>
        <div style={style}>
            <button disabled={isDisabled}>{title}</button>
        </div>
    );
};

export default BAButton;
