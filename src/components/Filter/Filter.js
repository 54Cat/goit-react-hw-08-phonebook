import PropTypes from 'prop-types';
import { Wrapper, } from 'components/Filter/FilterStyled';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginBottom: "14px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Filter({ onChange }) {
    const classes = useStyles();
    
    return (
        <Wrapper>
            <Paper component="form" variant="outlined" className={classes.root}>

                <InputBase
                    className={classes.input}
                    placeholder="Search Contact"
                    inputProps={{ 'aria-label': 'search' }}
                    id="search"
                    name="findByName"
                    type="text"
                    onChange={onChange}
                />
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                
            </Paper>
        </Wrapper>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func,
};