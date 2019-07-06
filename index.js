/**
 * load dependencies and whatever needed
 */
var htmlpdf = require('html-pdf'),
    path = require('path');

function malta_html2pdf(obj, options) {
    var self = this,
        start = new Date(),
        msg,
        pluginName = path.basename(path.dirname(__filename));

    options = options || {};

    obj.name = obj.name.replace(/\.html$/, '.pdf');

    return function (solve, reject) {
        htmlpdf.create(obj.content, options).toFile(obj.name, function (err, res) {
            if (err == null) {
                msg = 'plugin ' + pluginName.white() + ' wrote ' + obj.name + ' (' + self.getSize(obj.name) + ')';
            } else {
                self.doErr(err, obj, pluginName);
            }
            err
                ? reject(`Plugin ${pluginName} conversion error:\n${err}`)
                : solve(obj);
            self.notifyAndUnlock(start, msg);
        });
    }
}
malta_html2pdf.ext = 'html';
module.exports = malta_html2pdf;
