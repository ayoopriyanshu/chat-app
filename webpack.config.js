const path = require('path');

module.exports = {
    // Your existing configuration
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/')
        }
    }
};
