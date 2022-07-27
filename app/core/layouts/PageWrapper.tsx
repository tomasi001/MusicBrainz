import Container from "../components/Container"
import Main from "../components/Main"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"

const PageWrapper = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <style jsx global>
        {`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
          }
        `}
      </style>
    </Container>
  )
}

export default PageWrapper
