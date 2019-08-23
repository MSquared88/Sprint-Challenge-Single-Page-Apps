import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {

    return(
        <Menu tabular>
            <NavLink to='/'>
                <Menu.Item
                name='Home'

                />
            </NavLink>
            <NavLink to='/characters'>
                <Menu.Item
                name='Characters'

                />
            </NavLink>
            <NavLink to='/locations'>
                <Menu.Item
                name='locations'

                />
            </NavLink>
            <NavLink to='/episodes'>
                <Menu.Item
                name='episodes'
                />
            </NavLink>
 
      </Menu>
    )
};

