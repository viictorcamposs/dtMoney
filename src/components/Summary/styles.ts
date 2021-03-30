import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2em;
    border-radius: .25rem;
    color: var(--text-title);
    box-shadow: 2px 2px 10px -2px rgba(0,0,0, .8);

    header { 
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;
