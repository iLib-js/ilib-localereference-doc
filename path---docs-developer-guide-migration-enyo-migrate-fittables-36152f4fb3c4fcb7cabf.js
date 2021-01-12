webpackJsonp([41626855077935],{942:function(a,e){a.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n</nav>\n<p>Enact does not provide Enyo’s <strong>Fittable</strong> components.  If you are porting an Enyo application that uses\nFittables (<code class="language-text">FittableColumns</code>, <code class="language-text">FittableRows</code>, <code class="language-text">FittableLayout</code>, etc.) to Enact, you can use other methods,\nsuch as the <strong>CSS Flexible Box Layout Module</strong> (flexbox).  Level 1 is currently a <a href="https://www.w3.org/Consortium/Process-20010208/tr.html#last-call">W3C Last Call Working Draft</a> and is widely supported by modern browsers.</p>\n<p>Using flexbox has some performance implications, so consider that a basic column layout can often be\nobtained simply by applying the <code class="language-text">display: inline-block</code> style to the children of a component.  Most Enact\ncomponents have <code class="language-text">display: block</code> style (row layout) by default.</p>\n<h3 id="fittables"><a href="#fittables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fittables</h3>\n<p>For a brief refresher, Fittables allowed you to specify how to fit child components by using either the\n<code class="language-text">FittableRowsLayout</code> or the <code class="language-text">FittableColumnsLayout</code> as well as letting you specify a single child\ncomponent to ‘fit’ the available space after the other child components were rendered (or given a size).</p>\n<h4 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h4>\n<p>This example demonstrates a simple usage of Fittables.  Note that only one child component can have\n<code class="language-text">fit: true</code>.  The named <code class="language-text">fitter</code> component will stretch to fill the space of <code class="language-text">fittableColumn</code>.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token operator">...</span>\ncomponents<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">\'fittableColumn\'</span><span class="token punctuation">,</span> layoutKind<span class="token operator">:</span> FittableColumnsLayout<span class="token punctuation">,</span> components<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token punctuation">{</span>style<span class="token operator">:</span> <span class="token string">\'width: 5em;\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">\'fitter\'</span><span class="token punctuation">,</span> fit<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>style<span class="token operator">:</span> <span class="token string">\'width: 5em;\'</span><span class="token punctuation">}</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n<span class="token operator">...</span></code></pre>\n      </div>\n<h3 id="flexbox-layout"><a href="#flexbox-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flexbox Layout</h3>\n<p>Using flexbox allows you to take even finer-grained control over how and where child nodes are laid out.\nA point to note between Fittables and flexbox is how you consider a <strong>row</strong> and a <strong>column</strong>.  In the\nFittable example, the <code class="language-text">FittableColumnsLayout</code> component behaves as a row (the child components are the\n‘columns’ for that row) similarly to specifying <code class="language-text">flex-direction: row</code> style for a flex container.</p>\n<h4 id="example-1"><a href="#example-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h4>\n<p>This is a simple example of creating a <code class="language-text">FittableColumnsLayout</code> style with Enact and flexbox. This\nexample uses inline <code class="language-text">style</code> tags, though using CSS classes would be preferable.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>display<span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n\t<span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"width: 5em;"</span><span class="token operator">></span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t<span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>flexGrow<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\t<span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"width: 5em;"</span><span class="token operator">></span><span class="token constant">C</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></code></pre>\n      </div>\n<p>Note: To keep other children from shrinking, you can apply <code class="language-text">flexShrink: 0</code> style to them.</p>\n<h4 id="see-also"><a href="#see-also" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>See Also</h4>\n<ul>\n<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a></li>\n</ul>',frontmatter:{title:"Migrating Enyo Fittables",github:"https://github.com/enactjs/enact/blob/develop/docs/migration/enyo/migrate-fittables.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrating-enyo-apps/"},frontmatter:{title:"Enyo Application Migration Guide"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/enyo-enact-component-map/"},frontmatter:{title:"Enyo to Enact Component Map"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrate-fittables/"},frontmatter:{title:"Migrating Enyo Fittables"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/"},frontmatter:{title:"Migrating from Enyo"}}},{node:{fields:{slug:"/docs/developer-guide/migration/enyo/migrate-i18n/"},frontmatter:{title:"Migrating i18n"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}}]}},pathContext:{slug:"/docs/developer-guide/migration/enyo/migrate-fittables/",title:"Migrating Enyo Fittables",parentRegex:"/\\/docs\\/developer-guide\\/migration\\/enyo(\\/[^/]*)?\\/$/"}}}});