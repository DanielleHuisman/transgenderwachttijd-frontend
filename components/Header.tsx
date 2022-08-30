import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import {Container, Nav, NavItem, NavLink} from 'reactstrap';

import {ActiveLink} from './ActiveLink';

export const Header: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container className="text-center">
            <Head>
                <title>{t('title', 'transgenderwachttijd.nl')}</title>
            </Head>

            <h1>{t('title', 'transgenderwachttijd.nl')}</h1>

            <Nav pills>
                <NavItem>
                    <ActiveLink href="/" passHref>
                        <NavLink>Graphs</NavLink>
                    </ActiveLink>
                </NavItem>
                <NavItem>
                    <ActiveLink href="/about" passHref>
                        <NavLink>About</NavLink>
                    </ActiveLink>
                </NavItem>
            </Nav>
        </Container>
    );
};
