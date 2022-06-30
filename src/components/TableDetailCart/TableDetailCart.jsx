import React from 'react';
import { useSelector } from 'react-redux';
import ItemTableCart from './ItemTableCart';
import TableDetailCartStyle from './TableDetailCartStyle';

const TableDetailCart = () => {
  const { items } = useSelector((store) => store.cart);
  return (
    <TableDetailCartStyle
      style={{ display: 'flex', gap: '20px', flexFlow: 'row wrap' }}
    >
      <div className='itemsTable'>
        <div>
          {items.map((item) => (
            <ItemTableCart key={item.id} product={item} />
          ))}
        </div>
      </div>
      <div className='descriptionCart'>
        <h4>Resumen</h4>
        <table>
          <tbody>
            <tr>
              <th>Total</th>
              <td>$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </TableDetailCartStyle>
  );
};

export default TableDetailCart;
