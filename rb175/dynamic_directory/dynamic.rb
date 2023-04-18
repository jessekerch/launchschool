require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

get "/" do
  @file_list = Dir.entries("public")
  @reverse = true if params['sort'] == "za"

  erb :home
end

get "/file/" do
  num = params['file_num'].to_i
  @file_num = num
  @file_name = Dir.entries("public").sort[num + 1]

  erb :file
end
