require "sinatra"
require "sinatra/reloader" if development?
require "tilt/erubis"

before do
  @contents = File.readlines("data/toc.txt")
end

helpers do

  def highlight(line, query)
    line.gsub(query, %(<strong>#{query}</strong>))
  end

  def in_paragraphs(text)
    text.split("\n\n").each_with_index.map do |paragraph, idx|
      "<p id='p#{idx}'>#{paragraph}</p>"
    end.join
  end

  def each_chapter
    @contents.each_with_index do |chap_name, idx|
      chap_num = idx + 1
      chap_contents = File.read("data/chp#{chap_num}.txt")
      yield chap_num, chap_name, chap_contents
    end
  end

  def chapters_including(query)
    results = []
    return results unless query

    each_chapter do |chap_num, chap_name, chap_contents|
      matches = {}
      chap_contents.split("\n\n").each_with_index do |line, idx|
        matches[idx] = line if line.include?(query)
      end  
      results << {chap_num: chap_num, chap_name: chap_name, lines: matches} if matches.any?
    end
    results
  end
end

not_found do
  "That page was not found!"
  redirect "/"
end

get "/" do
  @title = "The Adventures of Sherlock Holmes"

  erb :home
end

get "/chapters/:number" do
  num = params[:number].to_i
  chap = File.readlines("data/toc.txt")[num - 1]

  @title = "Chapter #{num}: #{chap}"
  @chapter = File.read("data/chp#{num}.txt")

  erb :chapter
end

get "/search" do
  @results = chapters_including(params[:query])
  erb :search
end

