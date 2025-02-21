
export default function Button({children, type}) {
    let style;
    switch(type) {
        case "primary":
            style = {
                backgroundColor: "var(--primary-color2)",
                width: "200px",
                height: "35px",
            }
    }
    return (
        <button className="bold" style={style}>
            {children}
        </button>
    );
}