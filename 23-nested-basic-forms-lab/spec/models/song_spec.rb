require 'rails_helper'

RSpec.describe Song, type: :model do
  describe 'artist_name=' do
    it 'sets the artist to the artist of the specified name' do
      song = Song.new
      song.artist_name = 'Rock Hudson'
      expect(song.artist.name).to eq 'Rock Hudson'
    end
  end

  describe 'artist_name' do
    it 'returns the artist name' do
      song = Song.new
      song.artist_name = 'Rock Hudson'
      expect(song.artist_name).to eq 'Rock Hudson'
    end
  end
end
