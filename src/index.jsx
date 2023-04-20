import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HousingCard from './pages/HousingCard'
import ErrorNotFound from './pages/ErrorNotFound'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: Montserrat, 'Trebuchet MS', Helvetica, sans-serif;
    }
`

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalStyle />
			<Header />
				<Routes>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/housingcard">
						<HousingCard />
					</Route>
					<Route>
						<ErrorNotFound />
					</Route>
				</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
document.getElementById('root')
)