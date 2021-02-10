import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Table from './components/Table';
import { DataProps } from './components/Table/types';
import { ButtonContainer, Container } from './styles';
import { GlobalStyle } from './Themes/GlobalStyle';


const App: React.FC = () => {
    const [data, setData] = useState<Array<DataProps>>([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = () => {
        fetch('https://swapi-trybe.herokuapp.com/api/planets/')
            .then(response => response.json())
                .then(data => setData(data.results));
    }

    const loadPage = (page: number) => {
        fetch(`https://swapi-trybe.herokuapp.com/api/planets/?page=${page}`)
            .then(response => response.json())
                .then(data => setData(data.results));    
    }

    function turnPage(currentPage: number) {
        console.log(currentPage);
        if(currentPage > 0) {
            currentPage === 1 ? fetchData() : loadPage(currentPage);
            setPage(currentPage);
            console.log(data);
        }
    }

    return (
        <>
            <GlobalStyle/>
            <Header />
            <GlobalStyle />
            <Container>
                <Table data={data} />
                <ButtonContainer>
                    <Button 
                        title="<" 
                        color='#e84118' 
                        callback={() => turnPage(page - 1)}
                    />
                    <Button 
                        title=">" 
                        color='#44bd32' 
                        callback={() => turnPage(page + 1)}
                    />
                </ButtonContainer>
            </Container>
        </>
    )
}

export default App;
