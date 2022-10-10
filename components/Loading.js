import {
  Box,
  CircularProgress,
} from '@mui/material';

export const Loading = ({ color }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        'span': {
          color: color || 'white',
        },
      }}
    >
      <CircularProgress />
    </Box>
  )
}
