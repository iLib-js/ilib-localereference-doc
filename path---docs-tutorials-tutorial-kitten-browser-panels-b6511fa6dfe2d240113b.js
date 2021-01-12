webpackJsonp([0x7736f042e919],{1051:function(e,t){e.exports={data:{markdownRemark:{html:'<!--\n* Concept: Break Into Views\n* Component: Panels\n  * Activity, AlwaysViewing\n  * Header & Panel\n* Concept: Slots\n-->\n<p>In the <a href="../lists/">previous step</a> we built our list view and added some formatting to the Kitten component. Now, learn about the Panels components and move our list view into its own panel.</p>\n<h2 id="creating-a-panel"><a href="#creating-a-panel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a Panel</h2>\n<p>Let’s start by creating a new view component, <code class="language-text">Detail</code>, which will be the future home of a detail view when a kitten is selected from the list view. We’ll <code class="language-text">import</code> the <code class="language-text">Panel</code> component as well as its <code class="language-text">Header</code>. Unlike the other components we’ve encountered, the Panels-related components are all exposed as named exports on the <code class="language-text">@enact/moonstone/Panels</code> module. Since they are generally used together, bundling them into a single module makes importing them a bit simpler.</p>\n<p><strong>./src/views/Detail.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import {Header, Panel} from &#39;@enact/moonstone/Panels&#39;;\nimport kind from &#39;@enact/core/kind&#39;;\nimport PropTypes from &#39;prop-types&#39;;\nimport React from &#39;react&#39;;\n\nconst genders = {\n\tm: &#39;Male&#39;,\n\tf: &#39;Female&#39;\n};\n\nconst DetailBase = kind({\n\tname: &#39;Detail&#39;,\n\n\tpropTypes: {\n\t\tcolor: PropTypes.string,\n\t\tgender: PropTypes.string,\n\t\tname: PropTypes.string,\n\t\tweight: PropTypes.number\n\t},\n\n\tdefaultProps: {\n\t\tgender: &#39;m&#39;,\n\t\tcolor: &#39;Tabby&#39;,\n\t\tweight: 9\n\t},\n\n\trender: ({color, gender, name, weight, ...rest}) =&gt; (\n\t\t&lt;Panel {...rest}&gt;\n\t\t\t&lt;Header title={name} /&gt;\n\t\t\t&lt;div&gt;Gender: {genders[gender]}&lt;/div&gt;\n\t\t\t&lt;div&gt;Color: {color}&lt;/div&gt;\n\t\t\t&lt;div&gt;Weight: {weight}oz&lt;/div&gt;\n\t\t&lt;/Panel&gt;\n\t)\n});\n\nexport default DetailBase;\nexport {DetailBase as Detail, DetailBase};</code></pre>\n      </div>\n<p>Hopefully, the code for a stateless component is beginning to look pretty familiar. We’ve declared a few props that our component will support. Since our data is only names, we’ve also added some default values to fill out the screen. We don’t need any <a href="../reusable-components#computed">computed properties</a> right now nor any <a href="../../tutorial-hello-enact/kind#style-handling">custom CSS</a> so both of those keys have been omitted. The render method simply returns a Panel with a Header and some content.</p>\n<p>There are a couple of things to discuss, however. First, we want to add a <a href="#more-advanced-proptypes"><code class="language-text">propType</code> validator</a> function on <code class="language-text">gender</code>. Second, there is a bit of magic going on here with Panel and Header: <a href="#using-slottable-to-distribute-children">the <code class="language-text">Slottable</code> HOC</a>.</p>\n<blockquote>\n<p>When you define props in <code class="language-text">propTypes</code> and <code class="language-text">defaultProps</code>, the props names should be ordered alphabetically. See <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md">sort-prop-types</a> for more information.</p>\n</blockquote>\n<h3 id="more-advanced-proptypes"><a href="#more-advanced-proptypes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>More Advanced PropTypes</h3>\n<p>We have a small problem with our <code class="language-text">Detail</code> view. We don’t validate that the gender we receive matches one of the genders we expect. One way we can address that is to use <code class="language-text">propTypes</code> to validate that we only receive the data we expect (at least, while we’re running the app in development mode). We can quickly change the validator to check the data for us:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gender: PropTypes.oneOf([&#39;m&#39;, &#39;f&#39;]),</code></pre>\n      </div>\n<p>Using <code class="language-text">PropTypes.oneOf()</code> allows us to specify a list of acceptable values for <code class="language-text">gender</code>. In addition to the primitives we’ve used previously, React provides <a href="https://facebook.github.io/react/docs/reusable-components.html#prop-validation">other validator functions</a> you can use to limit possible values like above or validate more complex properties.</p>\n<blockquote>\n<p>Validators, as mentioned, only run when in development mode. Further, they only warn if there is a problem. It’s still possible to pass bad data in. When data may come from sources you don’t control, you’ll want perform more validation, perhaps in a <code class="language-text">computed</code> section.</p>\n</blockquote>\n<h3 id="using-code-classlanguage-textslottablecode-to-distribute-children"><a href="#using-code-classlanguage-textslottablecode-to-distribute-children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using <code class="language-text">Slottable</code> to Distribute Children</h3>\n<p>The <code class="language-text">Slottable</code> HOC was inspired by the <a href="https://developers.google.com/web/fundamentals/primers/shadowdom/?hl=en#composition_slot">Web Components Slot API</a> as a means for consumers of a component to use a more semantic and “markup friendly” interface to its internal API. In general, you won’t need to know if a component is using <code class="language-text">Slottable</code> but it’s worth spending a little time understanding how it works.</p>\n<p><code class="language-text">Slottable</code> works by mapping children to props. This means that the component author is able to write idiomatic React components relying only on props whereas the component consumer can\nwrite more “markup friendly” code. The primary use case for <code class="language-text">Slottable</code> is when a component expects a property to receive one or more elements rather than a primitive value.</p>\n<p>Consider the case of the <code class="language-text">header</code> property of Panel. The React way to specify a component for that property would be:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&lt;Panel header={&lt;Header title=&quot;Title&quot; /&gt;}&gt;\n\t&lt;div&gt;Panel Body&lt;/div&gt;\n&lt;/Panel&gt;</code></pre>\n      </div>\n<p>With <code class="language-text">Slottable</code>, you can write either the above code or the following:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&lt;Panel&gt;\n\t&lt;Header title=&quot;Title&quot; /&gt;\n\t&lt;div&gt;Panel Body&lt;/div&gt;\n&lt;/Panel&gt;</code></pre>\n      </div>\n<p>This works because Panel has configured a <code class="language-text">header</code> slot and the Header component has been pre-configured to use the <code class="language-text">header</code> slot using a <code class="language-text">defaultSlot</code> property set on the Header component. Another way to specify the target slot for a component is to add the <code class="language-text">slot</code> property to your component instance. In this example, the first <code class="language-text">&lt;div&gt;</code> tag will be mapped to the <code class="language-text">header</code> property.</p>\n<blockquote>\n<p>Note that the <code class="language-text">slot</code> property will be removed from the <code class="language-text">&lt;div&gt;</code> before being passed to the receiving component.</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&lt;Panel&gt;\n\t&lt;div slot=&quot;header&quot;&gt;Title&lt;/div&gt;\n\t&lt;div&gt;Panel Body&lt;/div&gt;\n&lt;/Panel&gt;</code></pre>\n      </div>\n<h2 id="refactoring-the-list-view"><a href="#refactoring-the-list-view" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refactoring the List View</h2>\n<p>With the basics of <code class="language-text">Panels</code> under our belts, refactoring our list into a <code class="language-text">Panel</code> should be straightforward. We’ve only declared a single property, <code class="language-text">children</code>, which will receive the array of kittens to display. The render method contains the same <code class="language-text">Panel</code> setup code as above with the addition of the Repeater code from <code class="language-text">./src/App/App.js</code>.</p>\n<p><strong>./src/views/List.js</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import {Header, Panel} from &#39;@enact/moonstone/Panels&#39;;\nimport kind from &#39;@enact/core/kind&#39;;\nimport PropTypes from &#39;prop-types&#39;;\nimport React from &#39;react&#39;;\nimport Repeater from &#39;@enact/ui/Repeater&#39;;\n\nimport Kitten from &#39;../components/Kitten&#39;;\n\nconst ListBase = kind({\n\tname: &#39;List&#39;,\n\n\tpropTypes: {\n\t\tchildren: PropTypes.array\n\t},\n\n\trender: ({children, ...rest}) =&gt; (\n\t\t&lt;Panel {...rest}&gt;\n\t\t\t&lt;Header title=&quot;Kittens!&quot; /&gt;\n\t\t\t&lt;Repeater childComponent={Kitten} indexProp=&quot;index&quot;&gt;\n\t\t\t\t{children}\n\t\t\t&lt;/Repeater&gt;\n\t\t&lt;/Panel&gt;\n\t)\n});\n\nexport default ListBase;\nexport {ListBase as List, ListBase};</code></pre>\n      </div>\n<h2 id="panels"><a href="#panels" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Panels</h2>\n<p>Moonstone provides 3 different patterns for a <code class="language-text">Panels</code>-based app — basic, activity and always viewing. The basic pattern is the default export from <code class="language-text">@enact/moonstone/Panels</code> and it provides a simple single Panel view filling the entire screen. The activity pattern, available as the named export <code class="language-text">ActivityPanels</code>, is similar except that it allocates space on the left side for a single breadcrumb, allowing the user to navigate to the previous Panel. The always viewing pattern, available as the named export <code class="language-text">AlwaysViewingPanels</code>, restricts the Panel to the right half of the screen with the left half used for multiple breadcrumbs.</p>\n<p>Our Kitten Browser will use <code class="language-text">ActivityPanels</code>, with the <code class="language-text">List</code> as the first view and <code class="language-text">Detail</code> as the second. We’ve kept the data here and will pass that down to <code class="language-text">List</code> as <code class="language-text">children</code>. It’s also notable that we’re using the spread operator on props directly. We don’t need to deconstruct any props for our <code class="language-text">App</code> component so we’ll pass everything on to <code class="language-text">ActivityPanels</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import {ActivityPanels} from &#39;@enact/moonstone/Panels&#39;;\nimport kind from &#39;@enact/core/kind&#39;;\nimport MoonstoneDecorator from &#39;@enact/moonstone/MoonstoneDecorator&#39;;\nimport React from &#39;react&#39;;\n\nimport Detail from &#39;../views/Detail&#39;;\nimport List from &#39;../views/List&#39;;\n\nconst kittens = [\n\t&#39;Garfield&#39;,\n\t&#39;Nermal&#39;,\n\t&#39;Simba&#39;,\n\t&#39;Nala&#39;,\n\t&#39;Tiger&#39;,\n\t&#39;Kitty&#39;\n];\n\nconst AppBase = kind({\n\tname: &#39;App&#39;,\n\n\trender: (props) =&gt; (\n\t\t&lt;ActivityPanels {...props}&gt;\n\t\t\t&lt;List&gt;{kittens}&lt;/List&gt;\n\t\t\t&lt;Detail /&gt;\n\t\t&lt;/ActivityPanels&gt;\n\t)\n});\n\nconst App = MoonstoneDecorator(AppBase);\n\nexport default App;\nexport {App, AppBase};</code></pre>\n      </div>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>In this fourth step of Kitten Browser, we’ve introduced the <code class="language-text">Panels</code> components and how <code class="language-text">Slottable</code> makes it easy to distribute children into a component in a more semantic and markup friendly format.</p>\n<p><strong>Next: <a href="../data-and-state/">State and Data Management</a></strong></p>',frontmatter:{title:"Organizing Your App with Panels",github:"https://github.com/enactjs/docs/blob/develop/src/pages/docs/tutorials/tutorial-kitten-browser/panels/index.md"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/app-setup/"},frontmatter:{title:"App Setup"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/reusable-components/"},frontmatter:{title:"Reusable Components"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/lists/"},frontmatter:{title:"Repeaters and Lists"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/"},frontmatter:{title:"Kitten Browser"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/panels/"},frontmatter:{title:"Organizing Your App with Panels"}}},{node:{fields:{slug:"/docs/tutorials/tutorial-kitten-browser/data-and-state/"},frontmatter:{title:"State and Data Management"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/tutorials/tutorial-kitten-browser/panels/",title:"Organizing Your App with Panels",parentRegex:"/\\/docs\\/tutorials\\/tutorial-kitten-browser(\\/[^/]*)?\\/$/"}}}});