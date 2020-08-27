module.exports = {
    release: {
        branch: "main"
    },
    plugins: [
        "@semantic-release/npm",
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator"
    ]
};
