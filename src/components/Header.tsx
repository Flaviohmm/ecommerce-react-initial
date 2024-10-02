import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #ff6f20; /* Cor de fundo */
    padding: 10px 20px;
    border-radius: 20px;
    margin: 2px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: space-around;
`;

const NavItem = styled.li`
    cursor: pointer;
`;

const BrandName = styled.span`
    font-weight: bold;
    font-size: 1.2em;
    color: white;
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 500;
`

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <NavList>
                    <NavItem>
                        <Link>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Products</Link>
                    </NavItem>
                    <NavItem>
                        <BrandName>Your Brand Name</BrandName>
                    </NavItem>
                    <NavItem>
                        <Link>Projects</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Our Mission</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Product Range</Link>
                    </NavItem>
                </NavList>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;