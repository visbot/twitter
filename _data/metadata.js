let data = {
	username: "visbot", // No leading @ here
	homeLabel: "Home",
	homeUrl: "https://visbot.github.io/twitter-archive/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;