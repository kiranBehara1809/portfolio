import { Box, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MdOutlineSearchOff } from "react-icons/md";



const SearchResultsNotFound = () => {
    const theme = useTheme();
    const styles = { 
        icon : {
            color : theme.palette.error.main,
            fontSize : 'xx-large'
        }
    }
    return (
      <>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 2
          }}
        >
          <MdOutlineSearchOff style={{ ...styles.icon }} />
          <Typography variant='body2'>search results not found!</Typography>
        </Box>
      </>
    );
}

export default SearchResultsNotFound;