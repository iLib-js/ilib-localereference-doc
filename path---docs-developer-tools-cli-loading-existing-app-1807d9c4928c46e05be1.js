webpackJsonp([0xa0b6981d00e5],{966:function(e,t){e.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n<ul>\n<li><a href="#acquire-the-source">Acquire the Source</a></li>\n<li><a href="#install-the-dependencies">Install the Dependencies</a></li>\n<li><a href="#available-npm-tasks">Available npm Tasks</a></li>\n</ul>\n</nav>\n<h2 id="acquire-the-source"><a href="#acquire-the-source" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acquire the Source</h2>\n<p>Download the app’s source code, usually, from a git repository. Make sure you have correct SSH access rights for the repo.  For example:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone git@github.com:user/myapp.git</code></pre>\n      </div>\n<h2 id="install-the-dependencies"><a href="#install-the-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install the Dependencies</h2>\n<p>Enact apps are just like any other npm package. Navigate to the app’s root directory (the base directory with the <strong>package.json</strong>). From there, you can install the dependencies the standard way:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span></code></pre>\n      </div>\n<h2 id="available-npm-tasks"><a href="#available-npm-tasks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Available npm Tasks</h2>\n<p>npm tasks vary by package and are defined within a <code class="language-text">scripts</code> object in the <strong>package.json</strong> file. If the app was created via the Enact CLI, then it will support the following npm task aliases:</p>\n<ul>\n<li><code class="language-text">npm run serve</code> - Packages and hosts the app on a local http server using <a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a>. Supports hot module replacement and inline updates as the source code changes.</li>\n<li><code class="language-text">npm run pack</code> - Packages the app into <strong>./dist</strong> in development mode (unminified code, with any applicable development code).</li>\n<li><code class="language-text">npm run pack-p</code> - Packages the app into <strong>./dist</strong> in production mode (minified code, with development code dropped).</li>\n<li><code class="language-text">npm run watch</code> - Packages in development mode and sets up a watcher that will rebuild the app whenever the source code changes.</li>\n<li><code class="language-text">npm run test</code> - Builds and executes any test spec files within the project.</li>\n<li><code class="language-text">npm run lint</code>- Lints the project’s JavaScript files according to the Enact ESLint configuration settings and optionally TSLint.</li>\n<li><code class="language-text">npm run clean</code> - Deletes the <strong>./dist</strong> directory</li>\n<li><code class="language-text">npm run license</code> - Outputs a list of licenses used by modules required by the project</li>\n</ul>',frontmatter:{title:"Loading an Existing App",github:"https://github.com/enactjs/cli/blob/develop/docs/loading-existing-app.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-tools/cli/installation/"},frontmatter:{title:"Installation"}}},{node:{fields:{slug:"/docs/developer-tools/cli/starting-a-new-app/"},frontmatter:{title:"Starting a New App"}}},{node:{fields:{slug:"/docs/developer-tools/cli/loading-existing-app/"},frontmatter:{title:"Loading an Existing App"}}},{node:{fields:{slug:"/docs/developer-tools/cli/building-apps/"},frontmatter:{title:"Building Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/isomorphic-support/"},frontmatter:{title:"Isomorphic Support"}}},{node:{fields:{slug:"/docs/developer-tools/cli/serving-apps/"},frontmatter:{title:"Serving Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/testing-apps/"},frontmatter:{title:"Testing Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/ejecting-apps/"},frontmatter:{title:"Ejecting Apps"}}},{node:{fields:{slug:"/docs/developer-tools/cli/template-management/"},frontmatter:{title:"Template Management"}}},{node:{fields:{slug:"/docs/developer-tools/cli/developing-a-template/"},frontmatter:{title:"Developing a Template"}}},{node:{fields:{slug:"/docs/developer-tools/cli/"},frontmatter:{title:"Enact CLI Development Tool"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/developer-tools/cli/loading-existing-app/",title:"Loading an Existing App",parentRegex:"/\\/docs\\/developer-tools\\/cli(\\/[^/]*)?\\/$/"}}}});