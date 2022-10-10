export const globalStyles = (themeParam) => `
  body {
    background: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: 200ms all ease-out;
    &:hover {
      color: ${themeParam.palette.primary.main};
    }
  }
`;
