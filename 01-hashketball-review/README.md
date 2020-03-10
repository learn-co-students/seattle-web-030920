- Work together. Help one another as much as possible. Learn through teaching
- There is a solution branch on all labs. Once you are completely stuck, have asked your classmates for help, have googled tirelessly, don't hesitate to look at the solution to familiarize yourself with one of the ways to solve the problem.
- Lectures are recorded
- Lecture priorities:

  - Interactivity is key
  - More questions the better
  - Try not to code along with lecturers. Taking notes is a good thing but if you try and copy the code we write, as you are copying it you will get lost as the lecture continues forward.

- Developing your own coding process. You are all (mostly) brand new to this. Everyone develops their own way of approaching and solving a problem. Coding is no different - over the course of the next 15 weeks you will all develop your own methodologies for tackling challenges.

- Debugging Techniques:

  - Pry
  - Puts

- Things that helped me:

  - Timestamp methods
  - Quiver
  - Spectacle

- Different data types

  - how to check data types
  - calling '.methods' on anything in ruby
  - Data types matter. I.E. adding a number to an array

- IRB walkaround

  - make an array and play with it
  - block return value vs. the methods return value
    - each vs. map
  - find/select
    - build an array of objects
    ```
    people = [{name: "Matt", age: 36},{name: "Alice", age: 25},{name: "Dave", age: 6},{name: "Nancy", age: 36}]
    ```
    - demonstrate select vs. find (first match vs. all matches)

- Test driven development

  - check out spec file
  - '--f-f'

- Create a helper method first to grab all players
  ```
  def get_players
    players = []
    game_hash.values.each do |team|
      team[:players].each do |player|
        players << player
      end
    end
    players
  end
  ```
- num_points_scorded
  ```
  def num_points_scored(name)
    players = get_players()
    target_player = players.find do |player|
      player[:player_name] == name
    end
    return target_player[:points]
  end
  ```
- shoe_size
  ```
  def shoe_size(name)
    target_player = get_players.find {|player| player[:player_name] == name}
    return target_player[:shoe]
  end
  ```
- team_colors
  ```
  def team_colors(team)
    target_team = game_hash.values.find {|data| data[:team_name] == team}
    return target_team[:colors]
  end
  ```
- team_names
  ```
  def team_names
    game_hash.values.map {|value| value[:team_name]}
  end
  ```
- player_numbers
  ```
  def player_numbers(team)
    jersey_numbers = []
    game_hash.values.each do |data|
      if data[:team_name] == team
        data[:players].each do |player|
          jersey_numbers << player[:number]
        end
      end
    end
    jersey_numbers
  end
  ```
- player_stats
  ```
  def player_stats(player)
    target_player = get_players().select {|person| person[:player_name] == player}
    target_player.delete(:player_name)
    target_player
  end
  ```
- big_shoe_rebounds
  ```
  def big_shoe_rebounds
    biggest_shoe = 0
    rebounds = 0
    get_players.each do |player|
      if player[:shoe] > biggest_shoe
        biggest_shoe = player[:shoe]
        rebounds = player[:rebounds]
      end
    end
    rebounds
  end
  ```
