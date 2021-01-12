webpackJsonp([0xbf067cff23bc],{1011:function(e,s){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/ui/Measurable/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that adds the ability to measure nodes conveniently."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"ui/Measurable"},{"title":"exports","description":"Measurable"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"ui/Measurable","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"A higher-order component that adds the ability to measure a referenced node and get that value\\nback as a prop."}]},{"type":"paragraph","children":[{"type":"text","value":"Applying "},{"type":"inlineCode","value":"Measurable"},{"type":"text","value":" to a component will pass two additional props: function to fetch the "},{"type":"inlineCode","value":"ref"},{"type":"text","value":"\\nand the measurement object (currently this executes "},{"type":"inlineCode","value":"getBoundingClientRect"},{"type":"text","value":" returning its full\\ncomplement of properties). Both prop names are configurable through the HOC config object."}]},{"type":"paragraph","children":[{"type":"text","value":"Changes to the referenced node will result in new measurements being returned as props. That\\nbeing said, it probably is not wise to use this during animation as it may cause unwanted\\nperformance issues."}]}]},"tags":[{"title":"see","description":"https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node"},{"title":"class","description":null,"type":null,"name":"Measurable"},{"title":"memberof","description":"ui/Measurable"},{"title":"hoc","description":null},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[{"type":"root","children":[{"type":"paragraph","children":[{"type":"link","title":null,"url":"https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node","children":[{"type":"text","value":"https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node"}]}]}]}],"throws":[],"yields":[],"kind":"class","name":"Measurable","memberof":"ui/Measurable","access":"public","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Default config for "},{"type":"link","url":"ui/Measurable.Measurable","title":null,"jsdoc":true,"children":[{"type":"text","value":"ui/Measurable.Measurable"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"memberof","description":"ui/Measurable.Measurable"},{"title":"hocconfig","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"memberof":"ui/Measurable.Measurable","name":"defaultConfig","kind":"constant","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configures the prop name to pass the measurement object."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"default","description":"\'measurement\'"},{"title":"memberof","description":"ui/Measurable.Measurable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"memberof":"ui/Measurable.Measurable.defaultConfig","name":"measurementProp","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/MeasurableMeasurabledefaultConfigmeasurementProp"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configures the prop name to pass a function to capture a reference to the element to measure."}]}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"String"}},{"title":"default","description":"\'forwardRef\'"},{"title":"memberof","description":"ui/Measurable.Measurable.defaultConfig"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"String"},"memberof":"ui/Measurable.Measurable.defaultConfig","name":"refProp","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"ui/MeasurableMeasurabledefaultConfigrefProp"}]},"namespace":"ui/MeasurableMeasurabledefaultConfig"}]},"namespace":"ui/MeasurableMeasurable"}]},"namespace":"ui/Measurable"}]'}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/modules/ui/Measurable/",title:"ui/Measurable"}}}});