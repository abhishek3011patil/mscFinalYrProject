import pickle
from joblib import dump

# Load the data from the .pkl file
with open('similarity.pkl', 'rb') as pkl_file:
    data = pickle.load(pkl_file)

# Save the data to a .joblib file
dump(data, 'similarity.joblib')
