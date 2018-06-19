(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <h1>\n                <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data}) : helper)))
    + "\" class=\"youtube-media\">\n                    <i class=\"fa fa-play-circle-o\"></i> Voir la présentation</a> \n            </h1>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();