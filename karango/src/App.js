import TopBar from './ui/TopBar'
import FooterBar from './ui/FooterBar'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import { Box } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import KarangosList from './routed/KarangosList2'
import KarangosForm from './routed/KarangosForm'
import HomePage from './routed/HomePage';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',  // 100% da altura da área visível
    paddingBottom: '42px' // Para que o conteúdo não fique escondido atrás do footer
  },
  routed: {
    padding: '25px',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily
  }
}));

function Main() {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <BrowserRouter>
        <TopBar />
        <Box id="routed" className={classes.routed}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/list">
              <KarangosList />
            </Route>
            <Route exact path="/new">
              <KarangosForm />
            </Route>
            {/* :id é um parâmetro (nomes de parâmetros começam com dois pontos) */}
            <Route exact path="/edit/:id">
              <KarangosForm />
            </Route>
          </Switch>
        </Box>
        <FooterBar />
      </BrowserRouter>
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
