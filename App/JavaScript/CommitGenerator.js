define(function (require, exports, module) {
    'use strict';
    
    var CommitGenerator = function (commitMessages) {
        var that = this;
        that.commitMessages = commitMessages;

        return {
            generate: function () {
                var randomNumber = Math.randomInt(0, commitMessages.length - 1);
                var randomMessage = that.commitMessages[randomNumber];

                return randomMessage;
            }
        };
    };
    
    return CommitGenerator;
});