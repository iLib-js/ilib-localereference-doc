webpackJsonp([0xf4a89ac6c6cc],{926:function(n,s){n.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n<ul>\n<li><a href="#roles">Roles</a></li>\n<li><a href="#attributes">Attributes</a></li>\n<li><a href="#custom-components">Custom Components</a></li>\n</ul>\n</nav>\n<p>We recognize that applications built using our framework should be usable by anyone regardless of ability. As a result, accessibility has been a key concern for Enact since inception.</p>\n<h2 id="roles"><a href="#roles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roles</h2>\n<p>We address native semantic meaning and accessibility by assigning <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles">ARIA roles</a> to custom components. When possible, we’ve assigned the relevant role to each of our custom components which can be overridden by users if needed.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> CheckboxItem <span class="token keyword">from</span> <span class="token string">\'@enact/moonstone/CheckboxItem\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token comment">/* Renders a CheckboxItem with the default role, checkbox */</span>\n            <span class="token operator">&lt;</span>CheckboxItem<span class="token operator">></span>Sign me up <span class="token keyword">for</span> Enact news<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>CheckboxItem<span class="token operator">></span>\n            <span class="token comment">/* Renders a CheckboxItem with the custom role, menuitemcheckbox */</span>\n            <span class="token operator">&lt;</span>CheckboxItem role<span class="token operator">=</span><span class="token string">"menuitemcheckbox"</span><span class="token operator">></span>Sign me up <span class="token keyword">for</span> Enact news<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>CheckboxItem<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="attributes"><a href="#attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Attributes</h2>\n<p>There are also a set of ARIA attributes that reflect the current state of a component such as <code class="language-text">aria-checked</code> for a checkbox or <code class="language-text">aria-valuetext</code> for a slider. In these cases, Enact will map the public prop (e.g. <code class="language-text">selected</code> or <code class="language-text">value</code>) to the appropriate ARIA attribute.</p>\n<blockquote>\n<p>In <code class="language-text">@enact/moonstone</code>, some components include additional ARIA configurations specific to webOS. Those may be (or may soon be) overridden by consumers to suit their own requirements.</p>\n</blockquote>\n<h2 id="custom-components"><a href="#custom-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Components</h2>\n<p>We’ve included a few custom components that may be useful to build accessible applications. These are not required but they can provide some syntactic sugar for ease of development.</p>\n<h3 id="moonstoneregion"><a href="#moonstoneregion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>moonstone/Region</h3>\n<p><a href="../../modules/moonstone/Region/">moonstone/Region</a> provides a labeled region to group components. The <code class="language-text">title</code> is wrapped by a <a href="../../modules/moonstone/Divider/">moonstone/Divider</a> to provide visual context to the <code class="language-text">children</code>. The Divider and <code class="language-text">children</code> are wrapped by a <code class="language-text">&lt;div role=&quot;region&quot;&gt;</code> with its <code class="language-text">aria-label</code> set to the <code class="language-text">title</code> to provide aural context.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import Region from &#39;@enact/moonstone/Region&#39;;\nimport CheckboxItem from &#39;@enact/moonstone/CheckboxItem&#39;;\nimport Group from &#39;@enact/ui/Group&#39;;\nimport React from &#39;react&#39;;\n\nconst App = () =&gt; {\n    return (\n        &lt;Region title=&quot;Select an Option&quot;&gt;\n            &lt;Group childComponent={CheckboxItem} selectedProp=&quot;selected&quot;&gt;\n                {items}\n            &lt;/Group&gt;\n        &lt;/Region&gt;\n    );\n};</code></pre>\n      </div>\n<h3 id="uia11ydecorator"><a href="#uia11ydecorator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ui/A11yDecorator</h3>\n<p><a href="../../modules/ui/A11yDecorator/">ui/A11yDecorator</a> is a Higher-Order Component that helps provide constant hint text to precede or follow the <code class="language-text">aria-label</code> for a component. This is most useful in cases where the <code class="language-text">aria-label</code> changes but the content before or after it is constant.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> A11yDecorator <span class="token keyword">from</span> <span class="token string">\'@enact/ui/A11yDecorator\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> CustomComponent <span class="token keyword">from</span> <span class="token string">\'./components/CustomComponent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">A11yDecorator</span><span class="token punctuation">(</span>CustomComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token comment">/* \n         * passes aria-label to CustomComponent with accessibilityPreHint, props.label, and\n         * accessibiltyHint joined together with spaces\n         */</span>\n        <span class="token operator">&lt;</span>Component\n            accessibilityPreHint<span class="token operator">=</span><span class="token string">"before text"</span>\n            aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n            accessibilityHint<span class="token operator">=</span><span class="token string">"after text"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="uiannouncedecorator"><a href="#uiannouncedecorator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ui/AnnounceDecorator</h3>\n<p><a href="../../modules/ui/AnnounceDecorator/">ui/AnnounceDecorator</a> provides a Higher-Order Component that adds the ability for the Wrapped component to notify the user of a state change. It provides a callback to the Wrapped component that can be called with a string which is inserted into a node with the <a href="https://www.w3.org/TR/wai-aria/#alert"><code class="language-text">alert</code> role</a> to notify the user.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> AnnounceDecorator <span class="token keyword">from</span> <span class="token string">\'@enact/ui/AnnounceDecorator\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ExampleComponentBase <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token comment">// passed by AnnounceDecorator</span>\n        announce<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func\n    <span class="token punctuation">}</span>\n\n    <span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>announce<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n        <span class="token function">announce</span><span class="token punctuation">(</span><span class="token string">\'this text will be alerted to user by TTS\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">&lt;</span>div<span class="token operator">></span>\n            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>notify<span class="token punctuation">}</span><span class="token operator">></span>Notify on Click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ExampleComponent <span class="token operator">=</span> <span class="token function">AnnounceDecorator</span><span class="token punctuation">(</span>ExampleComponentBase<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token comment">/* when clicked, the user will be alerted with \'this text will be alerted to user by TTS\' */</span>\n        <span class="token operator">&lt;</span>ExampleComponent <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{title:"Accessibility Support in Enact",github:"https://github.com/enactjs/enact/blob/develop/docs/accessibility.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/accessibility/"},frontmatter:{title:"Accessibility Support in Enact"}}},{node:{fields:{slug:"/docs/developer-guide/resources/"},frontmatter:{title:"Additional Developer Resources"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/"},frontmatter:{title:"Contribution Guide"}}},{node:{fields:{slug:"/docs/developer-guide/creating-components/"},frontmatter:{title:"Creating Components the Enact Way"}}},{node:{fields:{slug:"/docs/developer-guide/best-practices/"},frontmatter:{title:"Enact Best Practices"}}},{node:{fields:{slug:"/docs/developer-guide/performance/"},frontmatter:{title:"Enact Performance Guide"}}},{node:{fields:{slug:"/docs/developer-guide/glossary/"},frontmatter:{title:"Glossary"}}},{node:{fields:{slug:"/docs/developer-guide/migration/"},frontmatter:{title:"Migration Guides"}}},{node:{fields:{slug:"/docs/developer-guide/redux/"},frontmatter:{title:"Redux"}}},{node:{fields:{slug:"/docs/developer-guide/spotlight/"},frontmatter:{title:"Spotlight"}}},{node:{fields:{slug:"/docs/developer-guide/testing-components/"},frontmatter:{title:"Testing Your Components"}}},{node:{fields:{slug:"/docs/developer-guide/theming/"},frontmatter:{title:"Theming"}}},{node:{fields:{slug:"/docs/developer-guide/interoperability/"},frontmatter:{title:"Using Enact with Third-party Libraries"}}},{node:{fields:{slug:"/docs/developer-guide/why-use-kind/"},frontmatter:{title:"Why Use kind()?"}}},{node:{fields:{slug:"/docs/developer-guide/i18n/"},frontmatter:{title:"i18n (Internationalization)"}}},{node:{fields:{slug:"/docs/developer-guide/webos/"},frontmatter:{title:"webOS Support Module"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/developer-guide/accessibility/",title:"Accessibility Support in Enact",parentRegex:"/\\/docs\\/developer-guide(\\/[^/]*)?\\/$/"}}}});