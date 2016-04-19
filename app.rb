require 'sinatra'
require 'sprockets'
require 'msgpack'

# Serve scripts and stylesheets using sprockets
set :assets, Sprockets::Environment.new
settings.assets.append_path 'assets/javascripts'
settings.assets.append_path 'assets/stylesheets'

get '/' do
  erb :index
end

post '/json' do
  headers['Content-Type'] = 'application/json'
  puts params
  puts JSON.generate(params)
  JSON.generate(params)
end

post '/message-pack' do
  headers['Content-Type'] = 'application/message-pack'
  msgpack.decode(params)
  msgpack.encode(params)
end

post '/protocol-buffers' do
  JSON.generate(params)
end

post '/flat-buffers' do
  JSON.generate(params)
end

get '/javascripts/:file.js' do
  content_type 'application/javascript'
  settings.assets["#{params[:file]}"]
end

get '/stylesheets/:file.css' do
  content_type 'text/css'
  settings.assets["#{params[:file]}.css"]
end
