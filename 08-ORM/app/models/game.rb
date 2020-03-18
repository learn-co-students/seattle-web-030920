class Game
    attr_accessor :id, :title, :genre, :price

    # @@all = []

    def initialize(id, title, genre, price)
        @id = id
        @title = title
        @genre = genre
        @price = price
        
        # @@all << self
    end 

    

    # def self.all
    #     @@all
    # end 

    def save
        sql = "INSERT INTO games (title, genre, price) VALUES (?,?,?);"
        DB[:conn].execute(sql, self.title, self.genre, self.price)
    end 

    def self.all
        sql = "SELECT * FROM games"
        game_array = DB[:conn].execute(sql)

        game_array.map do |game|
            Game.new(game["id"],game["title"],game["genre"],game["price"])
        end 

    end 

end 