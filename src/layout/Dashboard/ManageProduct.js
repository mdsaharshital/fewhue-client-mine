import React from 'react';
import { Table } from 'react-bootstrap';
import { useGetAllProductsQuery } from '../../feature/product/productSlice';

const ManageProduct = () => {

    const { data } = useGetAllProductsQuery();
    console.log('krieee', data);
    return (
        <div>
            <h2 className='text-center'>Manage Products</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {<tr>
                        <td>1</td>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;