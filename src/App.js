import { useState } from 'react';
import { Footer, Header } from './components';
import { HomePage, ProductListPage } from './pages';
import { Container, GlobalStyle } from './styles';

function App() {

    const [showHomePage, setShowHomePage] = useState(true);
    //   const { data, isLoading } = useFeaturedBanners();
    //   console.log(data, isLoading);

    return (
        <div className="App">
            <GlobalStyle />
            <Header setShowHomePage={setShowHomePage} />
            <Container >
                {
                    (showHomePage)
                    ? <HomePage setShowHomePage={setShowHomePage} />
                    : <ProductListPage/>
                }
            </Container>
            <Footer />

        </div>
    );
}

export default App;
