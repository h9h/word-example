import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Link from '../src/Link';
import Copyright from '../components/Copyright'

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Example Usage of @h9h/word-* modules
        </Typography>
        <Card>
            <CardHeader title="@h9h/word-collect" />
            <CardContent>
                Word Collection: count the ocurrence of words, ignoring stopwords and clustering by word-stemm, resulting in a word distribution
            </CardContent>
            <CardActionArea>
                <CardActions>
                    <Link href="/word-collect" color="secondary">
                        learn more here
                    </Link>
                </CardActions>
            </CardActionArea>
        </Card>
        <Card>
            <CardHeader title="@h9h/word-visual" />
            <CardContent>
            Word Visual: Visualisations of word distributions as lollipop-chart or wordcloud
            </CardContent>
            <CardActionArea>
                <CardActions>
                    <Link href="/word-visual" color="secondary">
                        learn more here
                    </Link>
                </CardActions>
            </CardActionArea>
        </Card>
        <Copyright />
      </Box>
    </Container>
  );
}
