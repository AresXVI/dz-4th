import React from 'react'
import Button from '../../components/Button'

const Table = ({tableData}) => {
    const {
        arr,
        deleteFunc 
    } = tableData

    return (
        <div className='div__table'>
                <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse', 
                    backgroundColor: arr.length === 0 ? 'transparent' : '#f0f0f0' 
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#e0e0e0' }}>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>USERNAME</th>
                            <th>PHONE NUMBER</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.length === 0 
                        ? <tr>
                            <td colSpan='5' className='sp_pust'>
                                Список пуст...
                            </td>
                        </tr> 
                        : (arr || []).map(e => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.username}</td>
                                <td>{e.ph_num}</td>
                                <td>
                                <Button 
                                    title='delete' 
                                    onClick={() => deleteFunc(e.id)} 
                                    className='delete'
                                />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

export default Table