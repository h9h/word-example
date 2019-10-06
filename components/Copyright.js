import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="https://material-ui.com/">
          Michael Heinke
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright
