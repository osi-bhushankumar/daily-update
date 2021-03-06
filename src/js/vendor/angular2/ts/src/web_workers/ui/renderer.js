System.register(['angular2/src/core/di', 'angular2/src/web_workers/shared/message_bus', 'angular2/src/web_workers/shared/serializer', 'angular2/src/core/render/api', 'angular2/src/web_workers/shared/api', 'angular2/src/web_workers/shared/messaging_api', './bind', 'angular2/src/web_workers/ui/event_dispatcher', 'angular2/src/web_workers/shared/render_proto_view_ref_store', 'angular2/src/web_workers/shared/render_view_with_fragments_store', 'angular2/src/web_workers/shared/service_message_broker'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var di_1, message_bus_1, serializer_1, api_1, api_2, messaging_api_1, bind_1, event_dispatcher_1, render_proto_view_ref_store_1, render_view_with_fragments_store_1, service_message_broker_1;
    var MessageBasedRenderer;
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (message_bus_1_1) {
                message_bus_1 = message_bus_1_1;
            },
            function (serializer_1_1) {
                serializer_1 = serializer_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (api_2_1) {
                api_2 = api_2_1;
            },
            function (messaging_api_1_1) {
                messaging_api_1 = messaging_api_1_1;
            },
            function (bind_1_1) {
                bind_1 = bind_1_1;
            },
            function (event_dispatcher_1_1) {
                event_dispatcher_1 = event_dispatcher_1_1;
            },
            function (render_proto_view_ref_store_1_1) {
                render_proto_view_ref_store_1 = render_proto_view_ref_store_1_1;
            },
            function (render_view_with_fragments_store_1_1) {
                render_view_with_fragments_store_1 = render_view_with_fragments_store_1_1;
            },
            function (service_message_broker_1_1) {
                service_message_broker_1 = service_message_broker_1_1;
            }],
        execute: function() {
            MessageBasedRenderer = (function () {
                function MessageBasedRenderer(_brokerFactory, _bus, _serializer, _renderProtoViewRefStore, _renderViewWithFragmentsStore, _renderer) {
                    this._brokerFactory = _brokerFactory;
                    this._bus = _bus;
                    this._serializer = _serializer;
                    this._renderProtoViewRefStore = _renderProtoViewRefStore;
                    this._renderViewWithFragmentsStore = _renderViewWithFragmentsStore;
                    this._renderer = _renderer;
                }
                MessageBasedRenderer.prototype.start = function () {
                    var broker = this._brokerFactory.createMessageBroker(messaging_api_1.RENDERER_CHANNEL);
                    this._bus.initChannel(messaging_api_1.EVENT_CHANNEL);
                    broker.registerMethod("registerComponentTemplate", [api_1.RenderComponentTemplate], bind_1.bind(this._renderer.registerComponentTemplate, this._renderer));
                    broker.registerMethod("createProtoView", [serializer_1.PRIMITIVE, api_2.WebWorkerTemplateCmd, serializer_1.PRIMITIVE], bind_1.bind(this._createProtoView, this));
                    broker.registerMethod("createRootHostView", [api_1.RenderProtoViewRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._createRootHostView, this));
                    broker.registerMethod("createView", [api_1.RenderProtoViewRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._createView, this));
                    broker.registerMethod("destroyView", [api_1.RenderViewRef], bind_1.bind(this._destroyView, this));
                    broker.registerMethod("attachFragmentAfterFragment", [api_1.RenderFragmentRef, api_1.RenderFragmentRef], bind_1.bind(this._renderer.attachFragmentAfterFragment, this._renderer));
                    broker.registerMethod("attachFragmentAfterElement", [api_2.WebWorkerElementRef, api_1.RenderFragmentRef], bind_1.bind(this._renderer.attachFragmentAfterElement, this._renderer));
                    broker.registerMethod("detachFragment", [api_1.RenderFragmentRef], bind_1.bind(this._renderer.detachFragment, this._renderer));
                    broker.registerMethod("hydrateView", [api_1.RenderViewRef], bind_1.bind(this._renderer.hydrateView, this._renderer));
                    broker.registerMethod("dehydrateView", [api_1.RenderViewRef], bind_1.bind(this._renderer.dehydrateView, this._renderer));
                    broker.registerMethod("setText", [api_1.RenderViewRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.setText, this._renderer));
                    broker.registerMethod("setElementProperty", [api_2.WebWorkerElementRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.setElementProperty, this._renderer));
                    broker.registerMethod("setElementAttribute", [api_2.WebWorkerElementRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.setElementAttribute, this._renderer));
                    broker.registerMethod("setBindingDebugInfo", [api_2.WebWorkerElementRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.setBindingDebugInfo, this._renderer));
                    broker.registerMethod("setElementClass", [api_2.WebWorkerElementRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.setElementClass, this._renderer));
                    broker.registerMethod("setElementStyle", [api_2.WebWorkerElementRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.setElementStyle, this._renderer));
                    broker.registerMethod("invokeElementMethod", [api_2.WebWorkerElementRef, serializer_1.PRIMITIVE, serializer_1.PRIMITIVE], bind_1.bind(this._renderer.invokeElementMethod, this._renderer));
                    broker.registerMethod("setEventDispatcher", [api_1.RenderViewRef], bind_1.bind(this._setEventDispatcher, this));
                };
                MessageBasedRenderer.prototype._destroyView = function (viewRef) {
                    this._renderer.destroyView(viewRef);
                    this._renderViewWithFragmentsStore.remove(viewRef);
                };
                MessageBasedRenderer.prototype._createProtoView = function (componentTemplateId, cmds, refIndex) {
                    var protoViewRef = this._renderer.createProtoView(componentTemplateId, cmds);
                    this._renderProtoViewRefStore.store(protoViewRef, refIndex);
                };
                MessageBasedRenderer.prototype._createRootHostView = function (ref, fragmentCount, selector, startIndex) {
                    var renderViewWithFragments = this._renderer.createRootHostView(ref, fragmentCount, selector);
                    this._renderViewWithFragmentsStore.store(renderViewWithFragments, startIndex);
                };
                MessageBasedRenderer.prototype._createView = function (ref, fragmentCount, startIndex) {
                    var renderViewWithFragments = this._renderer.createView(ref, fragmentCount);
                    this._renderViewWithFragmentsStore.store(renderViewWithFragments, startIndex);
                };
                MessageBasedRenderer.prototype._setEventDispatcher = function (viewRef) {
                    var dispatcher = new event_dispatcher_1.EventDispatcher(viewRef, this._bus.to(messaging_api_1.EVENT_CHANNEL), this._serializer);
                    this._renderer.setEventDispatcher(viewRef, dispatcher);
                };
                MessageBasedRenderer = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof service_message_broker_1.ServiceMessageBrokerFactory !== 'undefined' && service_message_broker_1.ServiceMessageBrokerFactory) === 'function' && _a) || Object, (typeof (_b = typeof message_bus_1.MessageBus !== 'undefined' && message_bus_1.MessageBus) === 'function' && _b) || Object, (typeof (_c = typeof serializer_1.Serializer !== 'undefined' && serializer_1.Serializer) === 'function' && _c) || Object, (typeof (_d = typeof render_proto_view_ref_store_1.RenderProtoViewRefStore !== 'undefined' && render_proto_view_ref_store_1.RenderProtoViewRefStore) === 'function' && _d) || Object, (typeof (_e = typeof render_view_with_fragments_store_1.RenderViewWithFragmentsStore !== 'undefined' && render_view_with_fragments_store_1.RenderViewWithFragmentsStore) === 'function' && _e) || Object, (typeof (_f = typeof api_1.Renderer !== 'undefined' && api_1.Renderer) === 'function' && _f) || Object])
                ], MessageBasedRenderer);
                return MessageBasedRenderer;
                var _a, _b, _c, _d, _e, _f;
            })();
            exports_1("MessageBasedRenderer", MessageBasedRenderer);
        }
    }
});
//# sourceMappingURL=renderer.js.map