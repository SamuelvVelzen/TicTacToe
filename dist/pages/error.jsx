var React = require('react');
var DefaultLayout = require('./layouts/default');

function Error() {
    return (
        <DefaultLayout title="error" styles={['error.css']}>
            <div>error</div>
        </DefaultLayout>
    );
}

module.exports = Error;
