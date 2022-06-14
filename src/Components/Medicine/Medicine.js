import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';



function Medicine({data}) {
    return (

        data.map((d , i) => 
            <Card>
                <CardBody>
                    <CardTitle>{d.name}</CardTitle>
                    <CardSubtitle>{d.id}</CardSubtitle>
                    <CardSubtitle>{d.salary}</CardSubtitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        )

    );
}
export default Medicine;