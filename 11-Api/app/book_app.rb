class BookApp 
    attr_reader :user
    def run
        welcome 
        log_in_and_sign_up
        book_search
        #book search
        #list books from search
    end 

    def welcome
        puts "Welcome to our Book app!!!!!~"
    end 

    def log_in_and_sign_up
        puts "What's your username"
        username = gets.chomp 
        @user = User.find_or_create_by(username:username)
        # if user
        #     user
        # else
        #     User.create(username:username)
        # end 
    end 

    def book_search
        puts "Enter a book!"
        book_search = gets.chomp
        book_search.gsub!(" ","+")
        res = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{book_search}")
        book_hash = JSON.parse(res.body)

        book_hash["items"].map do |book|
            puts book["volumeInfo"]["title"]
        end 
    end 
end 