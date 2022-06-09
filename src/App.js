import { Footer, Header } from './components';
// import {  ProductListPage } from './pages';
import { HomePage, ProductListPage } from './pages';
import { Container, GlobalStyle } from './styles';

function App() {
    //   const { data, isLoading } = useFeaturedBanners();
    //   console.log(data, isLoading);

    return (
        <div className="App">
            <GlobalStyle />
            <Header />
            <Container container>
                <HomePage />
                {/* <ProductListPage /> */}
            </Container>
            <Footer />

        </div>
    );
}

export default App;
