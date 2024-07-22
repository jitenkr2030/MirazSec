import pandas as pd
from sklearn.preprocessing import StandardScaler

def load_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_data(data):
    scaler = StandardScaler()
    features = data.drop(columns=['target'])
    target = data['target']
    scaled_features = scaler.fit_transform(features)
    return scaled_features, target
