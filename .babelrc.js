module.exports = {
    "presets": ['@babel/preset-env', "@babel/preset-react"],
    "env": {
        "development": {
            "presets": [["@babel/preset-react", {"development": true}]]
        }
    },
    "plugins": [
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ],
        ["import",
            {
                "libraryName": "antd",
                "libraryDirectory": "lib",
                "style": true
            },
            "ant"
        ]
    ]
}