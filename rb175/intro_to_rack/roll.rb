require "socket"

def parse_request(request_line)
  http_method, path_params, http = request_line.split(" ")

  path, param_str = path_params.split("?")

  params = {}
  param_str.split("&").each do |pair|
    key, value = pair.split("=")
    params[key] = value
  end

  [http_method, path, params]
end

server = TCPServer.new("localhost", 3003)
loop do
  client = server.accept

  request_line = client.gets
  puts request_line

  http_method = ""
  path = ""
  params = ""

  if request_line.include?("?") then
    http_method, path, params = parse_request(request_line)
  end

  client.puts request_line

  rolls = params["rolls"].to_i
  sides = params["sides"].to_i

  rolls.times do
    roll = rand(sides) + 1
    client.puts roll
  end

  client.close
end