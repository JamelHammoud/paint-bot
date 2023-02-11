import styled from 'styled-components'

const StyledColorRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: 8px;
  margin: 12px 0;
  position: relative;

  .color-list {
    position: relative;
    margin: -5px 0 0 0;

    button {
      position: relative;

      .color-preview {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.background};
        border-radius: 5px;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .color-btn {
    position: relative;
    overflow: hidden;

    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border: 0;
      opacity: 0;
    }
  }

  .react-horizontal-scrolling-menu--separator {
    width: 8px;
    flex-shrink: 0;
  }

  .react-horizontal-scrolling-menu--inner-wrapper {
    .react-horizontal-scrolling-menu--scroll-container {
      -ms-overflow-style: none;
      scrollbar-width: none;
      padding-top: 5px;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .arrow-background {
    position: absolute;
    z-index: 1;
    width: 100px;
    display: flex;
    height: 100%;
    pointer-events: none;

    .arrow-btn {
      height: 36px;
      width: 22px;
      display: flex;
      position: relative;
      top: 5px;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      pointer-events: all;
      border-radius: 6px;
      color: ${({ theme }) => theme.color.gray[500]};
      background-color: ${({ theme }) => theme.color.background};
      transition: 0.2s;
      box-shadow: inset 0 0 0 2px rgb(0, 0, 0, 0.2);

      svg {
        height: 20px;
        stroke-width: 2.25px;
      }

      &:hover {
        color: ${({ theme }) => theme.color.gray[600]};
        background-color: ${({ theme }) => theme.color.gray[100]};
        box-shadow: inset 0 0 0 2px rgb(0, 0, 0, 0.3);
      }
    }

    &.arrow-left {
      left: 0;
      background: linear-gradient(90deg, ${({ theme }) => theme.color.gray[100]}, transparent);
    }

    &.arrow-right {
      right: 0;
      background: linear-gradient(90deg, transparent, ${({ theme }) => theme.color.gray[100]});
      flex-direction: row-reverse;
    }
  }
`

export default StyledColorRow
