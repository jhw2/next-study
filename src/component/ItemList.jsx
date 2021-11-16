import Link from 'next/link';
import { Card, Grid, Image } from 'semantic-ui-react';
import styles from '../../styles/List.module.css';

export default function ItemList({lists}) {
    return (
        <>
            <Grid className={styles.products}>
                <Grid.Row>
                {lists.map(item=>{
                    const { id, image_link, name, description, price } = item;
                    return (
                        <Link href={'views/'+id} key={id}>
                            <Card className={styles.card}>
                                <Image src={image_link} wrapped ui={false} />
                                <Card.Content>
                                <Card.Header>{name}</Card.Header>
                                <Card.Meta>PRICE : {price}</Card.Meta>
                                <Card.Description className={styles.description}>{description}</Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    )
                })}
            </Grid.Row>
            </Grid>
        </>
    )
  }