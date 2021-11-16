import Head from 'next/Head';
import axios from 'axios';
import { Header, Button, List } from 'semantic-ui-react';

const Post = ({item}) => {
  const { name, description, price, image_link, product_type } = item;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      
      <Header as='h1'>{name}</Header>
      <img src={image_link} alt={name} />
      <List>
        <List.Item>
            <List.Content><Button color='blue'>BUY</Button></List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='marker' />
            <List.Content>PRICE : {price}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='marker' />
            <List.Content>PRODUCT TYPE : {product_type}</List.Content>
        </List.Item>
      </List>
      <Header as='h3'>description</Header>
      <div>{description}</div>
    </div>
  )
}

export default Post;

export async function getServerSideProps(context){
  const id = context.params.id;
  const { data } = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)

  return {
    props: {
      item: data
    }
  }
}