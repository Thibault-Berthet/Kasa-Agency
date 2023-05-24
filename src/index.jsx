/* ------------ Code REACT pour l'index ------------*/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HousingCard from './pages/HousingCard'
import ErrorNotFound from './pages/ErrorNotFound'
import './index.css'

// Utilisation d'un style global pour toutes les pages du site
const GlobalStyle = createGlobalStyle`
    div {
        font-family: Montserrat, 'Trebuchet MS', Helvetica, sans-serif;
    }
	body {
		margin: 0px;
        padding: 0px;
	}
`

// Routing de l'application
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route exact index path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/logements/:id" element={<HousingCard />} />
				<Route path="*"element={<ErrorNotFound />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
)