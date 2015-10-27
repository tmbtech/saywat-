System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "sourceMaps": "inline",
    "stage": 0,
    "blacklist": [],
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app/index.js",
      "npm:react-dom@0.14.0",
      "app/AppContext.js",
      "app/config.js",
      "app/views/main.js",
      "npm:firebase@2.3.1",
      "npm:react@0.14.0",
      "npm:babel-runtime@5.8.29/helpers/get",
      "npm:babel-runtime@5.8.29/helpers/inherits",
      "npm:babel-runtime@5.8.29/helpers/to-consumable-array",
      "npm:babel-runtime@5.8.29/helpers/class-call-check",
      "npm:babel-runtime@5.8.29/helpers/extends",
      "npm:babel-runtime@5.8.29/helpers/create-class",
      "npm:react-dom@0.14.0/index",
      "npm:react@0.14.0/react",
      "npm:immutable@3.7.5",
      "app/components/commentBox.js",
      "npm:babel-runtime@5.8.29/core-js/object/create",
      "npm:babel-runtime@5.8.29/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.29/core-js/object/assign",
      "npm:babel-runtime@5.8.29/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.29/core-js/object/define-property",
      "npm:babel-runtime@5.8.29/core-js/array/from",
      "npm:firebase@2.3.1/lib/firebase-web",
      "npm:react@0.14.0/lib/React",
      "npm:react@0.14.0/lib/ReactDOM",
      "app/components/rate.js",
      "npm:core-js@1.2.3/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.3/library/fn/object/set-prototype-of",
      "npm:core-js@1.2.3/library/fn/object/create",
      "npm:core-js@1.2.3/library/fn/object/assign",
      "npm:core-js@1.2.3/library/fn/object/define-property",
      "npm:core-js@1.2.3/library/fn/array/from",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:immutable@3.7.5/dist/immutable",
      "npm:react@0.14.0/lib/ReactDOMServer",
      "npm:react@0.14.0/lib/Object.assign",
      "npm:react@0.14.0/lib/ReactCurrentOwner",
      "npm:react@0.14.0/lib/ReactIsomorphic",
      "npm:react@0.14.0/lib/deprecated",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.0/lib/ReactDOMTextComponent",
      "npm:react@0.14.0/lib/ReactDefaultInjection",
      "npm:react@0.14.0/lib/ReactMount",
      "npm:react@0.14.0/lib/ReactInstanceHandles",
      "npm:react@0.14.0/lib/ReactReconciler",
      "npm:react@0.14.0/lib/ReactPerf",
      "npm:react@0.14.0/lib/ReactUpdates",
      "npm:react@0.14.0/lib/ReactVersion",
      "npm:react@0.14.0/lib/renderSubtreeIntoContainer",
      "npm:react@0.14.0/lib/findDOMNode",
      "npm:fbjs@0.3.2/lib/warning",
      "npm:core-js@1.2.3/library/modules/es6.object.set-prototype-of",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:core-js@1.2.3/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.3/library/modules/$.core",
      "npm:core-js@1.2.3/library/modules/$",
      "npm:core-js@1.2.3/library/modules/es6.object.assign",
      "npm:core-js@1.2.3/library/modules/es6.array.from",
      "npm:core-js@1.2.3/library/modules/es6.string.iterator",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:react@0.14.0/lib/ReactServerRendering",
      "npm:react@0.14.0/lib/ReactComponent",
      "npm:react@0.14.0/lib/ReactChildren",
      "npm:react@0.14.0/lib/ReactDOMFactories",
      "npm:react@0.14.0/lib/ReactClass",
      "npm:react@0.14.0/lib/ReactElement",
      "npm:react@0.14.0/lib/ReactElementValidator",
      "npm:react@0.14.0/lib/onlyChild",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.14.0/lib/ReactPropTypes",
      "npm:react@0.14.0/lib/DOMChildrenOperations",
      "npm:react@0.14.0/lib/DOMPropertyOperations",
      "npm:react@0.14.0/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.0/lib/escapeTextContentForBrowser",
      "npm:react@0.14.0/lib/setTextContent",
      "npm:react@0.14.0/lib/validateDOMNesting",
      "npm:react@0.14.0/lib/ChangeEventPlugin",
      "npm:react@0.14.0/lib/BeforeInputEventPlugin",
      "npm:react@0.14.0/lib/DefaultEventPluginOrder",
      "npm:react@0.14.0/lib/ClientReactRootIndex",
      "npm:react@0.14.0/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.0/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.0/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.0/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.0/lib/ReactDOMComponent",
      "npm:react@0.14.0/lib/ReactEventListener",
      "npm:react@0.14.0/lib/ReactInjection",
      "npm:react@0.14.0/lib/ReactReconcileTransaction",
      "npm:react@0.14.0/lib/ServerReactRootIndex",
      "npm:react@0.14.0/lib/SimpleEventPlugin",
      "npm:react@0.14.0/lib/SelectEventPlugin",
      "npm:react@0.14.0/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.0/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.0/lib/ReactDefaultPerf",
      "npm:react@0.14.0/lib/DOMProperty",
      "npm:react@0.14.0/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.0/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.0/lib/ReactInstanceMap",
      "npm:react@0.14.0/lib/ReactUpdateQueue",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:react@0.14.0/lib/instantiateReactComponent",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:react@0.14.0/lib/setInnerHTML",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:react@0.14.0/lib/shouldUpdateReactComponent",
      "npm:react@0.14.0/lib/ReactRootIndex",
      "npm:react@0.14.0/lib/ReactMarkupChecksum",
      "npm:react@0.14.0/lib/ReactRef",
      "npm:react@0.14.0/lib/PooledClass",
      "npm:react@0.14.0/lib/CallbackQueue",
      "npm:react@0.14.0/lib/Transaction",
      "npm:core-js@1.2.3/library/modules/$.def",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:core-js@1.2.3/library/modules/$.set-proto",
      "npm:core-js@1.2.3/library/modules/$.to-iobject",
      "npm:core-js@1.2.3/library/modules/$.object-sap",
      "npm:core-js@1.2.3/library/modules/$.assign",
      "npm:core-js@1.2.3/library/modules/$.ctx",
      "npm:core-js@1.2.3/library/modules/$.iter-call",
      "npm:core-js@1.2.3/library/modules/$.to-object",
      "npm:core-js@1.2.3/library/modules/$.is-array-iter",
      "npm:core-js@1.2.3/library/modules/$.to-length",
      "npm:core-js@1.2.3/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.3/library/modules/$.iter-detect",
      "npm:core-js@1.2.3/library/modules/$.string-at",
      "npm:core-js@1.2.3/library/modules/$.iter-define",
      "npm:react@0.14.0/lib/ReactServerBatchingStrategy",
      "npm:buffer@3.5.1",
      "npm:react@0.14.0/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.0/lib/traverseAllChildren",
      "npm:react@0.14.0/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.0/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.3.2/lib/mapObject",
      "npm:fbjs@0.3.2/lib/keyMirror",
      "npm:react@0.14.0/lib/ReactPropTypeLocations",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:react@0.14.0/lib/getIteratorFn",
      "npm:react@0.14.0/lib/Danger",
      "npm:react@0.14.0/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.0/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.0/lib/ReactDOMIDOperations",
      "npm:process@0.11.2",
      "npm:react@0.14.0/lib/EventPropagators",
      "npm:react@0.14.0/lib/EventPluginHub",
      "npm:react@0.14.0/lib/EventConstants",
      "npm:react@0.14.0/lib/SyntheticEvent",
      "npm:react@0.14.0/lib/getEventTarget",
      "npm:react@0.14.0/lib/isEventSupported",
      "npm:react@0.14.0/lib/isTextInputElement",
      "npm:react@0.14.0/lib/FallbackCompositionState",
      "npm:react@0.14.0/lib/SyntheticCompositionEvent",
      "npm:react@0.14.0/lib/SyntheticInputEvent",
      "npm:react@0.14.0/lib/SyntheticMouseEvent",
      "npm:react@0.14.0/lib/AutoFocusUtils",
      "npm:react@0.14.0/lib/CSSPropertyOperations",
      "npm:react@0.14.0/lib/ReactDOMButton",
      "npm:react@0.14.0/lib/ReactDOMOption",
      "npm:react@0.14.0/lib/ReactDOMSelect",
      "npm:react@0.14.0/lib/ReactDOMTextarea",
      "npm:react@0.14.0/lib/ReactMultiChild",
      "npm:react@0.14.0/lib/ReactComponentEnvironment",
      "npm:fbjs@0.3.2/lib/shallowEqual",
      "npm:react@0.14.0/lib/ReactDOMInput",
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:react@0.14.0/lib/ReactEmptyComponent",
      "npm:react@0.14.0/lib/ReactNativeComponent",
      "npm:react@0.14.0/lib/ReactInputSelection",
      "npm:react@0.14.0/lib/SyntheticClipboardEvent",
      "npm:react@0.14.0/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.0/lib/SyntheticDragEvent",
      "npm:react@0.14.0/lib/SyntheticTouchEvent",
      "npm:react@0.14.0/lib/SyntheticUIEvent",
      "npm:react@0.14.0/lib/SyntheticWheelEvent",
      "npm:react@0.14.0/lib/getEventCharCode",
      "npm:fbjs@0.3.2/lib/getActiveElement",
      "npm:react@0.14.0/lib/SyntheticFocusEvent",
      "npm:react@0.14.0/lib/ReactEventEmitterMixin",
      "npm:react@0.14.0/lib/ViewportMetrics",
      "npm:fbjs@0.3.2/lib/getUnboundedScrollPosition",
      "npm:react@0.14.0/lib/EventPluginRegistry",
      "npm:react@0.14.0/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.3.2/lib/performanceNow",
      "npm:react@0.14.0/lib/ReactCompositeComponent",
      "npm:react@0.14.0/lib/adler32",
      "npm:react@0.14.0/lib/ReactOwner",
      "npm:fbjs@0.3.2/lib/isTextNode",
      "npm:core-js@1.2.3/library/modules/$.global",
      "npm:core-js@1.2.3/library/modules/$.an-object",
      "npm:core-js@1.2.3/library/modules/$.is-object",
      "npm:core-js@1.2.3/library/modules/$.defined",
      "npm:core-js@1.2.3/library/modules/$.iobject",
      "npm:core-js@1.2.3/library/modules/$.fails",
      "npm:core-js@1.2.3/library/modules/$.a-function",
      "npm:core-js@1.2.3/library/modules/$.to-integer",
      "npm:core-js@1.2.3/library/modules/$.wks",
      "npm:core-js@1.2.3/library/modules/$.classof",
      "npm:core-js@1.2.3/library/modules/$.library",
      "npm:core-js@1.2.3/library/modules/$.redef",
      "npm:core-js@1.2.3/library/modules/$.iterators",
      "npm:core-js@1.2.3/library/modules/$.hide",
      "npm:core-js@1.2.3/library/modules/$.iter-create",
      "npm:core-js@1.2.3/library/modules/$.has",
      "npm:core-js@1.2.3/library/modules/$.tag",
      "npm:buffer@3.5.1/index",
      "npm:react@0.14.0/lib/accumulateInto",
      "npm:react@0.14.0/lib/forEachAccumulated",
      "npm:fbjs@0.3.2/lib/createNodesFromMarkup",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:process@0.11.2/browser",
      "npm:react@0.14.0/lib/getTextContentAccessor",
      "npm:react@0.14.0/lib/getEventModifierState",
      "npm:fbjs@0.3.2/lib/focusNode",
      "npm:react@0.14.0/lib/ReactErrorUtils",
      "npm:react@0.14.0/lib/dangerousStyleValue",
      "npm:fbjs@0.3.2/lib/hyphenateStyleName",
      "npm:react@0.14.0/lib/EventPluginUtils",
      "npm:react@0.14.0/lib/LinkedValueUtils",
      "npm:react@0.14.0/lib/CSSProperty",
      "npm:fbjs@0.3.2/lib/camelizeStyleName",
      "npm:fbjs@0.3.2/lib/memoizeStringOnly",
      "npm:react@0.14.0/lib/flattenChildren",
      "npm:react@0.14.0/lib/getEventKey",
      "npm:fbjs@0.3.2/lib/performance",
      "npm:react@0.14.0/lib/ReactChildReconciler",
      "npm:react@0.14.0/lib/ReactDOMSelection",
      "npm:fbjs@0.3.2/lib/isNode",
      "npm:core-js@1.2.3/library/modules/$.cof",
      "npm:core-js@1.2.3/library/modules/$.shared",
      "npm:core-js@1.2.3/library/modules/$.uid",
      "npm:core-js@1.2.3/library/modules/$.property-desc",
      "npm:core-js@1.2.3/library/modules/$.support-desc",
      "npm:base64-js@0.0.8",
      "npm:fbjs@0.3.2/lib/createArrayFromMixed",
      "npm:fbjs@0.3.2/lib/hyphenate",
      "npm:fbjs@0.3.2/lib/camelize",
      "npm:ieee754@1.1.6",
      "npm:react@0.14.0/lib/getNodeForCharacterOffset",
      "npm:is-array@1.0.1",
      "npm:fbjs@0.3.2/lib/toArray",
      "npm:ieee754@1.1.6/index",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:is-array@1.0.1/index"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.29",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "core-js": "npm:core-js@1.2.3",
    "firebase": "npm:firebase@2.3.1",
    "immutable": "npm:immutable@3.7.5",
    "react": "npm:react@0.14.0",
    "react-bootstrap": "npm:react-bootstrap@0.25.2",
    "react-dom": "npm:react-dom@0.14.0",
    "redux": "npm:redux@3.0.4",
    "redux-thunk": "npm:redux-thunk@1.0.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:classnames@2.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:faye-websocket@0.10.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-driver": "npm:websocket-driver@0.6.2"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.3",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:firebase@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "faye-websocket": "npm:faye-websocket@0.10.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.1.1": {
      "loose-envify": "npm:loose-envify@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:js-tokens@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.0.0": {
      "js-tokens": "npm:js-tokens@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-bootstrap@0.25.2": {
      "babel-runtime": "npm:babel-runtime@5.8.25",
      "classnames": "npm:classnames@2.1.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "keycode": "npm:keycode@2.1.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.0",
      "react-overlays": "npm:react-overlays@0.4.4",
      "uncontrollable": "npm:uncontrollable@3.1.2"
    },
    "npm:react-dom@0.14.0": {
      "react": "npm:react@0.14.0"
    },
    "npm:react-overlays@0.4.4": {
      "classnames": "npm:classnames@2.1.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@0.14.0",
      "react-prop-types": "npm:react-prop-types@0.2.2",
      "warning": "npm:warning@2.0.0"
    },
    "npm:react-prop-types@0.2.2": {
      "warning": "npm:warning@2.0.0"
    },
    "npm:react@0.14.0": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux@3.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:uncontrollable@3.1.2": {
      "invariant": "npm:invariant@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.0.0": {
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:websocket-driver@0.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-extensions": "npm:websocket-extensions@0.1.1"
    },
    "npm:websocket-extensions@0.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
