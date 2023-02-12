import styled from 'styled-components'

const StyledAboutView = styled.div`
  padding: 40px 20px;
  min-height: 100vh;
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  align-items: center;
  background-image: radial-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0) 40vw),
    radial-gradient(rgba(0, 128, 0, 0.3), rgba(0, 128, 0, 0) 40vw),
    radial-gradient(rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0) 40vw),
    radial-gradient(rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0) 40vw),
    radial-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0) 40vw);
  background-position: -40vw 14rem, 50% 10rem, 60vw 14rem, -10vw calc(14rem + 20vw), 30vw calc(14rem + 20vw);
  background-size: 80vw 80vw;
  background-repeat: no-repeat;

  .about-container {
    max-width: 350px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 16px;

    h1 {
      font-weight: 400;
      font-size: 26px;
      text-align: center;
      color: ${({ theme }) => theme.color.gray[800]};

      b {
        font-weight: 600;
      }
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      margin-top: 10px;
      text-align: center;
      color: ${({ theme }) => theme.color.gray[600]};

      mark {
        font-size: 22px;
        background-color: transparent;
        background-image: linear-gradient(to left, #fb02b8, #d001dd, #5ebefc, #06e705, #07cdfd, #8b62ff, #b96aff);
        -webkit-background-clip: text;
        color: transparent;
        font-family: ${({ theme }) => theme.typeface.drawn};
      }
    }

    ol {
      margin: 60px 0;
      padding: 0;
      list-style-type: none;
      display: grid;
      row-gap: 12px;

      li {
        padding: 0 16px 0 10px;
        height: 50px;
        border-radius: 6px;
        box-shadow: inset 0 0 0 1px rgb(0, 0, 0, 0.075);
        background-color: rgb(0, 0, 0, 0.05);
        color: ${({ theme }) => theme.color.gray[700]};
        display: flex;
        align-items: center;

        code {
          font-size: 15px;
          padding: 3px 6px;
          border-radius: 6px;
          margin: 0 4px;
          background-color: rgb(0, 0, 0, 0.05);
          font-family: ${({ theme }) => theme.typeface.monospace};
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          border-radius: 4px;
          height: 30px;
          width: 30px;
          user-select: none;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.075), 0 4px 8px rgb(0, 0, 0, 0.05);
          color: ${({ theme }) => theme.color.gray[600]};
          background-color: ${({ theme }) => theme.color.background};

          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
        }
      }
    }

    a {
      text-decoration: none;
      display: flex;
      margin: 40px auto 0 auto;
      width: fit-content;
      user-select: none;

      button {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 20px 0 18px;
        border-radius: 6px;
        background-color: #5865f2;
        color: #fff;
        transition: background-color 0.2s;
        font-weight: 500;

        svg {
          height: 24px;
          margin-right: 12px;
        }

        &:hover {
          background-color: #3e4ac6;
        }
      }
    }
  }
`

export default StyledAboutView
