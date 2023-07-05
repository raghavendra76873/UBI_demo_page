import React from 'react'
import Card from '../Usecase/component/Card'
import { data } from './data'

const Usecase = () => {
  return (
    <div className="container-fluid" style={{width:'900px'}}>
    <div className="row justify-content-center">
    {data.map((x) => (
          <Card
            name={x.name}
            icon={x.icon}
            description={x.description}
            link={x.link}
          />
          ))}
    </div>
    <br />
    <br />
    </div>
  )
}

export default Usecase