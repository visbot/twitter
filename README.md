# `tweetback` Twitter Archive

Take ownership of your Twitter data. First talked about at [Jamstack Conf 2019](https://www.zachleat.com/web/own-your-content/) and in [this blog post](https://www.zachleat.com/web/own-my-tweets/).

## Demos

* https://visbot.github.io/twitter

## Features

* Built with [Eleventy](https://www.11ty.dev/)
* Each tweet has its own independent URL (with backwards/forwards threading!)
* Uses [`@tweetback/canonical`](https://github.com/tweetback/tweetback-canonical) to resolve other Twitter archives URLs (internal links stay in the archive and don’t link out to Twitter).
* `t.co` links are bypassed and original hyperlinks URLs are used.
* Links to users, tweets, non-truncated URLs.
* Nicer link formatting for links-to-tweets: @username/:id.
* Support some markdown: I sometimes use `backtick` markdown notation for code in my tweet text. This translates to `<code>` properly.
* Analytics:
	* See your most popular tweets
	* Who you retweet the most
	* Who you reply to the most
	* Frequently used swear words
	* Top emoji
	* Top hashtags

## Usage

### Populate the database from your Twitter Archive zip

1. Copy `./data/tweets.js` from your Twitter Archive `zip` file into the `./database` directory of this project.
1. Rename `window.YTD.tweet.part0` in `tweets.js` to `module.exports`
1. Run `npm run import`

### Build the web site

1. Edit the `_data/metadata.js` file to add metadata information.
1. Run `npm run build` or `npm start`

Note that the first build may take quite a long time (depending on the size of your archive), as remote media is fetched/downloaded into your project locally. Repeat builds will be much faster.

### Fetch additional tweets from the API

If you want to fetch additional tweets from the API and put them into your sqlite database:

1. You will need a twitter developer token an a `TWITTER_BEARER_TOKEN` environment variable (from the Twitter API v2).
1. Run `npm run fetch-new-data`

