define(function (require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var ko = require('knockout');

    var CommitFormatViewModel = function (knownFormats, commitGenerator) {
        var that = this;
        var initialFormat = knownFormats && knownFormats.length > 0 ? knownFormats[0] : null;

        that.commitGenerator = commitGenerator;

        that.knownFormats = ko.observableArray(knownFormats);
        that.format = ko.observable(initialFormat);

        that.number = ko.observable('');
        that.name = ko.observable('');
        that.description = ko.observable('');

        that.template = function () {
            return that.format().templateName;
        };

        that.generateDescription = function () {
            var commit = that.commitGenerator.generate();
            that.description(commit);
        };

        that.commitText = ko.computed(function () {
            var data = {
                number: that.number(),
                name: that.name(),
                description: that.description()
            };

            var text = that.format().formatCommit(data);

            try {
                $('[data-clipper]')[0].setText(text);
            }
            catch (error) {
            }

            return text;
        });
    };

    return CommitFormatViewModel;
});