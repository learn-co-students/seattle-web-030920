class CookingApp
    def run
        welcome
        log_in_and_sign_up
        menu
            #ingredient
            #total gold
            #exit
            #store
                #buy
                #ext
    end 

    def welcome
        puts "Welcome to our cooking app!"
    end 

    def log_in_and_sign_up
        puts "What is your username?"
        username = gets.chomp
        @user = User.find_or_create_by(name:username)
    end 

    def menu
        puts "Main Menu"
        puts "Gold: #{@user.gold}"
        puts "1. Inventory"
        puts "2. Store"
        puts "3. quit"

        input = gets.chomp

        case input 
        when "1"
            if @user.ingredients.length > 0
                @user.ingredients.each{|ingredient| puts ingredient.name}
                menu
            else
                puts "you have no ingredents ):"
                menu
            end 
        when "2"
            store
        when "3"
            "Goodbye!"
            exit
        else 
            puts "Sorry, that is not an option"
            menu
        end 
    end
    def store
        puts "Welcome to #{Store.first.name}"
        Store.first.ingredients.each{|ingredent| puts "#{ingredent.name} : $#{ingredent.price}"}
        puts "What would you like to buy?"
        puts "type exit to leave"
        input = gets.chomp
        buy(input)
    end  

    def buy(input)
        if Store.first.ingredients.find_by(name:input)
            item = Store.first.ingredients.find_by(name:input)
            @user.gold -= item.price
            @user.update(gold:@user.gold)
            @user.ingredients << item
            puts "thank you for purchaseing #{item.name}"
            menu
        elsif input == "exit"
            menu
        else 
            puts "sorry we don't have that"
            store
        end 
    end
end 