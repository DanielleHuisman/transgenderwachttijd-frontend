import React from 'react';
import {FallbackProps} from 'react-error-boundary';
import {Helmet} from 'react-helmet';
import {Button, Container} from 'reactstrap';

export const ErrorPage: React.FC<FallbackProps> = ({error}) => {
    console.error(error);
    return (
        <Container>
            <Helmet title="Error" />

            <h2>Error</h2>
            <p>An error occured, please try again later.</p>

            <Button color="primary" onClick={() => window.location.pathname = '/'}>
                Reload
            </Button>

            <p className="mt-5">
                <b>Technical details:</b>
                <code className="d-block">
                    {error.name}: {error.message}
                </code>
                <code className="d-block">
                    {error.toString()}
                </code>
                <code className="d-block">
                    {error.stack}
                </code>
            </p>
        </Container>
    );
};
