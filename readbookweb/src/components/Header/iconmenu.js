import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
export default class IconMenuExampleControlled extends Component {
    state = {
        valueSingle: '3',
        valueMultiple: ['3', '5'],
    };

    handleChangeSingle = (event, value) => {
        this.setState({
            valueSingle: value,
        });
    };

    handleChangeMultiple = (event, value) => {
        this.setState({
            valueMultiple: value,
        });
    };

    handleOpenMenu = () => {
        this.setState({
            openMenu: true,
        });
    }

    handleOnRequestChange = (value) => {
        this.setState({
            openMenu: value,
        });
    }

    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={this.handleChangeSingle}
                    value={this.state.valueSingle}
                    >
                    <MenuItem value="1" primaryText="Refresh" />
                    <MenuItem value="2" primaryText="Send feedback" />
                    <MenuItem value="3" primaryText="Settings" />
                    <MenuItem value="4" primaryText="Help" />
                    <MenuItem value="5" primaryText="Sign out" />
                </IconMenu>
            </div>
        );
    }
}