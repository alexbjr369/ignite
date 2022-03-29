import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  .transaction-table {
    &__table {
      width: 100%;
      border-spacing: 0.5rem;
    }

    &__header {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    &__column {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &_heading {
        color: var(--text-title);
      }

      &_deposit {
        color: var(--green);
      }

      &_withdraw {
        color: var(--red);
      }
    }
  }
`;
