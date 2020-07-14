var React = require('react');

function DefaultLayout(props) {
    let links = [];

    if (props.styles) {
        props.styles.forEach((element) => {
            const link = (
                <link
                    rel="stylesheet"
                    type="text/css"
                    href={'stylesheets/' + element}
                />
            );

            links.push(link);
        });
    }

    return (
        <html>
            <head>
                {links}
                <title>{props.title}</title>
            </head>
            <body>{props.children}</body>
        </html>
    );
}

module.exports = DefaultLayout;
