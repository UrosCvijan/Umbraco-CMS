(function () {
    'use strict';

    // TODO: Add docs - this component is used to render a content item based on an Element Type as a nested editor

    angular
        .module('umbraco.directives')
        .component('umbElementEditorContent', {
            templateUrl: 'views/common/infiniteeditors/elementeditor/elementEditor.content.component.html',
            controller: ElementEditorContentComponentController,
            controllerAs: 'vm',
            bindings: {
                model: '=',
                // As this component is used for creating nested editors based on an element type, we need to know the index of this nested 
                // editor so that validation works. For example, if this is used in the block editor, this is the index of the block being rendered.
                itemIndex: '<' 
            }
        });

    function ElementEditorContentComponentController() {

        // TODO: we might not need this..

    }

})();
