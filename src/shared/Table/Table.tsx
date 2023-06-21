import React from 'react'
import './Table.scss'

const Table = () => {
    return <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
             <tr>
                <th>Cookie</th>
                <th>$1.25</th>
                <th>23</th>
            </tr>
            <tr>
                <th>Milk 1L</th>
                <th>$0.99</th>
                <th>10</th>
            </tr>
        </tbody>
    </table>
}
export default Table;