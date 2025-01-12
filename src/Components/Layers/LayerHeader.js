import classes from "./LayerHeader.module.css";
import { ReactComponent as SearchIcon } from "../../Assets/header/Frame 9.svg";
import { ReactComponent as Avatar } from "../../Assets/header/Mask Group.svg";
import { ReactComponent as DropdownIcon } from "../../Assets/header/Frame 10.svg";
import { ReactComponent as NotificationIcon } from "../../Assets/header/ic_round-notifications.svg";
import { ReactComponent as ResponseIcon } from "../../Assets/header/bi_chat-left-dots-fill.svg";
import { ReactComponent as ExpandIcon } from "../../Assets/header/ic_burgermenu.svg";


const LayerHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes['header-container']}>
                <div className={classes.searchContainer}>
                    <input
                        type="text"
                        className={classes.search}
                        placeholder="Search"
                    />
                    <button className={classes.searchButtonIcon}>
                        <SearchIcon className={classes.searchIcon}/>
                    </button>
                </div>

                <div className={classes.actions}>
                    <NotificationIcon className={classes.notification} />
                    <ResponseIcon className={classes.response} />
                    
                    <span className={classes.profile}>
                        <Avatar className={classes.avatar} />
                        <span className={classes.name}>
                            Admirra John
                            <DropdownIcon className={classes.dropdown} />
                        </span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default LayerHeader;
