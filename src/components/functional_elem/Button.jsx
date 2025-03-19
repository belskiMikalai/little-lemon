import './Button.css'
export default function Button({children, type, className, onClick}) {
    return (
        <button className={`bold ${type} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}