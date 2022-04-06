const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
      mode: 'production',
      plugins: [
            new webpack.DefinePlugin({
                  'process.env': {
                        CHAIN_ID: JSON.stringify('0x1'),
                        CONTRACT_ADDRESS: JSON.stringify('0x15526AF86721E8265139e4F3D759c343aC1d53ce'),
                        PROJECT_ID: JSON.stringify('6244e0e67a36b849e1de6255'),
                        SERVER: JSON.stringify('https://reservax.55unity.com/'),
                        COST: JSON.stringify('125000000000000000'),
                        IS_PRE_SALE: true,
                        MAX_SUPPLY: JSON.stringify('81'),
                        MAX_MINTS_PER_USER: JSON.stringify('10')
                  }
            })
      ]
});