System.register(['angular2/src/facade/lang', './html_tags'], function(exports_1) {
    var lang_1, html_tags_1;
    var NG_CONTENT_SELECT_ATTR, NG_CONTENT_ELEMENT, LINK_ELEMENT, LINK_STYLE_REL_ATTR, LINK_STYLE_HREF_ATTR, LINK_STYLE_REL_VALUE, STYLE_ELEMENT, SCRIPT_ELEMENT, NG_NON_BINDABLE_ATTR, PreparsedElementType, PreparsedElement;
    function preparseElement(ast) {
        var selectAttr = null;
        var hrefAttr = null;
        var relAttr = null;
        var nonBindable = false;
        ast.attrs.forEach(function (attr) {
            var lcAttrName = attr.name.toLowerCase();
            if (lcAttrName == NG_CONTENT_SELECT_ATTR) {
                selectAttr = attr.value;
            }
            else if (lcAttrName == LINK_STYLE_HREF_ATTR) {
                hrefAttr = attr.value;
            }
            else if (lcAttrName == LINK_STYLE_REL_ATTR) {
                relAttr = attr.value;
            }
            else if (attr.name == NG_NON_BINDABLE_ATTR) {
                nonBindable = true;
            }
        });
        selectAttr = normalizeNgContentSelect(selectAttr);
        var nodeName = ast.name.toLowerCase();
        var type = PreparsedElementType.OTHER;
        if (html_tags_1.splitNsName(nodeName)[1] == NG_CONTENT_ELEMENT) {
            type = PreparsedElementType.NG_CONTENT;
        }
        else if (nodeName == STYLE_ELEMENT) {
            type = PreparsedElementType.STYLE;
        }
        else if (nodeName == SCRIPT_ELEMENT) {
            type = PreparsedElementType.SCRIPT;
        }
        else if (nodeName == LINK_ELEMENT && relAttr == LINK_STYLE_REL_VALUE) {
            type = PreparsedElementType.STYLESHEET;
        }
        return new PreparsedElement(type, selectAttr, hrefAttr, nonBindable);
    }
    exports_1("preparseElement", preparseElement);
    function normalizeNgContentSelect(selectAttr) {
        if (lang_1.isBlank(selectAttr) || selectAttr.length === 0) {
            return '*';
        }
        return selectAttr;
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (html_tags_1_1) {
                html_tags_1 = html_tags_1_1;
            }],
        execute: function() {
            NG_CONTENT_SELECT_ATTR = 'select';
            NG_CONTENT_ELEMENT = 'ng-content';
            LINK_ELEMENT = 'link';
            LINK_STYLE_REL_ATTR = 'rel';
            LINK_STYLE_HREF_ATTR = 'href';
            LINK_STYLE_REL_VALUE = 'stylesheet';
            STYLE_ELEMENT = 'style';
            SCRIPT_ELEMENT = 'script';
            NG_NON_BINDABLE_ATTR = 'ngNonBindable';
            (function (PreparsedElementType) {
                PreparsedElementType[PreparsedElementType["NG_CONTENT"] = 0] = "NG_CONTENT";
                PreparsedElementType[PreparsedElementType["STYLE"] = 1] = "STYLE";
                PreparsedElementType[PreparsedElementType["STYLESHEET"] = 2] = "STYLESHEET";
                PreparsedElementType[PreparsedElementType["SCRIPT"] = 3] = "SCRIPT";
                PreparsedElementType[PreparsedElementType["OTHER"] = 4] = "OTHER";
            })(PreparsedElementType || (PreparsedElementType = {}));
            exports_1("PreparsedElementType", PreparsedElementType);
            PreparsedElement = (function () {
                function PreparsedElement(type, selectAttr, hrefAttr, nonBindable) {
                    this.type = type;
                    this.selectAttr = selectAttr;
                    this.hrefAttr = hrefAttr;
                    this.nonBindable = nonBindable;
                }
                return PreparsedElement;
            })();
            exports_1("PreparsedElement", PreparsedElement);
        }
    }
});
//# sourceMappingURL=template_preparser.js.map