import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className={css.tableString} key={item.id}>
              <td className={css.textType}>{item.type}</td>
              <td className={css.text}>{item.amount}</td>
              <td className={css.text}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;