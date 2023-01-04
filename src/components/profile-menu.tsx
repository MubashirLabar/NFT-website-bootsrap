import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

// users
import user1 from '../assets/images/users/avatar-1.jpg';

function ProfileMenu() {
    const [menu, setMenu] = useState(false);
    const [name, setName] = useState('Ox3D67...E483B');

    const toggle = () => {
        setMenu(!menu);
    };

    return (
        <React.Fragment>
            <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
                <DropdownToggle
                    className="btn header-item header-user-item"
                    id="page-header-user-dropdown"
                    tag="button"
                >
                    <img
                        className="rounded-circle header-profile-user"
                        src={user1}
                        alt="Header Avatar"
                    />{' '}
                    <span className="d-none d-xl-inline-block ms-1 b6">
                        {name}
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem tag="a" href="/profile">
                        <i className="bx bx-user font-size-16 align-middle ms-1" />
                        Account
                    </DropdownItem>
                    <DropdownItem tag="a" href="/crypto-wallet">
                        <i className="bx bx-star font-size-16 align-middle me-1 " />
                        Favorites
                    </DropdownItem>
                    <div className="dropdown-divider" />
                    <Link to="/logout" className="dropdown-item">
                        <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                        <span>Logout</span>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
}

export default ProfileMenu;
