webpackJsonp([0x9b8b5eb952e0],{999:function(e,o){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/ui/ForwardRef/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component interface for "},{"type":"inlineCode","value":"ref"},{"type":"text","value":" forwarding."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"ui/ForwardRef"},{"title":"exports","description":"ForwardRef"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"ui/ForwardRef","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that adapts "},{"type":"link","title":null,"url":"https://reactjs.org/docs/forwarding-refs.html","children":[{"type":"inlineCode","value":"React.forwardRef"}]},{"type":"text","value":"\\nto be chainable with other HOCs."}]},{"type":"paragraph","children":[{"type":"text","value":"The following examples are equivalent:"}]},{"type":"code","lang":null,"value":"import ForwardRef from \'@enact/ui/ForwardRef\';\\nimport Component from \'./Component\';\\n\\nReact.forwardRef((props, ref) => (\\n\\t<Component {...props} setMyRef={ref} />\\n));\\nForwardRef({prop: \'setMyRef\'}, Component);"}]},"tags":[{"title":"class","description":null,"type":null,"name":"ForwardRef"},{"title":"memberof","description":"ui/ForwardRef"},{"title":"hoc","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"class","name":"ForwardRef","memberof":"ui/ForwardRef","access":"public","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Default config for "},{"type":"link","url":"ui/ForwardRef.ForwardRef","title":null,"jsdoc":true,"children":[{"type":"text","value":"ui/ForwardRef.ForwardRef"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"memberof","description":"ui/ForwardRef.ForwardRef"},{"title":"hocconfig","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"ui/ForwardRef.ForwardRef","name":"defaultConfig","kind":"constant","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The prop name to pass the ref callback"}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"default","description":"\'forwardRef\'"},{"title":"memberof","description":"ui/ForwardRef.ForwardRef.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"memberof":"ui/ForwardRef.ForwardRef.defaultConfig","name":"prop","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ForwardRefForwardRefdefaultConfigprop"}]},"namespace":"ui/ForwardRefForwardRefdefaultConfig"}]},"namespace":"ui/ForwardRefForwardRef"}]},"namespace":"ui/ForwardRef"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}}]}},pathContext:{slug:"/docs/modules/ui/ForwardRef/",title:"ui/ForwardRef"}}}});