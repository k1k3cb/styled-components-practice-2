import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 82px 24px 82px 24px;
    font-family: 'League Spartan', sans-serif;
    background-color: #FFF;

  }

  @media (width>= 768px) {
		body{
    margin: 145px 165px; 
  } 
	}
	

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export const StyledStarsContainerGl = styled.div`
	margin-bottom: 3.125rem;

	@media (width>= 768px) {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
`;

export const StyledTopContainerGl = styled.div`
	@media (width>= 768px) {
		display: flex;
		max-width: 1110px;
		justify-content: space-between;
	}
`;

export const StyledBottomContainerGl = styled.div`
	@media (width>= 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 30px;
		max-width: 1110px;
	}
`;
