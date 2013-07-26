module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            source: 'src/chrome-app',
            target: 'target'
        },
        clean: {
            target: '<%= project.target %>'
        },
        crx: {
            target: {
                src: '<%= project.source %>',
                dest: '<%= project.target %>/<%= pkg.name %>-<%= pkg.version %>.crx',
                privateKey: '~/.ssh/exfm-chrome-app.pem'
            }
        },
        zip: {
            target: {
                options: {
                    mode: 'zip',
                    archive: '<%= project.target %>/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                expand: true,
                cwd: '<%= project.source %>',
                src: ['**/*']
            }
        }
    });

    // load all grunt tasks defined in package.json
    var devDependencies = grunt.config.get('pkg').devDependencies;
    for (var task in devDependencies) {
        if (devDependencies.hasOwnProperty(task) && task.indexOf('grunt-') === 0) {
            grunt.loadNpmTasks(task);
        }
    }

    grunt.renameTask('compress', 'zip');

};