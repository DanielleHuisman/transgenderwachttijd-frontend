import React from 'react';
import {Helmet} from 'react-helmet';
import {Button, Container} from 'reactstrap';

export const NotFound = () => {
    return (
        <Container>
            <Helmet title="Not Found" />
            <h2>Page not found</h2>
            <p>This page does not appear to exist.</p>

            <Button color="primary" onClick={() => window.location.pathname = '/'}>
                Go to home
            </Button>
        </Container>
    );
};
