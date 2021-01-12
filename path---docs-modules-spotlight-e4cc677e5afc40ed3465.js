webpackJsonp([0x5f5fc0116980],{990:function(e,t){e.exports={data:{jsonDoc:{fields:{slug:"/docs/modules/spotlight/"},internal:{content:'[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Exports the "},{"type":"link","url":"spotlight.Spotlight","title":null,"jsdoc":true,"children":[{"type":"text","value":"spotlight.Spotlight"}]},{"type":"text","value":" object used for controlling spotlight behavior and the\\n"},{"type":"link","url":"spotlight.Spotlight.getDirection","title":null,"jsdoc":true,"children":[{"type":"text","value":"spotlight.Spotlight.getDirection"}]},{"type":"text","value":" function for mapping a keycode to a spotlight direction."}]},{"type":"paragraph","children":[{"type":"text","value":"The default export is "},{"type":"link","url":"spotlight.Spotlight","title":null,"jsdoc":true,"children":[{"type":"text","value":"spotlight.Spotlight"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"module","description":null,"type":null,"name":"spotlight"},{"title":"exports","description":"default Spotlight"},{"title":"exports","description":"getDirection"}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"module","name":"spotlight","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Translates keyCodes into 5-way direction descriptions (e.g. "},{"type":"inlineCode","value":"\'down\'"},{"type":"text","value":")"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"memberof","description":"spotlight"},{"title":"param","description":"Key code to analyze","type":{"type":"NameExpression","name":"Number"},"name":"keyCode"},{"title":"returns","description":"One of `\'up\'`, `\'down\'`, `\'left\'`, `\'right\'` or `false` if not a direction key","type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"BooleanLiteralType","value":false}]}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"keyCode","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Key code to analyze"}]}]},"type":{"type":"NameExpression","name":"Number"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"One of "},{"type":"inlineCode","value":"\'up\'"},{"type":"text","value":", "},{"type":"inlineCode","value":"\'down\'"},{"type":"text","value":", "},{"type":"inlineCode","value":"\'left\'"},{"type":"text","value":", "},{"type":"inlineCode","value":"\'right\'"},{"type":"text","value":" or "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if not a direction key"}]}]},"title":"returns","type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"BooleanLiteralType","value":false}]}}],"sees":[],"throws":[],"yields":[],"kind":"function","memberof":"spotlight","access":"public","name":"getDirection","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightgetDirection"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Provides 5-way navigation and focus support"}]},{"type":"code","lang":null,"value":"import Spotlight from \'@enact/Spotlight\';\\n\\n// get the currently focused component\\nconst current = Spotlight.getCurrent();\\n\\n// focus an element by CSS selector\\nSpotlight.focus(\'.my-custom-class\');\\n\\n// is `current` focusable?\\nconst isFocused = Spotlight.isSpottable(current);"}]},"tags":[{"title":"type","description":null,"type":{"type":"NameExpression","name":"Object"}},{"title":"memberof","description":"spotlight"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"type":{"type":"NameExpression","name":"Object"},"memberof":"spotlight","access":"public","name":"Spotlight","kind":"constant","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Initializes Spotlight. This is generally handled by\\n"},{"type":"link","url":"spotlight/SpotlightRootDecorator.SpotlightRootDecorator","title":null,"jsdoc":true,"children":[{"type":"text","value":"spotlight/SpotlightRootDecorator.SpotlightRootDecorator"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"param","description":"Default configuration for new spotlight containers","type":{"type":"NameExpression","name":"Object"},"name":"containerDefaults"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerDefaults","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Default configuration for new spotlight containers"}]}]},"type":{"type":"NameExpression","name":"Object"}}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"initialize","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.initialize"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Terminates Spotlight. This is generally handled by "},{"type":"link","url":"spotlight.SpotlightRootDecorator","title":null,"jsdoc":true,"children":[{"type":"text","value":"spotlight.SpotlightRootDecorator"}]},{"type":"text","value":"."}]}]},"tags":[{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"access":"public","name":"terminate","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.terminate"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Sets the config for spotlight or the specified containerID"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"param","description":"Configuration object or container ID","type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]},"name":"containerIdOrConfig"},{"title":"param","description":"Configuration object if container ID supplied\\n                                            in `containerIdOrConfig`","type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"Object"}},"name":"config"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerIdOrConfig","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configuration object or container ID"}]}]},"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]}},{"title":"param","name":"config","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configuration object if container ID supplied\\n                                            in "},{"type":"inlineCode","value":"containerIdOrConfig"}]}]},"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"Object"}}}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"set","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.set"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Adds the config for a new container. The container ID may be passed in the configuration\\nobject. If no container ID is supplied, a new container ID will be generated."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"param","description":"Configuration object or container ID","type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]},"name":"containerIdOrConfig"},{"title":"param","description":"Configuration object if container ID supplied\\n                                            in `containerIdOrConfig`","type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"Object"}},"name":"config"},{"title":"returns","description":"The container ID of the container","type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerIdOrConfig","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configuration object or container ID"}]}]},"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Object"}]}},{"title":"param","name":"config","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Configuration object if container ID supplied\\n                                            in "},{"type":"inlineCode","value":"containerIdOrConfig"}]}]},"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"Object"}}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The container ID of the container"}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"add","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.add"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Removes a container from Spotlight"}]}]},"tags":[{"title":"param","description":"Container ID to remove","type":{"type":"NameExpression","name":"String"},"name":"containerId"},{"title":"returns","description":"`true` if container removed, `false` if container does not exist","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerId","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Container ID to remove"}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if container removed, "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if container does not exist"}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"remove","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.remove"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Disables the selector rules of the specified container"}]}]},"tags":[{"title":"param","description":"Container ID selector rules to disable","type":{"type":"NameExpression","name":"String"},"name":"containerId"},{"title":"returns","description":"`true` if container\'s selector rules are disabled, `false` if container does not exist","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerId","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Container ID selector rules to disable"}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if container\'s selector rules are disabled, "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if container does not exist"}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"disableSelector","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.disableSelector"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Enables the selector rules of the specified container"}]}]},"tags":[{"title":"param","description":"Container ID selector rules to enable","type":{"type":"NameExpression","name":"String"},"name":"containerId"},{"title":"returns","description":"`true` if container\'s selector rules are enabled, `false` if container does not exist","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerId","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Container ID selector rules to enable"}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if container\'s selector rules are enabled, "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if container does not exist"}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"enableSelector","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.enableSelector"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Pauses Spotlight"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"pause","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.pause"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Resumes Spotlight"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"resume","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.resume"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Focuses the specified component ID, container ID, element selector, or the default\\ncontainer."}]},{"type":"paragraph","children":[{"type":"text","value":"If Spotlight is in pointer mode, focus is not changed but "},{"type":"inlineCode","value":"elem"},{"type":"text","value":" will be set as the last\\nfocused element of its spotlight containers."}]}]},"tags":[{"title":"param","description":"The spotlight ID or selector for either a spottable\\n component or a spotlight container, or spottable node. If not supplied, the default\\n container will be focused.","type":{"type":"OptionalType","expression":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Node"}]}},"name":"elem"},{"title":"returns","description":"`true` if focus successful, `false` if not.","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"elem","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The spotlight ID or selector for either a spottable\\n component or a spotlight container, or spottable node. If not supplied, the default\\n container will be focused."}]}]},"type":{"type":"OptionalType","expression":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"NameExpression","name":"Node"}]}}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if focus successful, "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if not."}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"focus","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.focus"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Moves focus to the next spottable control in the direction specified. Optionally, a source\\nelement selector may be supplied as the starting point."}]}]},"tags":[{"title":"param","description":"Direction to move, one of `\'left\'`, `\'right\'`, `\'up\'` or `\'down\'`","type":{"type":"NameExpression","name":"String"},"name":"direction"},{"title":"param","description":"If supplied, the element to move from. If not supplied,\\nthe currently focused item will be used.","type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"UndefinedLiteral"}]},"name":"selector"},{"title":"returns","description":"`true` if focus successful, `false` if not.","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"direction","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Direction to move, one of "},{"type":"inlineCode","value":"\'left\'"},{"type":"text","value":", "},{"type":"inlineCode","value":"\'right\'"},{"type":"text","value":", "},{"type":"inlineCode","value":"\'up\'"},{"type":"text","value":" or "},{"type":"inlineCode","value":"\'down\'"}]}]},"type":{"type":"NameExpression","name":"String"}},{"title":"param","name":"selector","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"If supplied, the element to move from. If not supplied,\\nthe currently focused item will be used."}]}]},"type":{"type":"UnionType","elements":[{"type":"NameExpression","name":"String"},{"type":"UndefinedLiteral"}]}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if focus successful, "},{"type":"inlineCode","value":"false"},{"type":"text","value":" if not."}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"move","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.move"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Sets or clears the default container that will receive focus."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"param","description":"The container ID or a falsy value to clear default\\n                              container","type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"String"}},"name":"containerId"},{"title":"returns","description":null,"type":{"type":"UndefinedLiteral"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerId","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The container ID or a falsy value to clear default\\n                              container"}]}]},"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"String"}}}],"properties":[],"returns":[{"description":{"type":"root","children":[]},"title":"returns","type":{"type":"UndefinedLiteral"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"setDefaultContainer","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.setDefaultContainer"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Gets the currently active container."}]}]},"tags":[{"title":"returns","description":"The id of the currently active container","type":{"type":"NameExpression","name":"String"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The id of the currently active container"}]}]},"title":"returns","type":{"type":"NameExpression","name":"String"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"getActiveContainer","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.getActiveContainer"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Sets the currently active container."}]},{"type":"paragraph","children":[{"type":"text","value":"Note: If the current container is restricted to \'self-only\' and "},{"type":"inlineCode","value":"containerId"},{"type":"text","value":" is not\\ncontained within the current container then the active container will not be updated."}]}]},"tags":[{"title":"param","description":"The id of the currently active container. If this is not\\nprovided, the root container is set as the currently active container.","type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"String"}},"name":"containerId"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerId","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The id of the currently active container. If this is not\\nprovided, the root container is set as the currently active container."}]}]},"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"String"}}}],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"access":"public","name":"setActiveContainer","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.setActiveContainer"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Gets the current pointer mode"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":"`true` if spotlight is in pointer mode","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if spotlight is in pointer mode"}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"getPointerMode","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.getPointerMode"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Sets the current pointer mode"}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"param","description":"The value of the pointer mode. This determines how\\nspotlight manages focus change behaviors.","type":{"type":"NameExpression","name":"Boolean"},"name":"pointerMode"},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"pointerMode","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The value of the pointer mode. This determines how\\nspotlight manages focus change behaviors."}]}]},"type":{"type":"NameExpression","name":"Boolean"}}],"properties":[],"returns":[],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"setPointerMode","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.setPointerMode"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Gets the muted mode value of a spottable element."}]}]},"tags":[{"title":"param","description":"The dom element used to determine the muted status.","type":{"type":"NameExpression","name":"Object"},"name":"elem"},{"title":"returns","description":"`true` if the passed-in control is in muted mode.","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"elem","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The dom element used to determine the muted status."}]}]},"type":{"type":"NameExpression","name":"Object"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if the passed-in control is in muted mode."}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"isMuted","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.isMuted"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Determines whether Spotlight is currently paused."}]}]},"tags":[{"title":"function","description":null,"name":null},{"title":"returns","description":"`true` if Spotlight is currently paused.","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if Spotlight is currently paused."}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"kind":"function","access":"public","name":"isPaused","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.isPaused"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Determines whether an element is spottable."}]}]},"tags":[{"title":"param","description":"The dom element used to determine the spottable status.","type":{"type":"NameExpression","name":"Object"},"name":"elem"},{"title":"returns","description":"`true` if the element being evaluated is currently spottable.","type":{"type":"NameExpression","name":"Boolean"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"elem","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The dom element used to determine the spottable status."}]}]},"type":{"type":"NameExpression","name":"Object"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"inlineCode","value":"true"},{"type":"text","value":" if the element being evaluated is currently spottable."}]}]},"title":"returns","type":{"type":"NameExpression","name":"Boolean"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"isSpottable","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.isSpottable"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Returns the currently spotted control."}]}]},"tags":[{"title":"returns","description":"The control that currently has focus, if available","type":{"type":"NameExpression","name":"Node"}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The control that currently has focus, if available"}]}]},"title":"returns","type":{"type":"NameExpression","name":"Node"}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"getCurrent","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.getCurrent"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Returns a list of spottable elements wrapped by the supplied container."}]}]},"tags":[{"title":"param","description":"The id of the container used to determine the list of spottable elements","type":{"type":"NameExpression","name":"String"},"name":"containerId"},{"title":"returns","description":"The spottable elements that are wrapped by the supplied container","type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Array"},"applications":[{"type":"NameExpression","name":"Node"}]}},{"title":"public","description":null}],"augments":[],"examples":[],"implements":[],"params":[{"title":"param","name":"containerId","description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The id of the container used to determine the list of spottable elements"}]}]},"type":{"type":"NameExpression","name":"String"}}],"properties":[],"returns":[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The spottable elements that are wrapped by the supplied container"}]}]},"title":"returns","type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Array"},"applications":[{"type":"NameExpression","name":"Node"}]}}],"sees":[],"throws":[],"yields":[],"access":"public","name":"getSpottableDescendants","kind":"function","memberof":"spotlight.Spotlight","scope":"static","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"namespace":"spotlightSpotlight.getSpottableDescendants"}]},"namespace":"spotlightSpotlight"}]},"namespace":"spotlight"}]'
}},modulesList:{edges:[{node:{fields:{slug:"/docs/modules/core/dispatcher/"}}},{node:{fields:{slug:"/docs/modules/core/handle/"}}},{node:{fields:{slug:"/docs/modules/core/hoc/"}}},{node:{fields:{slug:"/docs/modules/core/keymap/"}}},{node:{fields:{slug:"/docs/modules/core/kind/"}}},{node:{fields:{slug:"/docs/modules/core/platform/"}}},{node:{fields:{slug:"/docs/modules/core/snapshot/"}}},{node:{fields:{slug:"/docs/modules/core/util/"}}},{node:{fields:{slug:"/docs/modules/i18n/$L/"}}},{node:{fields:{slug:"/docs/modules/i18n/I18nDecorator/"}}},{node:{fields:{slug:"/docs/modules/i18n/Text/"}}},{node:{fields:{slug:"/docs/modules/i18n/util/"}}},{node:{fields:{slug:"/docs/modules/spotlight/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Accelerator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Pause/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightContainerDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/SpotlightRootDecorator/"}}},{node:{fields:{slug:"/docs/modules/spotlight/Spottable/"}}},{node:{fields:{slug:"/docs/modules/ui/A11yDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/AnnounceDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/BodyText/"}}},{node:{fields:{slug:"/docs/modules/ui/Button/"}}},{node:{fields:{slug:"/docs/modules/ui/Cancelable/"}}},{node:{fields:{slug:"/docs/modules/ui/Changeable/"}}},{node:{fields:{slug:"/docs/modules/ui/ComponentOverride/"}}},{node:{fields:{slug:"/docs/modules/ui/FloatingLayer/"}}},{node:{fields:{slug:"/docs/modules/ui/ForwardRef/"}}},{node:{fields:{slug:"/docs/modules/ui/GridListImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Group/"}}},{node:{fields:{slug:"/docs/modules/ui/Heading/"}}},{node:{fields:{slug:"/docs/modules/ui/Icon/"}}},{node:{fields:{slug:"/docs/modules/ui/IconButton/"}}},{node:{fields:{slug:"/docs/modules/ui/Image/"}}},{node:{fields:{slug:"/docs/modules/ui/ImageItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Item/"}}},{node:{fields:{slug:"/docs/modules/ui/LabeledIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/Layout/"}}},{node:{fields:{slug:"/docs/modules/ui/Marquee/"}}},{node:{fields:{slug:"/docs/modules/ui/Measurable/"}}},{node:{fields:{slug:"/docs/modules/ui/Media/"}}},{node:{fields:{slug:"/docs/modules/ui/Placeholder/"}}},{node:{fields:{slug:"/docs/modules/ui/ProgressBar/"}}},{node:{fields:{slug:"/docs/modules/ui/RadioDecorator/"}}},{node:{fields:{slug:"/docs/modules/ui/Repeater/"}}},{node:{fields:{slug:"/docs/modules/ui/Resizable/"}}},{node:{fields:{slug:"/docs/modules/ui/Routable/"}}},{node:{fields:{slug:"/docs/modules/ui/Scroller/"}}},{node:{fields:{slug:"/docs/modules/ui/Skinnable/"}}},{node:{fields:{slug:"/docs/modules/ui/Slider/"}}},{node:{fields:{slug:"/docs/modules/ui/SlotItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Slottable/"}}},{node:{fields:{slug:"/docs/modules/ui/Spinner/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleIcon/"}}},{node:{fields:{slug:"/docs/modules/ui/ToggleItem/"}}},{node:{fields:{slug:"/docs/modules/ui/Toggleable/"}}},{node:{fields:{slug:"/docs/modules/ui/Touchable/"}}},{node:{fields:{slug:"/docs/modules/ui/Transition/"}}},{node:{fields:{slug:"/docs/modules/ui/ViewManager/"}}},{node:{fields:{slug:"/docs/modules/ui/VirtualList/"}}},{node:{fields:{slug:"/docs/modules/ui/resolution/"}}},{node:{fields:{slug:"/docs/modules/webos/LS2Request/"}}},{node:{fields:{slug:"/docs/modules/webos/application/"}}},{node:{fields:{slug:"/docs/modules/webos/deviceinfo/"}}},{node:{fields:{slug:"/docs/modules/webos/keyboard/"}}},{node:{fields:{slug:"/docs/modules/webos/platform/"}}},{node:{fields:{slug:"/docs/modules/webos/pmloglib/"}}},{node:{fields:{slug:"/docs/modules/webos/speech/"}}}]},site:{siteMetadata:{title:"I18N & L10N"}},docsPages:{edges:[{node:{path:"/docs/modules/",context:{title:null}}},{node:{path:"/docs/tutorials/",context:{title:null}}}]},jsMetadata:{edges:[{node:{fields:{slug:"/docs/tutorials/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/tutorials/index.js",frontmatter:{title:"Internationalization"}}},{node:{fields:{slug:"/docs/modules/"},fileAbsolutePath:"/home/goun/Source/opensource_iLib/docs/src/pages/docs/modules/index.js",frontmatter:{title:"Getting Started"}}}]}},pathContext:{slug:"/docs/modules/spotlight/",title:"spotlight"}}}});