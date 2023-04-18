require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "yaml"

helpers do
  def other_users(current)
    others = ""
    delim = ""
    @names.each do |name|
      name = name.to_s
      next if name == current
      link = "<a href='/users/#{name}''>"
      others << delim + link + name.capitalize + "</a>"
      delim = " || "
    end

    others
  end

  def count_interests
    users = @names.count
    interests = @names.map do |name|
      @users[name.to_sym][:interests]
    end.flatten.count

    "There are #{users} users with a total of #{interests}  interests."
  end
end

before do
  @users = YAML.load_file('users.yaml')
  @names = @users.keys
end

get "/" do
  erb :home
end

get "/users/:name" do
  @name = params[:name]
  @title = "Info for #{@name.capitalize}"
  @user_info = @users[@name.to_sym]

  erb :user
end
