import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Banner from "../img/banner1.jpg"

import Bomba from "../img/bomba.jpg"
import Filtro1 from "../img/filtro1.jpg"
import Filtro2 from "../img/filtro2.jpg"
import Filtro4 from "../img/filtro4.jpg"
import Filtro5 from "../img/filtro5.jpg"
import AspiradorFundo from "../img/aspirador-de-fundo.jpg"
import Delta from "../img/aspirador-asa-delta-com-escova_2-300x300.jpg"
import Clorador from "../img/clorador-flutuante-nautilus.jpg"
import Peneira from "../img/peneira-plastica-pelicano-nautilus.jpg"




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          Aquecedores Elétricos
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="ListaPrincipal">
        {/* Hero unit */}
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bomba} />
          <Card.Body>
            <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>

        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bomba} />
          <Card.Body>
            <Card.Title>Aquecedor Elétrico TermaMax 02 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
            Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card  className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bomba} />
          <Card.Body>
            <Card.Title>Aquecedor Elétrico TermaMax 06 Nautilus Trifásico 380V</Card.Title>
            <Card.Text>
            Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bomba} />
          <Card.Body>
            <Card.Title>Aquecedor Elétrico TermaMax 07 Nautilus Trifásico 380V</Card.Title>
            <Card.Text>
            Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        
      </main>

      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
        Filtros  
          </Typography>
        </Toolbar>
      </AppBar>

      <section className="ListaPrincipal">
      <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro1} />
          <Card.Body>
            <Card.Title>Filtro Nautilus para piscinas modelo F1150P</Card.Title>
            <Card.Text>
            O filtro Nautilus para piscina F1150P é um filtro de máxima eficiência projetado para garantir a limpeza de piscinas de 281.000 a 416.000 litros, em caso de uso residencial, ou de 211.000 a 312.000 litros para uso comercial, gerando economia e proteção à saúde.
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro2} />
          <Card.Body>
            <Card.Title>Filtro Nautilus para piscinas modelo F280P</Card.Title>
            <Card.Text>
            O filtro Nautilus para piscina F280P é um filtro de alta eficiência, ideal para a limpeza de piscinas de até 19.000 litros em caso de uso residencial, gerando qualidade e economia, não oferecendo riscos à saúde.

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card  className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro4} />
          <Card.Body>
            <Card.Title>Filtro Nautilus para piscinas modelo F300P</Card.Title>
            <Card.Text>
            O filtro Nautilus para piscina F300P é um filtro de alta eficiência, ideal para a limpeza de piscinas de até 16.000 litros em caso de uso residencial, gerando qualidade e economia, não oferecendo riscos à saúde. 


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro5} />
          <Card.Body>
            <Card.Title>Filtro Nautilus para piscinas modelo F350P</Card.Title>
            <Card.Text>
            O filtro Nautilus para piscina F350P é um filtro de alta eficiência, ideal para a limpeza de piscinas de até 29.000 litros em caso de uso residencial, gerando qualidade e economia, não oferecendo riscos à saúde. 
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>        
      </section>
      
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Acessórios de Limpeza
          </Typography>
        </Toolbar>
      </AppBar>
      <section className="ListaPrincipal">
      <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={AspiradorFundo} />
          <Card.Body>
            <Card.Title>Aspirador de fundo</Card.Title>
            <Card.Text>
            O Aspirador de Fundo 8 Rodas Nautilus é produzido com bordas e rodas em plástico, ao aspirar o fundo da piscina com o sistema de esfera possibilita uma movimentação mais fácil na água, eliminando sujeiras em locais mais difíceis.            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Delta} />
          <Card.Body>
            <Card.Title>Aspirador Asa Delta Com Escova</Card.Title>
            <Card.Text>
            O Aspirador de Fundo Nautilus Asa Delta Com Escova é produzido com bordas e escova em plástico, ao mesmo tempo que aspira o fundo da piscina, permite que a escova faça uma limpeza mais eficiente.
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card  className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Clorador} />
          <Card.Body>
            <Card.Title>Clorador</Card.Title>
            <Card.Text>
            O Clorador Flutuante Nautilus é fabricado em plástico com cavidade para aplicação de pastilhas de cloro próprias para esse fim. Tem um formato que permite a flutuação, liberando dosagens periódicas de cloro na água. Basta adicionar a pastilha de cloro no recipiente e deixar flutuando sobre a superfície da água da piscina. Para saber sobre as dosagens e reposição do cloro, verifique as instruções de uso do fabricante do produto químico.

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Peneira} />
          <Card.Body>
            <Card.Title>Peneira Plástica</Card.Title>
            <Card.Text>
            A Peneira Plástica Nautilus tem as bordas e trama em plástico. Indicada para piscinas com baixo nível de resíduos volumosos. Desenvolvida para ser utilizada na limpeza de qualquer tipo de construção de piscina, vinil, concreto ou fibra. Conta com a garantia de 1 ano e a qualidade da marca Nautilus. A linha de acessórios da Nautilus é completa e atende diversas necessidades de uso para a limpeza e manutenção. São produtos de alta qualidade que garantem momentos de diversão e bem-estar.            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>        
      </section>


    </ThemeProvider>
  );
}