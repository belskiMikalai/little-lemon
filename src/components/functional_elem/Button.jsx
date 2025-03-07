import './Button.css'
export default function Button({children, type}) {
    let style;
    switch(type) {
        case "primary":
            style = {
                backgroundColor: "var(--primary-color2)",
                height: "35px",
                width: "200px"
            }
    }
    return (
        <button className="bold" style={style}>
            {children}
        </button>
    );
}