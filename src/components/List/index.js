import React from 'react'

const List = ({ ordered, data }) => {
    return (
        <>
            {ordered ? (
                <ol>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ol>
            ) : (
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default List