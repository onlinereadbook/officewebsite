import {
    blue500,
    blue700,
    blueGrey100,
    blueGrey500,
    darkBlack,
    grey300,
    lightBlack,
    purpleA200,
    white
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export default {
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 8,
        desktopKeylineIncrement: 64,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopLeftNavMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56,
    },
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: lightBlack,
        accent1Color: purpleA200,
        accent2Color: blueGrey100,
        accent3Color: blueGrey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blue500,
    },
    avatar: {
        borderColor: null,
    },
};