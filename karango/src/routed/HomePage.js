import { React, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'
import Vintage from '../img/vintage-cars.png'

const useStyles = makeStyles({
	figura: {
		display: 'block',
		margin: '0 auto',
		transition: 'opacity 1s linear'
	},
	paragBotao: {
		textAlign: 'center'
	}
})

export default function HomePage() {
	const classes = useStyles()

	const [visible, setVisible] = useState(false)   // Transforme isto em uma variável de estado

	return (
		<>
			<h1>Sobre o projeto Karangos</h1>
			<p>
				Karangos é um projeto front-end desenvolvido pelo Prof. Fausto Cintra juntamente com a turma do 4º semestre noturno de ADS da Fatec Franca.
			</p>
			<p>
				Seu objetivo é demonstrar as funcionalidades e possibilidades do React em conjunto com a biblioteca de componentes Material UI, acessando uma API REST remota.
			</p>
			<p>
				Clique sobre ícone do menu no canto superior esquerdo para acessar as funcionalidades.
			</p>
			<p className={classes.paragBotao}>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => (setVisible(!visible))}
				>
					Surpresa!
				</Button>
			</p>

			<img src={Vintage} className={classes.figura} alt="Carros antigos" style={{ opacity: visible ? '1' : '0', height: visible ? '591px' : '0' }} />
		</>
	)
}