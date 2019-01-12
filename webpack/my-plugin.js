const fs = require('fs');
const exec = require('child_process').exec;

class MyPlugin{
	constructor(options){
		this.options = options;
	}

	apply(compiler){
		console.log('HELLO');
		compiler.plugin('compile', () => {
			exec(`rm -r ${this.options.path}`, function(err, stdout, stderr){
				console.log('Finish');
			})
		})

		//compiler.plugin('emit', (compilation, cb) => {
		//	compilation.warnings.push('MY Warning - PLUGIN !!!');
		//	fs.writeFile(`${this.options.path}/my-plugin-text.txt`, this.options.message);
		//	cb();
		//});
	}
}


module.exports = MyPlugin;