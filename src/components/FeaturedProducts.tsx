import React from "react";
import styled from "styled-components";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';

const SectionContainer = styled.section`
    padding: 40px 20px;
    text-align: center;
    background-color: #fff;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Fugaz One', cursive; /* Fonte estilizada */
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 30px;
`;

const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Para responsividade em telas menores */
`;

const ProductCard = styled.div`
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: calc(33% - 10px); /* Ajusta a largura dos cards */
    margin: 0 5px; /* Espaço entre os cards */
    flex-direction: column;
    display: flex;
    text-align: left;
    overflow: hidden; /* Para esconder o excesso se necessário */

    @media (max-width: 768px) {
        width: calc(100% - 10px); /* Ajusta para largura total em telas menores */
        margin-bottom: 20px; /* Adiciona espaço inferior em telas menores */
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 2px solid #ff6f20; /* Linha divisória inferior */
`;

const CardContent = styled.div`
    padding: 20px;
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 10px;
`;

const CardDescription = styled.p`
    margin: 10px 0 20px;
    color: #333;
`;

const CardButton = styled.button`
    padding: 10px 15px;
    background-color: #ff6f20;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #e65c00;
    }
`;

const FeaturedProducts: React.FC = () => {
    return (
        <SectionContainer>
            <Title>Featured Products</Title>
            <Subtitle>Explore Our Bestsellers</Subtitle>
            <ProductsContainer>
                <ProductCard>
                    <CardImage src={img1} alt="Elevate Your Everday Experience" />
                    <CardContent>
                        <CardTitle>Quality Meets Style</CardTitle>
                        <CardDescription>
                            Elevate Your Everyday Experience. Shop our exclusive range of products that combine functionality and aesthetics.
                        </CardDescription>
                        <CardButton>Shop Now</CardButton>
                    </CardContent>
                </ProductCard>
                <ProductCard>
                    <CardImage src={img2} alt="Innovative Designs for Modern Living" />
                    <CardContent>
                        <CardTitle>Transform Your Space</CardTitle>
                        <CardDescription>
                            Innovative Designs for Modern Living. Discover products that redefine comfort and style.
                        </CardDescription>
                        <CardButton>Explore Collection</CardButton>
                    </CardContent>
                </ProductCard>
                <ProductCard>
                    <CardImage src={img3} alt="Eco-Friendly Products for a Better Tomorrow" />
                    <CardContent>
                        <CardTitle>Sustainable Choices</CardTitle>
                        <CardDescription>
                            Eco-Friendly Products for a Better Tomorrow. Join us in making a positive impact on the planet.
                        </CardDescription>
                        <CardButton>Shop Sustainable</CardButton>
                    </CardContent>
                </ProductCard>
            </ProductsContainer>
        </SectionContainer>
    );
};

export default FeaturedProducts;