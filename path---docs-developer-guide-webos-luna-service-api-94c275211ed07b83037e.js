webpackJsonp([0xb874cb47975a],{957:function(s,n){s.exports={data:{markdownRemark:{html:'<p>The <a href="http://webostv.developer.lge.com/api/webos-service-api/">Luna service API</a> is available on webOS platforms and allows developers to create applications that can\nmake use of platform features, such as the <code class="language-text">Settings Service</code> or the <code class="language-text">Media Database</code>.</p>\n<h3 id="ls2request"><a href="#ls2request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LS2Request</h3>\n<p>The Enact framework provides <code class="language-text">@enact/webos/LS2Request</code> for developers to interact with the API.</p>\n<h4 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h4>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> LS2Request <span class="token keyword">from</span> <span class="token string">\'@enact/webos/LS2Request\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token function-variable function">startNetwork</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token comment">// to cancel a request you must store a reference</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>findNetworkReq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LS2Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\tservice<span class="token operator">:</span> <span class="token string">\'luna://com.webos.service.wifi\'</span><span class="token punctuation">,</span>\n\t\tmethod<span class="token operator">:</span> <span class="token string">\'findnetworks\'</span><span class="token punctuation">,</span>\n\t\tonSuccess<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>findNetworkSuccess\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function-variable function">findNetworkSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>foundNetworks<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\tfoundNetworks<span class="token operator">:</span> res<span class="token punctuation">.</span>foundNetworks\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"Luna Service API",github:"https://github.com/enactjs/enact/blob/develop/packages/webos/docs/luna-service-api.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/developer-guide/webos/luna-service-api/"},frontmatter:{title:"Luna Service API"}}},{node:{fields:{slug:"/docs/developer-guide/webos/webos-features/"},frontmatter:{title:"Using webOS Features"}}},{node:{fields:{slug:"/docs/developer-guide/webos/"},frontmatter:{title:"webOS Support Module"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/developer-guide/webos/luna-service-api/",title:"Luna Service API",parentRegex:"/\\/docs\\/developer-guide\\/webos(\\/[^/]*)?\\/$/"}}}});