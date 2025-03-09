fx_version 'cerulean'
game 'gta5'

description 'Persona Core'
version '1.0.0'

server_script 'dist/server/server.js'
client_script 'dist/client/client.js'

shared_script 'dist/shared/shared.js'

ui_page 'dist/web/index.html'

files {
    'dist/web/index.html',
    'dist/web/assets/**',
    'dist/web/assets/*.js',
    'dist/web/assets/*.css',
}