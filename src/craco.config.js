const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@scss': path.resolve(__dirname, 'src/styles'),
        },
    },
};