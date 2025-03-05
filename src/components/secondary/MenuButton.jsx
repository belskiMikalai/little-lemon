import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuButton = (children) => {
    return (
        <>
            { children }
            <a>
                <FontAwesomeIcon icon={faBars} size='2xl'/>
            </a>
        </>
    );
};

export default MenuButton;