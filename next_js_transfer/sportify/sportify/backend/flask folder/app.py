import pickle
from flask import Flask, jsonify
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Spotify API credentials
CLIENT_ID = "1be6468e38b94c72bfd7cf40b721c854"
CLIENT_SECRET = "62e5a37663c0488c9bb1d5fed1de138e"

# Initialize Spotify client
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Load pre-trained models and data
music = pickle.load(open('df.pkl', 'rb'))
similarity = pickle.load(open('similarity.pkl', 'rb'))

# Function to get album cover URL
def get_song_album_cover_url(song_name, artist_name):
    search_query = f"track:{song_name} artist:{artist_name}"
    results = sp.search(q=search_query, type="track")

    if results and results["tracks"]["items"]:
        track = results["tracks"]["items"][0]
        album_cover_url = track["album"]["images"][0]["url"]
        return album_cover_url
    else:
        return "https://i.postimg.cc/0QNxYz4V/social.png"

# Function to recommend similar songs
def recommend(song):
    index = music[music['song'] == song].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    
    recommended_music_names = []
    recommended_music_artists = []
    recommended_music_posters = []
    
    for i in distances[1:9]:
        recommended_music_names.append(music.iloc[i[0]].song)
        recommended_music_artists.append(music.iloc[i[0]].artist)
        recommended_music_posters.append(get_song_album_cover_url(music.iloc[i[0]].song, music.iloc[i[0]].artist))

    return recommended_music_names, recommended_music_artists, recommended_music_posters

# Function to convert recommendation results to a dictionary format
def dic_con(song_dic):
    songs, artists, images = song_dic
    data_dict = [{'song': song, 'artist': artist, 'image': image} for song, artist, image in zip(songs, artists, images)]
    return data_dict

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# API endpoint to get recommendations for a specific song
@app.route("/get-songName/<song_name>")
def song_api(song_name="Bang"):
    recommendations = recommend(song_name)
    recommendations_dict = dic_con(recommendations)
    return jsonify(recommendations_dict), 200

# API endpoint to get list of all songs 
@app.route("/get-songs")
def songs():
    music_list = music['song'].to_dict()
    return jsonify(music_list), 200

# Run Flask app
if __name__ == "__main__":
    app.run(debug=True)
