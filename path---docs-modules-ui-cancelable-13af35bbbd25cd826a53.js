webpackJsonp([0xaac1fd4f50cc],{995:function(e,n){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/ui/Cancelable/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Provides components and methods to add support for handling cancel actions."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"ui/Cancelable"},{"title":"exports","description":"addCancelHandler"},{"title":"exports","description":"Cancelable"},{"title":"exports","description":"removeCancelHandle"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"ui/Cancelable","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that adds support to a component to handle cancel actions."}]},{"type":"paragraph","children":[{"type":"text","value":"The cancel event may be handled either by a design-time config function or a run-time prop\\nfunction. If the component handles the event and wants to prevent upstream components from also\\nhandling the event, the callback should invoke "},{"type":"inlineCode","value":"stopPropagation()"},{"type":"text","value":" on the event object."}]},{"type":"paragraph","children":[{"type":"text","value":"Note: This HoC passes a number of props to the wrapped component that should be passed to the\\nmain DOM node."}]},{"type":"paragraph","children":[{"type":"text","value":"Usage of config function:"}]},{"type":"code","lang":null,"value":"import Cancelable from \'@enact/ui/Cancelable\';\\n\\nconst MyComponent = ({myProp, ...rest}) => (\\n   <div {...rest}>{myProp}</div>\\n );\\n...\\nconst CancelableComponent = Cancelable(\\n  {cancel: function (ev, props) {\\n    // Can inspect either the `onCancel` event, `ev`, and/or the `props` to determine how\\n    // to handle the event (e.g. invoking an event handler from `props`).\\n\\n    // Stop upstream instances of Cancelable from handling the event\\n    ev.stopPropagaion();\\n  }},\\n  MyComponent\\n);"},{"type":"paragraph","children":[{"type":"text","value":"Usage of prop function:"}]},{"type":"code","lang":null,"value":"import Cancelable from \'@enact/ui/Cancelable\';\\n\\nconst CancelableComponent = Cancelable(\\n  // When a cancel action is received and a handler function exists for the prop\\n  // `onCancel`, it will be invoked and passed the `onCancel` event object.\\n  {cancel: \'onCancel\'},\\n  MyComponent\\n);"}]},"tags":[{"title":"class","description":null,"type":null,"name":"Cancelable"},{"title":"memberof","description":"ui/Cancelable"},{"title":"hoc","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"class","name":"Cancelable","memberof":"ui/Cancelable","access":"public","members":{"global":[],"inner":[],"instance":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Called when a cancel action is received."}]},{"type":"paragraph","children":[{"type":"text","value":"This callback is invoked for every cancel action before the config or prop handler is\\ninvoked."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Function"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Function"},"access":"public","name":"onCancel","memberof":"ui/Cancelable.Cancelable","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/CancelableCancelable#onCancel"}],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Default config for "},{"type":"link","url":"ui/Cancelable.Cancelable","title":null,"jsdoc":true,"children":[{"type":"text","value":"ui/Cancelable.Cancelable"}]}]}]},"tags":[{"title":"memberof","description":"ui/Cancelable.Cancelable"},{"title":"hocconfig","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"ui/Cancelable.Cancelable","name":"defaultConfig","kind":"constant","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Called when a cancel action is invoked by the user."}]},{"type":"paragraph","children":[{"type":"text","value":"If it is a string, the cancel handler will attempt to invoke a function passed as a prop of\\nthat name. If it is a function, that function will be called with the current props as the\\nonly argument."}]},{"type":"paragraph","children":[{"type":"text","value":"If the function handles the cancel action, it should call "},{"type":"inlineCode","value":"stopPropagation()"},{"type":"text","value":" on the provided\\nevent object prevent container or "},{"type":"inlineCode","value":"modal"},{"type":"text","value":" Cancelable instances from also handling the action."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Function"}]}},{"title":"required","description":null},{"title":"memberof","description":"ui/Cancelable.Cancelable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Function"}]},"memberof":"ui/Cancelable.Cancelable.defaultConfig","name":"onCancel","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/CancelableCancelabledefaultConfigonCancel"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Subscribes to cancel events globally for this instance."}]},{"type":"paragraph","children":[{"type":"text","value":"When "},{"type":"inlineCode","value":"true"},{"type":"text","value":", the "},{"type":"inlineCode","value":"Cancelable"},{"type":"text","value":" instance will handle cancel events globally that successfully\\nbubble up to "},{"type":"inlineCode","value":"window"},{"type":"text","value":" regardless of which component is focused."}]},{"type":"paragraph","children":[{"type":"inlineCode","value":"modal"},{"type":"text","value":" cancel handlers are processed in reverse of the order they are created such that the\\ninnermost instance (in terms of the component hierarchy) have the first opportunity to handle\\nthe event before its container components."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"default","description":"false"},{"title":"memberof","description":"ui/Cancelable.Cancelable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"memberof":"ui/Cancelable.Cancelable.defaultConfig","name":"modal","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/CancelableCancelabledefaultConfigmodal"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The component that will contain the wrapped component."}]},{"type":"paragraph","children":[{"type":"text","value":"When set, the wrapped component will be contained within an instance of "},{"type":"inlineCode","value":"component"},{"type":"text","value":". This may\\nbe necessary if the props passed to the wrapped component are not placed on the root element."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Component"}},{"title":"default","description":"null"},{"title":"memberof","description":"ui/Cancelable.Cancelable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Component"},"memberof":"ui/Cancelable.Cancelable.defaultConfig","name":"component","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/CancelableCancelabledefaultConfigcomponent"}]},"namespace":"ui/CancelableCancelabledefaultConfig"}]},"namespace":"ui/CancelableCancelable"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Adds an event handler to filter cancel events."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"memberof","description":"ui/Cancelable"},{"title":"param","description":"Function that will receive the event and should return `true` if\\n\\t\\t\\t\\t\\t\\t\\tthe event is a cancel event.","type":{"type":"NameExpression","name":"Function"},"name":"handler"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"handler","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Function that will receive the event and should return "},{"type":"inlineCode","value":"true"},{"type":"text","value":" if\\n\\t\\t\\t\\t\\t\\t\\tthe event is a cancel event."}]}]},"type":{"type":"NameExpression","name":"Function"}}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"ui/Cancelable","access":"public","name":"addCancelHandler","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/CancelableaddCancelHandler"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Removes an event handler to filter cancel events"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"memberof","description":"ui/Cancelable"},{"title":"param","description":"A previously added filter function","type":{"type":"NameExpression","name":"Function"},"name":"handler"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"handler","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A previously added filter function"}]}]},"type":{"type":"NameExpression","name":"Function"}}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"ui/Cancelable","access":"public","name":"removeCancelHandler","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/CancelableremoveCancelHandler"}]},"namespace":"ui/Cancelable"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/modules/ui/Cancelable/",title:"ui/Cancelable"}}}});