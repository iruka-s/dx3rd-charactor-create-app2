import { withStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from "@material-ui/core";

export const Dx3rdTableRow = withStyles({
    head: {
        height: "40px",
    },
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: "#ebebc9"
        },
        "&:nth-of-type(2n)": {
            backgroundColor: "#fbfcf9"
        }
    }
})(TableRow);

export const Dx3rdTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#3a3137",
        color: theme.palette.common.white,
        padding: "0.5px"
    },
    body: {
        fontSize: theme.props.fontSize,
        "&:last-child": {
            paddingRight: "0"
        }
    }
}))(TableCell);

export const Dx3rdDisabledTableRow = withStyles({
    head: {
        height: "40px",
    },
    root: {
        backgroundColor: "#c8c8c8"
    }
})(TableRow);

export const Dx3rdErrorTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#3a3137",
        color: theme.palette.common.white,
        padding: "0.5px"
    },
    body: {
        backgroundColor: "#dc143c",
        fontSize: theme.props.fontSize,
        "&:last-child": {
            paddingRight: "0"
        }
    }
}))(TableCell);

export const Dx3rdResultTableCell = withStyles(theme => ({
    body: {
        backgroundColor: "#3a3137",
        color: theme.palette.common.white,
    }
}))(TableCell);