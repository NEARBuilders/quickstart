const { Post } = VM.require("buildhub.near/widget/components") || {
  Post: () => <></>,
};

function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const daoName = "Build DAO";
const feedLink = "https://nearbuilders.org/feed";

return {
  type: "app",
  routes: {
    all: {
      path: "buildhub.near/widget/Feed",
      blockHeight: "final",
      init: {
        name: "All",
        icon: "bi-list",
        requiredHashtags: ["build"],
      },
    },
    demo: {
      path: "buildhub.near/widget/Feed",
      blockHeight: "final",
      init: {
        name: "Demo",
        icon: "bi-lightbulb",
        requiredHashtags: ["build", "demo"],
        template: `## demo TITLE
(posted via [${daoName} Gateway](${feedLink}?tab=demo))

**What Demo are you proposing?**
- [Describe the Demo]

**Context or additional information:**
- [Provide any context or details]
`,
      },
    },
  },
};
