import React from "react";
import styled from "styled-components";
import image1 from '../img/image1.png';

const AppContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    align-items: flex-start; /* Alterando para flex-start para o layout responsivo */
    flex-direction: row; /* Alinhamento padrão em linha */

    @media (max-width: 827px) {
        flex-direction: column; /* Muda para coluna em telas menores que 827px */
        align-items: center; /* Centraliza os itens */
    }
`;

const Sidebar = styled.div`
    flex: 2; /* Este lado ocupará 2 partes do espaço disponível */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;
`;

const GalleryContainer = styled.div`
    flex: 1; /* Este lado ocupará 1 parte do espaço disponível */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px; /* Espaçamento entre a sidebar e a galeria */
`;

const Header = styled.header`
    margin-bottom: 20px;
`;

const MainContent = styled.main`
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    font-family: 'Fugaz One', cursive;
`;

const Description = styled.p`
    font-size: 1.2rem;
    margin: 10px 0 20px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`;

const StartButton = styled(Button)`
    background-color: #ff6f20;
    color: white;

    &:hover {
        background-color: #e65c00;
    }
`;

const LearnButton = styled(Button)`
    background-color: transparent;
    border: 2px solid #ff6f20;
    color: #ff6f20;

    &:hover {
        background-color: #ff6f20;
        color: white;
    }
`;

const GalleryImage = styled.img`
    width: 450px; /* Ajuste conforme necessário */
    height: auto;
    border-radius: 8px; /* Bordas arredondadas */
    margin-bottom: 10px;
    margin-top: 20px;
`;

const Main: React.FC = () => {
    return (
        <AppContainer>
            <Sidebar>
                <Header>
                    <Title>Discover the Future of Shopping.</Title>
                </Header>
                <MainContent>
                    <Description>
                        Explore our curated collection of unique products designed to inspire and elevate your lifestyle.
                    </Description>
                    <ButtonContainer>
                        <StartButton>Start Shopping Today</StartButton>
                        <LearnButton>Learn More</LearnButton>
                    </ButtonContainer>
                </MainContent>
            </Sidebar>
            <GalleryContainer>
                <GalleryImage src={image1} alt="Shopping" />
            </GalleryContainer>
        </AppContainer>
    );
};

export default Main;