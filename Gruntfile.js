module.exports = function(grunt){


grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

concat : {
dist:{
src:['jquery.min.js','home.js'],
dest:'home.min.js'
}

},


uglify : {

dist : {
files:{
'home.min.js' : ['jquery.min.js','home.js']
}
}

},

jshint: {

beforeconcat : ['jquery.min.js','home.js']

},


imagemin: {
jpgs:{
options:{
progressive:true,
optimizationLevel:5
},

files:[{
expand:true,
cwd:'images',
src:['*.jpg','*.png'],
dest:'imagesmin/'
}]
}
}


});


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-imagemin');

grunt.registerTask('default',['concat','uglify','imagemin']);


}