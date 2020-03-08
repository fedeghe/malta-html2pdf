/**
 * load dependencies and whatever needed
 */
const htmlpdf = require('html-pdf'),
    path = require('path');

function malta_html2pdf(obj, options) {
    const self = this,
        start = new Date(),
        pluginName = path.basename(path.dirname(__filename));

    let msg;

    options = options || {};

    obj.name = obj.name.replace(/\.html$/, '.pdf');

    return (solve, reject) => {
        htmlpdf.create(obj.content, options).toFile(obj.name, (err, res) => {
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
