=== WP-Gistpen ===

Contributors: JamesDiGioia  
Donate link: http://jamesdigioia.com/  
Tags: gist, code snippets, codepen  
Requires at least: 4.7  
**Requires PHP**: 5.4  
Tested up to: 5.2  
Stable tag: 1.2.1  
License: GPLv2  
License URI: http://www.gnu.org/licenses/gpl-2.0.html  

== Description ==

A self-hosted alternative to putting your code snippets on Gist.

[![Build Status](https://travis-ci.org/intraxia/wp-gistpen.svg?branch=latest)](https://travis-ci.org/intraxia/wp-gistpen)  [![Maintainability](https://api.codeclimate.com/v1/badges/0eee18837a01d55dd33e/maintainability)](https://codeclimate.com/github/intraxia/wp-gistpen/maintainability)

You use WordPress because you want control over your writing. Why give Gist or Codepen your code snippets? WP-Gistpen is a self-hosted replacement for your WordPress blog.

Features include:

* Revision saving
* Gist import & export
* PrismJS syntax highlighting
* Prism-based text editor
* oEmbed snippet embedding

== Installation ==

= Using the WordPress Dashboard =

1. Navigate to the 'Add New' in the plugins dashboard
2. Search for 'wp-gistpen'
3. Click 'Install Now'
4. Activate the plugin on the Plugin dashboard

= Uploading in WordPress Dashboard =

1. Download `wp-gistpen.zip` from the WordPress plugins repository.
2. Navigate to the 'Add New' in the plugins dashboard
3. Navigate to the 'Upload' area
4. Select `wp-gistpen.zip` from your computer
5. Click 'Install Now'
6. Activate the plugin in the Plugin dashboard

= Using FTP =

1. Download `wp-gistpen.zip`
2. Extract the `wp-gistpen` directory to your computer
3. Upload the `wp-gistpen` directory to the `/wp-content/plugins/` directory
4. Activate the plugin in the Plugin dashboard

== Frequently Asked Questions ==

= What are the plugin's requirements? =

Your PHP version should be 5.4+, and you must be running WordPress v4.7+. This is because WP-Gistpen relies on the WP-API infrastructure.

= How do I create an archive page for my Gistpens? =

Go to the "Pages" screen and create a new, blank page with the name "Gistpens" and click publish. That URL will now display all of your Gistpens. You can link to this page in the menu to direct users to your Gistpens archive page. You can change the name of the page; just make sure the slug of the page is "gistpens".

= How do I create a Gistpen and insert it into the post? =

To add a new Gistpen, go to Gistpens -> Add New, and add your code. You can enable or disable Gist syncing on a a per-Gistpen basis.

You can also create and insert a Gistpen directly into your post/page from the visual editor by clicking the code button. From the pop-up, search for your gistpen, select it, and click insert. Your shortcode will be inserted into the editor.

= How do I highlight specific lines in my Gistpen? =

To highlight a specific line, add `highlight=^^`, where ^^ is a line number or range of numbers you want highlighted, like this ([via PrismJS documentation](http://prismjs.com/plugins/line-highlight/)):

* A single number refers to the line with that number
* Ranges are denoted by two numbers, separated with a hyphen (-)
* Multiple line numbers or ranges are separated by commas.
* Whitespace is allowed anywhere and will be stripped off.

Examples:

* `highlight="5"`: The 5th line
* `highlight="1-5"`: Lines 1 through 5
* `highlight="1,4"`: Line 1 and line 4
* `highlight="1-2,5,9-20"`: Lines 1 through 2, line 5, lines 9 through 20

= How do I link to a specific line? =

You can link to a specific line in your Gistpen by linking to `#gistpen-{gistpen-slug}.{lines}`. The lines don't need to be highlighted in advance for the link to work, and they will be highlighted when the link is clicked. The `{lines}` should match the same format as above.

= How do I get my Gist token from GitHub? =

1. Login to GitHub.
2. Go to Settings -> Applications.
3. Under "Personal access tokens", click "Generate New Token."
4. Give it a name, click create
	* The default settings work, but make you sure you at least include the `gist` and `user` scopes.
5. Copy the generated token.
6. Paste it into the settings page.
7. ???
8. Profit!

= How do I sync my Gistpens to Gist? =

Gistpens can be exported en masse. All Gistpens will be synced, only if the Gistpen hasn't been synced yet, but **regardless of whether syncing for the Gistpen is enabled**. Syncing will then be enabled on the exported Gistpens.

If you do not want this, you can enable/disable Gistpen syncing on a per-Gistpen basis. Just click the checkbox on the Gistpen edit page, and any changes will be reflected on the corresponding Gist on update. If you uncheck that box, future changes will not be reflected on Gist.

To go this, go to the Gistpens settings page and click "Jobs". Next to the the "Export Job", click "Dispatch Job". After the Job is done, check out the log messages to ensure everything exported correctly.

= How do I import my Gistpens from Gist? =

Go to the Gistpents settings page and click "Jobs". Next to the "Import Job", click "Dispatch Job", then check out the log messages to ensure everything was imported correctly.

== Screenshots ==


1. The Insert Gistpen dialog after you click the pen in the visual editor.


2. Default theme - How your code will appear in your post.


3. Twilight theme with line numbers enabled. Check out all the themes at [PrismJS.com](http://prismjs.com).


4. The current options page – first page.


5. The current options page – second page.


6. The current options page – third page.


7. PrismJS-based text editor.

== Changelog ==

This change log follows the [Keep a Changelog standards](http://keepachangelog.com/). Versions follows [Semantic Versioning](http://semver.org/).

### 1.2.1

==== Fixed====

* Fixed rendering output with JSX language

= 1.2.0 =

**Note: This bumps the minimum required WordPress version to 4.7. A future release will bump the minimum WordPress version to 5.2 and the minimum PHP version to 5.6. This will be released as 2.0. There is plenty of time, but this is coming.**

**Added**


* Added slug to repo API
* Add copy shortcode button to editor
* Add API pagination to Repo resource
* Bump prism-themes and add new themes

**Fixed**


* Updated JS dependencies
* Fix button alignment on editor controls

= 1.1.6 =

**Fixed**


* Busted deploy

= 1.1.5 =

**Fixed**


* Add PHP version requirement
	* This was previously handled in code only, but will now appear in wp.org
* Render BE error messages in UI
* Remove JSS for smaller bundle

= 1.1.4 =

**Fixed**


* Added label to filename input
* Bumped dependencies


= 1.1.3 =

**Fixed**


* Escape filename on FE & BE
* Accessibility improvements
	* Add line numbers to the editor
	* Allow alt + tab to escape the editor
	* Improve border of focused controls
	* Fix toolbar colors

= [1.1.2][] - 2019-05-27 =

* Rewrite & stabilize FE into TypeScript & latest brookjs

= [1.1.1][] - 2018-06-28 =

* Fixed buggy deploy

= [1.1.0][] - 2018-06-22 =

* Upgrade the editor into React
* Remove LightNCandy
	* First step towards supporting php-5.3 again
* Tighten up Flowtypes
* Display spinner when saving

= [1.0.3][] - 2018-06-09 =

* More editor CSS fixes
* Generate languages.json instead of maintaining manually
* Validate blobs in API endpoint
	- Requires filename now
* Order Runs in descending order
* Fix demo code indentation
* Simplify Blob component implementation

= [1.0.2][] - 2018-04-03 =

* Fix CSS display in editor

= [1.0.1][] - 2018-04-03 =

* Fix deployment scripts
	* The old scripts resulted in a botched deployment with missing files. This readds them.

= [1.0.0][] - 2018-03-26 =

Almost three years in the making!

**Removed**

* Database migration from old versions
	* If you're on the latest version of WP-Gistpen, you should have no problems. Given that the plugin hasn't been updated on .org in 2+ years, and .org reports the only versions are 0.5.x+, anyone who is still using an old version of WP-Gistpen is unlikely to upgrade to 1.0.0+ anyway. We are going to remove the Migration code because it'll allow us to remove a lot of old code that is currently only being used by it.

		If you're using an old version of WP-Gistpen, you'll need to upgrade to 0.5.2+ before upgrading to 1.0.0 or the database migration will not be performed correctly. Fresh installs should have no problems either.

**Added**

* **Completely rewritten from the ground up**
* New internal architecture
	* Built on [Jaxion][], WordPress framework
	* Improved Database layer & use of Models
* WP-API integration
	* This requires an upgrade to WordPress 4.6+.
* New code snippet editor
	* Custom snippet editor
	* Built on [brookjs][], Prism, & React.js
* New Prism plugins:
	* Show invisibles: Display tabs and line returns as characters
	* Show language: Display the language in the embed
	* Copy-to-clipboard: Display button to copy code to clipboard
* Supports all Prism languages & built-in Prism themes + bonus from prism-themes

**Fixed**

* Fixed code sample display on mobile
* Fixed display on custom post type pages
* Fixed bug where adding two files would only save one at a time
* Tighten up revision saving logic

= [0.5.8] - 2015-07-26 =

**Fixed**

* Fixed a bug introduced in WordPress 4.2.3 where cap checks fail for `edit_post` on a post_id of 0.
* Also loosened a couple checks because null values were being cast to 0.

= [0.5.7] - 2015-05-23 =

**Fixed**

* Use `wpdb` to get the posts table for alternate prefix and Multisite compatibility (thanks @janizde!)

= [0.5.6] - 2015-02-17 =

**Fixed**

* Logic bugs raised by Travis

= [0.5.5] - 2015-02-15 =

**Fixed**

* Fixed syncing bug, renabled everything
	- So sorry about the multiple releases. Ran into the problem after deploying, and didn't want anyone's DB to get out-of-sync. Everything looks good now, but let me know if you experience issues.

= [0.5.4] - 2015-02-14 =

**Fixed**

* Disable importing/exporting en masse until we fix export/sync bug

= [0.5.2] - 2015-02-14 =

**Fixed**

* Add new database migration to fix Gist exports of pre-0.5.0 Gistpens

= [0.5.0] - 2015-02-14 =

**Added**

* MAJOR FEATURE: Gist interoperability
	- Gistpens can be exported to Gist on a case-by-case basis
	- Most Gists can be imported into Gistpen
		+ Unsupported languages get changed to "Plaintext" - sorry!
* New Feature: Revisions and history
* Bad tests for everything :/
* New languages:
	- Actionscript
	- Applescript
	- Dart
	- Eiffel
	- Erlang
	- Gherkin
	- Git
	- Haml
	- Handlebars
	- Jade
	- LaTeX
	- LESS
	- Markdown
	- Matlab
	- NASM
	- Perl
	- Powershell
	- R
	- Rust
	- Scheme
	- Smarty

**Changed**

* CMB -> CMB2
* Massive reorganization wit namespacing + autoloading
* Unminified scripts enqueued when `WP_SCRIPT_DEBUG` is true
* ACE editor rewritten in Backbone.js
	- Saving and updating all done with AJAX
* Menu icon pen -> code
* Improved .org deployment process (No more dumbass "forgot to minify js" commits/releases)

**Fixed**

* Deleting bug
	- Files were being left behind when Zips were deleted
* Strings are now translatable
* All languages cleaned up and verified working
	- HTML & XML are split again

= [0.4.0] - 2014-10-03 =

**Added**

* MAJOR FEATURE: Multiple files can be created in a single Gistpen
	- First step towards Gist compatibility
	- The database gets upgraded to account for this, so PLEASE make a backup before you upgrade
* ACE editor

**Fixed**

* Properly escaping content display

= [0.3.1] - 2014-08-03 =

**Fixed**

* Forgot to minify JavaScripts

= [0.3.0] - 2014-08-03 =

**Changed**

* Use [PrismJS](http://prismjs.com/) over SyntaxHighlighter

**Added**

* Options page
* Theme switching
* Line numbers plugin
* Line-highlighting
* Link to lines
* Languages:
	- C
	- Coffeescript
	- C#
	- Go
	- HTTP
	- ini
	- HTML/Markup (XML has been migrated here)
	- Objective-C
	- Swift
	- Twig

**Removed**

* Languages (*If you need any of these languages readded, please open an issue on [GitHub](https://github.com/intraxia/WP-Gistpen) to discuss.)
	- AppleScript
	- ActionScript3
	- ColdFusion
	- CPP
	- Delphi
	- Diff
	- Erlang
	- JavaFX
	- Perl
	- Vb

= [0.2.3] - 2014-07-28 =

**Fixed**

* Uninstall/reinstall language deleting bug

= [0.2.2] - 2014-07-28 =

**Fixed**

* Fix mis-enqueued scripts (again!)

= [0.2.1] - 2014-07-27 =

**Fixed**

* Fix mis-enqueued scripts

= [0.2.0] - 2014-07-26 =

**Added**

* "Insert Gistpen" button in TinyMCE

**Updated**

* Gistpen icon
* Code organization
* README
* Build script

= [0.1.2] - 2014-07-17 =

**Fixed**

* More bugfixes

= [0.1.1] - 2014-07-17 =

**Fixed**

* Autoloader

**Changed**

* Use defined constant for dir_path

= [0.1.0] - 2014-07-17 =

**Added**

* Gistpen post type
* Embeddable in posts via shortcode
* Use SyntaxHighlighter to display

[Jaxion]: https://github.com/intraxia/jaxion
[brookjs]: https://github.com/valtech-nyc/brookjs
[unreleased]: https://github.com/intraxia/WP-Gistpen/tree/develop
[1.2.1]: https://github.com/intraxia/WP-Gistpen/tree/1.2.1
[1.2.0]: https://github.com/intraxia/WP-Gistpen/tree/1.2.0
[1.1.6]: https://github.com/intraxia/WP-Gistpen/tree/1.1.6
[1.1.5]: https://github.com/intraxia/WP-Gistpen/tree/1.1.5
[1.1.4]: https://github.com/intraxia/WP-Gistpen/tree/1.1.4
[1.1.3]: https://github.com/intraxia/WP-Gistpen/tree/1.1.3
[1.1.2]: https://github.com/intraxia/WP-Gistpen/tree/1.1.2
[1.1.1]: https://github.com/intraxia/WP-Gistpen/tree/1.1.1
[1.1.0]: https://github.com/intraxia/WP-Gistpen/tree/1.1.0
[1.0.3]: https://github.com/intraxia/WP-Gistpen/tree/1.0.3
[1.0.2]: https://github.com/intraxia/WP-Gistpen/tree/1.0.2
[1.0.1]: https://github.com/intraxia/WP-Gistpen/tree/1.0.1
[1.0.0]: https://github.com/intraxia/WP-Gistpen/tree/1.0.0
[0.5.8]: https://github.com/intraxia/WP-Gistpen/tree/0.5.8
[0.5.7]: https://github.com/intraxia/WP-Gistpen/tree/0.5.7
[0.5.6]: https://github.com/intraxia/WP-Gistpen/tree/0.5.6
[0.5.5]: https://github.com/intraxia/WP-Gistpen/tree/0.5.5
[0.5.4]: https://github.com/intraxia/WP-Gistpen/tree/0.5.4
[0.5.2]: https://github.com/intraxia/WP-Gistpen/tree/0.5.2
[0.5.0]: https://github.com/intraxia/WP-Gistpen/tree/0.5.0
[0.4.0]: https://github.com/intraxia/WP-Gistpen/tree/0.4.0
[0.3.1]: https://github.com/intraxia/WP-Gistpen/tree/0.3.1
[0.3.0]: https://github.com/intraxia/WP-Gistpen/tree/0.3.0
[0.2.3]: https://github.com/intraxia/WP-Gistpen/tree/0.2.3
[0.2.2]: https://github.com/intraxia/WP-Gistpen/tree/0.2.2
[0.2.1]: https://github.com/intraxia/WP-Gistpen/tree/0.2.1
[0.2.0]: https://github.com/intraxia/WP-Gistpen/tree/0.2.0
[0.1.2]: https://github.com/intraxia/WP-Gistpen/tree/0.1.2
[0.1.1]: https://github.com/intraxia/WP-Gistpen/tree/0.1.1
[0.1.0]: https://github.com/intraxia/WP-Gistpen/tree/0.1.0
