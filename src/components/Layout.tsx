import {Header} from './Header';

export const Layout: React.FC<React.PropsWithChildren> = ({children}) => (
    <>
        <header className="my-3">
            <Header />
        </header>

        <main>{children}</main>
    </>
);
