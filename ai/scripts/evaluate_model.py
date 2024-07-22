import torch
from ai.models.incident_analysis.model import get_model
from ai.models.incident_analysis.utils import load_data, preprocess_data

def evaluate_model():
    data = load_data('data/incident_data/incident_test.csv')
    features, target = preprocess_data(data)

    input_size = features.shape[1]
    hidden_size = 64
    output_size = len(target.unique())

    model = get_model(input_size, hidden_size, output_size)
    model.load_state_dict(torch.load('models/incident_analysis/model.pth'))
    model.eval()

    with torch.no_grad():
        outputs = model(torch.tensor(features, dtype=torch.float32))
        predicted = torch.argmax(outputs, dim=1)
        accuracy = (predicted == torch.tensor(target.values, dtype=torch.long)).float().mean()
        print(f'Accuracy: {accuracy.item():.4f}')

if __name__ == "__main__":
    evaluate_model()
