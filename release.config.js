module.exports = {
    release: {
        branch: "main"
    },
    plugins: [
        "@semantic-release/npm",
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github",
            {
                assets: ["./**"]
            }
        ],
        [
            "@semantic-release/git",
            {
                assets: ["package.json"],
                message: "🚀: ${nextRelease.version}"
            }
        ]
    ]
};
