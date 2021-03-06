System.register(['angular2/src/core/di', 'angular2/src/facade/lang', 'angular2/src/facade/exceptions', 'angular2/src/core/metadata', 'angular2/src/core/reflection/reflection'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var di_1, lang_1, exceptions_1, metadata_1, reflection_1;
    var PipeResolver;
    function _isPipeMetadata(type) {
        return type instanceof metadata_1.PipeMetadata;
    }
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (reflection_1_1) {
                reflection_1 = reflection_1_1;
            }],
        execute: function() {
            /**
             * Resolve a `Type` for {@link PipeMetadata}.
             *
             * This interface can be overridden by the application developer to create custom behavior.
             *
             * See {@link Compiler}
             */
            PipeResolver = (function () {
                function PipeResolver() {
                }
                /**
                 * Return {@link PipeMetadata} for a given `Type`.
                 */
                PipeResolver.prototype.resolve = function (type) {
                    var metas = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
                    if (lang_1.isPresent(metas)) {
                        var annotation = metas.find(_isPipeMetadata);
                        if (lang_1.isPresent(annotation)) {
                            return annotation;
                        }
                    }
                    throw new exceptions_1.BaseException("No Pipe decorator found on " + lang_1.stringify(type));
                };
                PipeResolver = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PipeResolver);
                return PipeResolver;
            })();
            exports_1("PipeResolver", PipeResolver);
        }
    }
});
//# sourceMappingURL=pipe_resolver.js.map