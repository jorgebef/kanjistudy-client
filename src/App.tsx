import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Kana, Kanji, NotFound } from './pages/'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import { ThemeProvider } from 'styled-components'

import appTheme from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import { Quiz } from './pages/Quiz'
import { QuizCtxProvider } from './context/QuizCtx'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kanji' element={<Kanji />} />
          <Route path='/kana' element={<Kana />} />
          <Route
            path='/quiz'
            element={
              <QuizCtxProvider>
                <Quiz />
              </QuizCtxProvider>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
