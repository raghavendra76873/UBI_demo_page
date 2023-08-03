import React from 'react'
import { data } from './data'
import Card from './components/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Industry = () => {
  return (
    <div className="container-fluid" style={{width:'65%'}}>
    <div className="row justify-content-center">
    {data.map((x) => (
          <Card
            name={x.name}
            icon={x.icon}
            description={x.description}
            link={x.link}
            margin={x.margin}
          />
          ))}
    </div>
    <br />
    <br />
    </div>
  )
}

export default Industry