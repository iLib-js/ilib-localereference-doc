webpackJsonp([0xa8e5559fd9fc],{929:function(e,t){e.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n</nav>\n<p>Avid developers often wonder if they are doing the right thing when it comes to the CHANGELOG.md file. If this describes\nyou, fear not. This guide will help you understand this humble file and its use within the Enact framework.</p>\n<h3 id="locations"><a href="#locations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Locations</h3>\n<p>Each Enact library and tool has its own CHANGELOG.md file. This file is located in the corresponding base directory\n(e.g. the CHANGELOG/ for Moonstone is located in <code class="language-text">enact/packages/moonstone</code>). The Enact monorepo also has a root-level\nCHANGELOG.md. Developers will primarily concern themselves with the versions located in the libraries and the tools as\nthe root level is only updated before releases.</p>\n<h3 id="etiquette"><a href="#etiquette" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Etiquette</h3>\n<p>Developers making API changes, adding or removing components or changing user or developer visible functionality should\nupdate the CHANGELOG.md file to call attention to the change. When deciding what to report, err on the side of too much\ninformation rather than too little. Some examples may help illustrate this:</p>\n<h4 id="should-document"><a href="#should-document" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Should document</h4>\n<ul>\n<li>Changed the alignment of text within a control</li>\n<li>Renamed a property</li>\n<li>Deprecated a component</li>\n</ul>\n<h4 id="probably-do-not-need-to-document"><a href="#probably-do-not-need-to-document" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Probably do not need to document</h4>\n<ul>\n<li>Refactored code</li>\n<li>Fixed a non-user-visible bug</li>\n</ul>\n<p>Comments should be written as markdown and each should begin with a bullet <code class="language-text">*</code>. Component names should be wrapped in <code class="language-text">`</code>\nand include the library name (`moonstone/Component`, for example).</p>\n<h3 id="sections"><a href="#sections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sections</h3>\n<p>Each release has its own section within the CHANGELOG.md file. Unreleased changes appear in a section titled <code class="language-text">unreleased</code>.\nThis section is where developers should insert new entries.</p>\n<p>The following sub-sections are available:</p>\n<h4 id="added"><a href="#added" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Added</h4>\n<p>This section is used to call attention to new features, properties and components. In this section, it should be assumed\nthat the word ‘Added’ appears before the text. Example:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">* `moonstone/NewComponent` Component</code></pre>\n      </div>\n<h4 id="changed"><a href="#changed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changed</h4>\n<p>This section highlights changes to existing features, properties and components. Example:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">* `moonstone/ChangedComponent` to no longer accept the `invalid` property</code></pre>\n      </div>\n<h4 id="fixed"><a href="#fixed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fixed</h4>\n<p>This section is for highlighting bug fixes that affect developers and end users. If a bug fix actually changes the\nfunctionality of a component, it should likely be listed in the Changed section. Example:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">* Issue that caused mouse cursor to display upside down</code></pre>\n      </div>',frontmatter:{title:"Documenting Changes",github:"https://github.com/enactjs/enact/blob/develop/docs/contributing/changelogs.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/contributing/building-enact-locally/"},frontmatter:{title:"Building Enact Locally"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/"},frontmatter:{title:"Contribution Guide"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/documentation/"},frontmatter:{title:"Documentation Style Guide"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/changelogs/"},frontmatter:{title:"Documenting Changes"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/dco/"},frontmatter:{title:"Enact Developer Certificate of Origin"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/developer-guide/contributing/changelogs/",title:"Documenting Changes",parentRegex:"/\\/docs\\/developer-guide\\/contributing(\\/[^/]*)?\\/$/"}}}});