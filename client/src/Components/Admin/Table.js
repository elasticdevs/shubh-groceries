import React from 'react';



export default function Table({arr}){
    let flag = true;
    return (
        <table>
        {
            arr.map((element) =>{
            return <>
            {flag && <thead><tr>{Object.entries(element).map(([key,value])=>(
              <th>{key}</th>
            ))}</tr></thead>}
            <tbody><tr>
            {Object.entries(element).map(([key,value])=>(
              <td>{value}</td>
            ))}
            </tr></tbody>
            <tfoot style = {{display:'none'}}>{flag = false}</tfoot>
            </>
            })
        }

        </table>
    )
}