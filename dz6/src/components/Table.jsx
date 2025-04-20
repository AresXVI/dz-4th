import React from 'react'
import { Button } from './Button'
const Table = ({ arr, clearTableFunc, deleteFunc }) => {
    return (
        <div className='table__div'>
            <h2>Таблица посетителей</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead >
                    <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>
                        <Button 
                            title="очистить таблицу" 
                            className='delete-btn' 
                            onClick={clearTableFunc}
                        />
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {(arr || []).map((arr, index) => (
                        <tr key={index}>
                            <td>{arr.name}</td>
                            <td>{arr.username}</td>
                            <td>{arr.email}</td>
                            <td>{arr.phone}</td>
                            <td>{arr.website}</td>
                            <td>
                                <Button 
                                    title="удалить" 
                                    className='delete-btn' 
                                    onClick={() => deleteFunc(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;