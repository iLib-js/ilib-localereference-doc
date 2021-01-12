webpackJsonp([0xfa5091566a8b],{1017:function(e,s){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/ui/Resizable/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that handles component resize event."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"ui/Resizable"},{"title":"exports","description":"Resizable"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"ui/Resizable","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that notifies a container that the wrapped component has been resized."}]},{"type":"paragraph","children":[{"type":"text","value":"It may be useful in cases where a component may need to update itself as a result of its children\\nchanging in size, such as a "},{"type":"linkReference","identifier":"scroller","referenceType":"shortcut","children":[{"type":"text","value":"Scroller"}]},{"type":"link","url":"ui/Scroller","title":null,"jsdoc":true,"children":[{"type":"text","value":"ui/Scroller"}]},{"type":"text","value":"."}]},{"type":"paragraph","children":[{"type":"text","value":"Containers must provide an "},{"type":"inlineCode","value":"invalidateBounds"},{"type":"text","value":" method via React\'s context in order for "},{"type":"inlineCode","value":"Resizable"},{"type":"text","value":"\\ninstances to notify it of resize."}]},{"type":"paragraph","children":[{"type":"text","value":"The wrapped component must respond to the configured\\n"},{"type":"linkReference","identifier":"resize","referenceType":"shortcut","children":[{"type":"text","value":"resize"}]},{"type":"link","url":"ui/Resizable.Resizable.defaultConfig.resize","title":null,"jsdoc":true,"children":[{"type":"text","value":"ui/Resizable.Resizable.defaultConfig.resize"}]},{"type":"text","value":" event."}]}]},"tags":[{"title":"class","description":null,"type":null,"name":"Resizable"},{"title":"memberof","description":"ui/Resizable"},{"title":"hoc","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"class","name":"Resizable","memberof":"ui/Resizable","access":"public","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Default config for "},{"type":"inlineCode","value":"Resizable"},{"type":"text","value":"."}]}]},"tags":[{"title":"memberof","description":"ui/Resizable.Resizable"},{"title":"hocconfig","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"ui/Resizable.Resizable","name":"defaultConfig","kind":"constant","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A handler to process the "},{"type":"inlineCode","value":"resize"},{"type":"text","value":" event."}]},{"type":"paragraph","children":[{"type":"text","value":"It should return a truthy value if the event should trigger a resize."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Function"}},{"title":"default","description":"null"},{"title":"see","description":"{@link core/handle}"},{"title":"memberof","description":"ui/Resizable.Resizable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[{"type":"root","children":[{"type":"paragraph","children":[{"type":"link","url":"core/handle","title":null,"jsdoc":true,"children":[{"type":"text","value":"core/handle"}]}]}]}],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Function"},"memberof":"ui/Resizable.Resizable.defaultConfig","name":"filter","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ResizableResizabledefaultConfigfilter"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The name of the event on the wrapped component to listen to for size changes."}]},{"type":"paragraph","children":[{"type":"text","value":"This event name will be passed to the wrapped component and will also be forwarded (if\\nneeded) to the parent component."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"required","description":null},{"title":"memberof","description":"ui/Resizable.Resizable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"memberof":"ui/Resizable.Resizable.defaultConfig","name":"resize","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/ResizableResizabledefaultConfigresize"}]},"namespace":"ui/ResizableResizabledefaultConfig"}]},"namespace":"ui/ResizableResizable"}]},"namespace":"ui/Resizable"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}},{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}}]}},pathContext:{slug:"/docs/modules/ui/Resizable/",title:"ui/Resizable"}}}});