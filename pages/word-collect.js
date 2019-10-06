import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';
import Copyright from '../components/Copyright'
import {collectWords} from '@h9h/word-collect'
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import useStyles from '../components/styles'

export default function About() {
  const classes = useStyles()
  const [value, setValue] = useState(`
Mephistopheles:
  Ein Teil von jener Kraft, Die stets das Böse will und stets das Gute schafft.

Faust:
  Was ist mit diesem Rätselwort gemeint?

Mephistopheles:
  Ich bin der Geist, der stets verneint! Und das mit Recht; denn alles, was entsteht, Ist wert, daß es zugrunde geht; 
  Drum besser wär's, daß nichts entstünde. So ist denn alles, was ihr Sünde, Zerstörung, kurz, das Böse nennt, 
  Mein eigentliches Element.

Faust:
  Du nennst dich einen Teil, und stehst doch ganz vor mir?  `)
  const worddistribution = collectWords('de', value).getWordDistribution(2).sort((a,b) => b[1] - a[1])

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          @h9h/word-collect
        </Typography>
        <TextField
          label="Input Text"
          multiline
          rowsMax="15"
          variant="outlined"
          value={value}
          onChange={handleChange}
          fullWidth
        />
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h1" paragraph>
            Result:
          </Typography>
          {worddistribution.map(([word, count]) => (
            <Typography key={word} variant="body1" component="p">
              {word} --> {count}
            </Typography>
          ))}
        </Paper>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
