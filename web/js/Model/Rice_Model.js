var RiceModel = Backbone.Model.extend({});
var Rices = Backbone.Collection.extend({
    model: RiceModel,
    url: 'http://localhost:8080/all/rice',
    parse: function(data) {
        'use strict';
        return data;
    }
});