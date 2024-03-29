import Link, {type LinkProps} from 'next/link';
import {useRouter} from 'next/router';
import React, {Children, type ReactElement, useEffect, useState} from 'react';

// Copied from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx

export type ActiveLinkProps = LinkProps & {
    children: ReactElement;
    activeClassName?: string;
};

export const ActiveLink: React.FC<ActiveLinkProps> = ({children, activeClassName = 'active', ...props}) => {
    const {asPath, isReady} = useRouter();

    const child = Children.only(children);
    const childClassName = (child.props as {className?: string}).className || '';
    const [className, setClassName] = useState(childClassName);

    useEffect(() => {
        // Check if the router fields are updated client-side
        if (isReady) {
            // Dynamic route will be matched via props.as
            // Static route will be matched via props.href
            const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;

            // Using URL().pathname to get rid of query and hash
            const activePathname = new URL(asPath, location.href).pathname;

            const newClassName =
                linkPathname === activePathname ? `${childClassName} ${activeClassName}`.trim() : childClassName;

            if (newClassName !== className) {
                setClassName(newClassName);
            }
        }
    }, [asPath, isReady, props.as, props.href, childClassName, activeClassName, setClassName, className]);

    return (
        <Link {...props} legacyBehavior>
            {React.cloneElement(child, {
                className: className || null
            })}
        </Link>
    );
};
