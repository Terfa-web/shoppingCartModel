//get the store/data information from a json file and render the info here.
import  StoreItem  from '../components/StoreItem'
import {Col, Row} from 'react-bootstrap'
import storeItems from '../data/items.json'

export function Store () {
  return <>
      <h1>Store</h1> 
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map(item =>
           {
            return(
            <Col key={item.id}><StoreItem {...item} />
        </Col>
        )})}
        
      </Row>
        </>
}