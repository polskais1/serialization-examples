require 'sinatra'
require 'sprockets'
require 'msgpack'
require 'pry'

# Serve scripts and stylesheets using sprockets
set :assets, Sprockets::Environment.new
settings.assets.append_path 'assets/javascripts'
settings.assets.append_path 'assets/stylesheets'

get '/' do
  erb :index
end

post '/json' do
  headers['Content-Type'] = 'application/json'
  request.body.string
end

post '/message-pack' do
  # headers['Content-Type'] = 'application/message-pack'
  # content_type 'application/message-pack'
  # binding.pry
  content_type 'application/octet-stream'
  message = MessagePack.unpack(request.body.string)
  MessagePack.pack(message)
  # message.to_msgpack
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
