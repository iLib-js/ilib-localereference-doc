webpackJsonp([0x5d8e059c24dd],{947:function(a,e){a.exports={data:{markdownRemark:{html:'<nav role="navigation" class="page-toc">\n<ul>\n<li><a href="#overview">Overview</a></li>\n<li><a href="#managing-async-calls">Managing async calls</a></li>\n<li><a href="#dealing-with-long-lists-of-data">Dealing with long lists of data</a></li>\n<li><a href="#production-packing">Production Packing</a></li>\n<li><a href="#using-timestamps">Using timestamps</a></li>\n<li><a href="#working-with-webos">Working with webOS</a></li>\n</ul>\n</nav>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>Performance is a critical portion of any application. With Enact you can use all the same tools as you normally would for <a href="https://reactjs.org/docs/optimizing-performance.html">React</a>. We recommend reading this first to gain familiarity with performance testing in React.</p>\n<p>Some important things to understand are how to use <a href="https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab">React’s performance timeline</a>, understand how to use <code class="language-text">shouldComponentUpdate</code> to <a href="https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation">avoid reconciliation</a>, and learning to <a href="https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data">not mutate data</a> if possible.</p>\n<p>Enact provides some useful tools to help you achieve faster performance.</p>\n<h2 id="managing-async-calls"><a href="#managing-async-calls" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Managing async calls</h2>\n<p><a href="../../modules/core/util/#Job"><code class="language-text">Job</code></a> is a class in our <code class="language-text">core</code> module. It’s a useful wrapper for async things like <code class="language-text">setTimeout</code> and <code class="language-text">requestIdleCallback</code>. We also provide functionality like <code class="language-text">throttling</code> that we’ll describe below.</p>\n<h3 id="idle"><a href="#idle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Idle</h3>\n<p>In some modern browsers, there is support for <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback"><code class="language-text">requestIdleCallback</code></a>. In <code class="language-text">Job</code> we can access this through <code class="language-text">idle</code>. This calls a function only when the browser is in an idle state. This is great for functions that don’t need to be called immediately and can be called asynchronously without blocking the main thread.</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span>Job<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/core/util\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> importantButNotHighPriority <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Job</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">this</span><span class="token punctuation">.</span>importantButNotHighPriority<span class="token punctuation">.</span><span class="token function">idle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="throttle"><a href="#throttle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Throttle</h3>\n<p>Sometimes a function will execute too often. For instance, let’s take something like an <code class="language-text">onWheel</code> event. This event may fire too often for out liking, causing reduced performance and ultimately a bad user experience. To throttle it, we can do something like:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Job<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/core/util\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// We can set up Job like so this.</span>\n<span class="token comment">// The 2nd argument will set how often the event should fire in milliseconds</span>\n<span class="token keyword">const</span> throttleEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Job</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// When we run the event we can do this.</span>\n<span class="token comment">// This will run the event every 100ms even if we fire it more often.</span>\n<span class="token keyword">const</span> <span class="token function-variable function">handleWheel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>throttleWheelInc<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// render method</span>\n<span class="token operator">&lt;</span>div onWheel<span class="token operator">=</span><span class="token punctuation">{</span>handleWheel<span class="token punctuation">}</span><span class="token operator">></span>Wheel Div<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></code></pre>\n      </div>\n<h2 id="dealing-with-long-lists-of-data"><a href="#dealing-with-long-lists-of-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dealing with long lists of data</h2>\n<p>React recommends using <a href="https://reactjs.org/docs/optimizing-performance.html#virtualize-long-lists">virtualized lists</a> for rendering long lists of data. This is for a good reason. Virtualized lists drastically reduce the number of repainting and reflowing that normally cause browsers to slow down. Enact includes our own implementation of a <a href="../../modules/ui/VirtualList/"><code class="language-text">VirtualList</code></a> that makes it easy to achieve this performance boost.</p>\n<h2 id="production-packing"><a href="#production-packing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Production Packing</h2>\n<p>Enact’s <a href="../../developer-tools/cli/"><code class="language-text">cli</code></a> tool provides a way to create, test, and build applications. When packing your application for production, <a href="../../developer-tools/cli/"><code class="language-text">cli</code></a> makes it very simple.</p>\n<p>To build your app in production mode, run the command below. This will minify and “uglify” all of your code and bundle it into a single file.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">enact pack --production</code></pre>\n      </div>\n<h3 id="isomorphic"><a href="#isomorphic" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Isomorphic</h3>\n<p>To generate a static version of the first page, you can use our <a href="../../developer-tools/cli/isomorphic-support/"><code class="language-text">isomorphic</code></a> flag. This will create an HTML representation of your entry page, allowing users to see the initial content much faster.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">enact pack --production --isomorphic</code></pre>\n      </div>\n<h2 id="using-timestamps"><a href="#using-timestamps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using timestamps</h2>\n<p><a href="../../modules/core/util/#perfNow"><code class="language-text">perfNow</code></a> is useful for getting higher resolution timestamps to see how long a set of functions take. It’s a nice little wrapper around <a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance/now"><code class="language-text">window.performance.now</code></a> that will fall back to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now"><code class="language-text">Date.now</code></a>. </p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>perfNow<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/core/util\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> firstTime <span class="token operator">=</span> <span class="token function">perfNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> secondTime <span class="token operator">=</span> <span class="token function">perfNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> difference <span class="token operator">=</span> secondTime <span class="token operator">-</span> firstTime<span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="working-with-webos"><a href="#working-with-webos" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with webOS</h2>\n<p>If you’re developing for <a href="http://webosose.org/">webOS</a>, using Enact, we have some specialized tools to help you with that as well.</p>\n<p>We can run a log to see how long an application took to launch:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">pmctl perflog-report</code></pre>\n      </div>\n<p>This will print out some logs that looks like this:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">Type: AppLaunch\nGroup: com.webos.app.coolapp\nStart time: 2578.59\nProcess                        MsgID                     Time(s)  +Diff(s)  Extra\nsurface-manager-starfish       IM_KEY_INPUT              0.0      +0.0      key_value:0 key_code:272\nsam                            APP_LAUNCH                0.021    +0.021    status:start_prelaunching\nsam                            APP_LAUNCH                0.03     +0.009    status:start_memory_checking\nsam                            APP_LAUNCH                0.032    +0.002    status:start_launching\nWebAppMgr                      APPLAUNCH_START           0.033    +0.001    APP_ID:com.webos.app.coolapp\nWebAppMgr                      APPLOADED                 1.665    +1.632    APP_ID:com.webos.app.coolapp URL:file:///usr/webos/applications/com.webos.app.coolapp/index.html PID:24274\nsam                            GET_FOREGROUND_APPINFO    1.838    +0.173\nWebAppMgr                      WINDOW_FOCUSIN            1.84     +0.002    APP_ID:com.webos.app.coolapp\nElapsed time (s) : 1.840</code></pre>\n      </div>\n<p>While this is great, we may want to add some custom timestamps to this log. To achieve this we can simply add <code class="language-text">perfLog</code> from the <code class="language-text">webos</code> package. It takes three arguments: <code class="language-text">perfLog(MsgID, Type, Group)</code>.</p>\n<p>We can use it like this:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>perfLog<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@enact/webos/pmloglib\'</span>\n\n<span class="token function">perfLog</span><span class="token punctuation">(</span><span class="token string">\'APP_INTERACTIVE\'</span><span class="token punctuation">,</span> <span class="token string">\'AppLaunch\'</span><span class="token punctuation">,</span> <span class="token string">\'com.webos.app.coolapp\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The above will now output the same thing we previously had, but with more info.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">Process                        MsgID                     Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>  +Diff<span class="token punctuation">(</span>s<span class="token punctuation">)</span>  Extra\nsurface-manager-starfish       IM_KEY_INPUT              <span class="token number">0.0</span>      +0.0      key_value:0 key_code:272\nsam                            APP_LAUNCH                <span class="token number">0.009</span>    +0.009    status:start_prelaunching\nsam                            APP_LAUNCH                <span class="token number">0.019</span>    +0.01     status:start_memory_checking\nsam                            APP_LAUNCH                <span class="token number">0.021</span>    +0.002    status:start_launching\nWebAppMgr                      APPLAUNCH_START           <span class="token number">0.022</span>    +0.001    APP_ID:com.webos.app.coolapp\nWebAppMgr                      APPLOADED                 <span class="token number">0.6</span>      +0.578    APP_ID:com.webos.app.coolapp URL:file:///usr/palm/applications/com.webos.app.coolapp/index.html PID:20509\nsam                            GET_FOREGROUND_APPINFO    <span class="token number">1.188</span>    +0.588\nWebAppMgr                      WINDOW_FOCUSIN            <span class="token number">1.377</span>    +0.189    APP_ID:com.webos.app.coolapp\nWebAppMgr                      APP_INTERACTIVE           <span class="token number">2.867</span>    +1.49\nElapsed <span class="token function">time</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> <span class="token number">2.867</span></code></pre>\n      </div>',frontmatter:{title:"Enact Performance Guide",github:"https://github.com/enactjs/enact/blob/develop/docs/performance.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/accessibility/"},frontmatter:{title:"Accessibility Support in Enact"}}},{node:{fields:{slug:"/docs/developer-guide/resources/"},frontmatter:{title:"Additional Developer Resources"}}},{node:{fields:{slug:"/docs/developer-guide/contributing/"},frontmatter:{title:"Contribution Guide"}}},{node:{fields:{slug:"/docs/developer-guide/creating-components/"},frontmatter:{title:"Creating Components the Enact Way"}}},{node:{fields:{slug:"/docs/developer-guide/best-practices/"},frontmatter:{title:"Enact Best Practices"}}},{node:{fields:{slug:"/docs/developer-guide/performance/"},frontmatter:{title:"Enact Performance Guide"}}},{node:{fields:{slug:"/docs/developer-guide/glossary/"},frontmatter:{title:"Glossary"}}},{node:{fields:{slug:"/docs/developer-guide/migration/"},frontmatter:{title:"Migration Guides"}}},{node:{fields:{slug:"/docs/developer-guide/redux/"},frontmatter:{title:"Redux"}}},{node:{fields:{slug:"/docs/developer-guide/spotlight/"},frontmatter:{title:"Spotlight"}}},{node:{fields:{slug:"/docs/developer-guide/testing-components/"},frontmatter:{title:"Testing Your Components"}}},{node:{fields:{slug:"/docs/developer-guide/theming/"},frontmatter:{title:"Theming"}}},{node:{fields:{slug:"/docs/developer-guide/interoperability/"},frontmatter:{title:"Using Enact with Third-party Libraries"}}},{node:{fields:{slug:"/docs/developer-guide/why-use-kind/"},frontmatter:{title:"Why Use kind()?"}}},{node:{fields:{slug:"/docs/developer-guide/i18n/"},frontmatter:{title:"i18n (Internationalization)"}}},{node:{fields:{slug:"/docs/developer-guide/webos/"},frontmatter:{title:"webOS Support Module"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/developer-guide/performance/",title:"Enact Performance Guide",parentRegex:"/\\/docs\\/developer-guide(\\/[^/]*)?\\/$/"}}}});