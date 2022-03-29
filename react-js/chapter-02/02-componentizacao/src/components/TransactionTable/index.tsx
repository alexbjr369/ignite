import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table className="transaction-table__table">
        <thead>
          <tr className="transaction-table__header">
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="transaction-table__column transaction-table__column_heading">
              Desenvolvimento de website
            </td>
            <td className="transaction-table__column transaction-table__column_deposit">
              R$12.000
            </td>
            <td className="transaction-table__column">Desenvolvimento</td>
            <td className="transaction-table__column">20/02/2021</td>
          </tr>
          <tr>
            <td className="transaction-table__column transaction-table__column_heading">
              Aluguel
            </td>
            <td className="transaction-table__column transaction-table__column_withdraw">
              - R$1.100
            </td>
            <td className="transaction-table__column">Casa</td>
            <td className="transaction-table__column">17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
