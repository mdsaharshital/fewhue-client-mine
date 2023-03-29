import React from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    return (
        <div>
            <h3 className='text-center'>Orders</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Total Price</th>
                        <th>Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;