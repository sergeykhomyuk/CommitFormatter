define(function (require, exports, module) {
    'use strict';

    require('extensions/extensions');
    var $ = require('jquery');
    var ko = require('knockout');

    var commitMessages = require('CommitMessages');
    var CommitGenerator = require('CommitGenerator');

    var CommitFormatViewModel = require('viewmodels/CommitFormatViewModel');
    var template = require('text!../Templates/CommitFormatTemplate.html');
    
    var CommitFormatType = function (id, displayName, templateName, formatCommit) {
        var that = this;

        that.id = id;
        that.displayName = displayName;
        that.templateName = templateName;
        that.formatCommit = formatCommit;
    };

    var formats = [
        new CommitFormatType('BugFix', 'Bug Fix', 'bugFixCommitTemplate', function (data) {
            var number = data.number || '[BugNumber]';
            var description = data.description || '[Change description]';
            return 'BugFix: {0}: {1}'.format(number, description);
        }),
        new CommitFormatType('Task', 'Task', 'taskCommitTemplate', function (data) {
            var number = data.number || '[TaskNumber]';
            var name = data.name || '[Name]';
            var description = data.description || '[Change description]';
            return 'Task: {0}: *{1}* - {2}'.format(number, name, description);
        }),
        new CommitFormatType('Case', 'Case', 'caseCommitTemplate', function (data) {
            var number = data.number || '[CaseNumber]';
            var name = data.name || '[Subject]';
            var description = data.description || '[Change description]';
            return 'Case: {0}: *{1}* - {2}'.format(number, name, description);
        }),
        new CommitFormatType('DEV', 'Development', 'devCommitTemplate', function (data) {
            var description = data.description || '[Change description]';
            return 'DEV: {0}'.format(description);
        }),
        new CommitFormatType('QA', 'QA', 'qaCommitTemplate', function (data) {
            var description = data.description || '[Change description]';
            return 'QA: {0}'.format(description);
        })
    ];

    var CommitFormatter = function() {
        return {
            init: function() {
                var commitGenerator = new CommitGenerator(commitMessages);
                var viewModel = new CommitFormatViewModel(formats, commitGenerator);

                $('[data-container]').html(template);

                ko.applyBindings(viewModel);
            }
        };
    };

    return CommitFormatter;
});