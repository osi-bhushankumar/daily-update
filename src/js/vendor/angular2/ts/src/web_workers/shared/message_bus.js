System.register([], function(exports_1) {
    var MessageBus;
    return {
        setters:[],
        execute: function() {
            /**
             * Message Bus is a low level API used to communicate between the UI and the background.
             * Communication is based on a channel abstraction. Messages published in a
             * given channel to one MessageBusSink are received on the same channel
             * by the corresponding MessageBusSource.
             */
            MessageBus = (function () {
                function MessageBus() {
                }
                return MessageBus;
            })();
            exports_1("MessageBus", MessageBus);
        }
    }
});
//# sourceMappingURL=message_bus.js.map