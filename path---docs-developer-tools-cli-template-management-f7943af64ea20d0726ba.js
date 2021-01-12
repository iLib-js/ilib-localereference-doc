webpackJsonp([60851945927205],{969:function(e,t){e.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n<ul>\n<li><a href="#enact-cli-template-support">Enact CLI Template Support</a></li>\n<li><a href="#install-vs-link"><code class="language-text">install</code> vs <code class="language-text">link</code></a></li>\n<li><a href="#developing-templates">Developing Templates</a></li>\n</ul>\n</nav>\n<h2 id="enact-cli-template-support"><a href="#enact-cli-template-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enact CLI Template Support</h2>\n<div class="gatsby-highlight" data-language="none">\n      <pre class="language-none"><code class="language-none">  Usage\n    enact template <action> ...\');\n\n  Actions\n    enact template install [source] [name]\n    Install a template from a local or remote source\n\n        source            Git URI, npm package or local directory\n                          (default: cwd)\n        name              Specific name for the template\n\n    enact template link [directory] [name]\n    Symlink a directory into template management\n\n        directory         Local directory path to link\n                          (default: cwd)\n        name              Specific name for the template\n\n    enact template remove <name>\n    Remove a template by name\n\n        name              Name of template to remove\n\n    enact template default [name]\n    Choose a default template for "enact create"\n\n        name              Specific template to set default\n\n    enact template list\n    List all templates installed/linked</code></pre>\n      </div>\n<p>An Enact Moonstone template is included within the Enact CLI as the default template. Additional templates can be downloaded or created as needed.</p>\n<h2 id="code-classlanguage-textinstallcode-vs-code-classlanguage-textlinkcode"><a href="#code-classlanguage-textinstallcode-vs-code-classlanguage-textlinkcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">install</code> vs <code class="language-text">link</code></h2>\n<p>Due to the similar nature in these actions, it’s worth some clarification. The <code class="language-text">install</code> action pulls from a local or remote source, copying the template files to a user-storage location (<code class="language-text">%APPDATA%\\.enact</code> on Windows, <code class="language-text">$HOME/.enact</code> on all other systems).  The <code class="language-text">link</code> action, on the other hand, will create a symlink from a local source directory into the user-storage location.  No files are physically copied, only linked. As such, the local linked source directory should not be deleted and any changes made within it will be available the next time a template is used. It is generally only advisable to use the <code class="language-text">link</code> action when actively developing templates.</p>\n<h2 id="developing-templates"><a href="#developing-templates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developing Templates</h2>\n<p>Read about <a href="../developing-a-template/">developing an Enact CLI template</a> if you’re intested in creating your own.</p>',frontmatter:{title:"Template Management",github:"https://github.com/enactjs/cli/blob/develop/docs/template-management.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-tools/cli/installation/"},frontmatter:{title:"Installation"}}},{node:{fields:{slug:"/docs/developer-tools/cli/starting-a-new-app/"},frontmatter:{title:"Starting a New App"}}},{node:{fields:{slug:"/docs/developer-tools/cli/loading-existing-app/"},frontmatter:{title:"Loading an Existing App"}}},{node:{fields:{slug:"/docs/developer-tools/cli/building-apps/"},frontmatter:{title:"Building Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/isomorphic-support/"},frontmatter:{title:"Isomorphic Support"}}},{node:{fields:{slug:"/docs/developer-tools/cli/serving-apps/"},frontmatter:{title:"Serving Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/testing-apps/"},frontmatter:{title:"Testing Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/ejecting-apps/"},frontmatter:{title:"Ejecting Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/template-management/"},frontmatter:{title:"Template Management"}}},{node:{fields:{slug:"/docs/developer-tools/cli/developing-a-template/"},frontmatter:{title:"Developing a Template"}}},{node:{fields:{slug:"/docs/developer-tools/cli/"},frontmatter:{title:"Enact CLI Development Tool"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/developer-tools/cli/template-management/",title:"Template Management",parentRegex:"/\\/docs\\/developer-tools\\/cli(\\/[^/]*)?\\/$/"}}}});