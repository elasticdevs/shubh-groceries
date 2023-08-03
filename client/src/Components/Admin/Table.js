import React from 'react';



export default function Table({arr}){
    let flag = 1;
    return (
        <table>
        {
            arr.map((element) =>{
            return <>
            {flag && <tr>{Object.entries(element).map(([key,value])=>(
              <th>{key}</th>
            ))}</tr>}
            <tr>
            {Object.entries(element).map(([key,value])=>(
              <td>{value}</td>
            ))}
            </tr>
            {flag = 0}
            </>
            })
        }

        </table>
    )
}