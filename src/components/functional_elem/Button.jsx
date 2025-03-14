import './Button.css'
export default function Button({children, type, onClick}) {
    let style;
    switch(type) {
        case "primary":
            style = {
                backgroundColor: "var(--primary-color2)",
                height: "35px",
                width: "200px"
            };
            break;
    }
    return (
        <button className={`bold ${type}`} style={style} onClick={onClick}>
            {children}
        </button>
    );
}