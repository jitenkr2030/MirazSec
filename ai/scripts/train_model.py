import torch
import torch.optim as optim
from ai.models.incident_analysis.model import get_model
from ai.models.incident_analysis.utils import load_data, preprocess_data

def train_model():
    data = load_data('data/incident_data/incident_train.csv')
    features, target = preprocess_data(data)

    input_size = features.shape[1]
    hidden_size = 64
    output_size = len(target.unique())

    model = get_model(input_size, hidden_size, output_size)
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=0.001)

    for epoch in range(10):  # Number of epochs
        model.train()
        optimizer.zero_grad()

        outputs = model(torch.tensor(features, dtype=torch.float32))
        loss = criterion(outputs, torch.tensor(target.values, dtype=torch.long))
        loss.backward()
        optimizer.step()

        print(f'Epoch [{epoch+1}/10], Loss: {loss.item():.4f}')

    torch.save(model.state_dict(), 'models/incident_analysis/model.pth')

if __name__ == "__main__":
    train_model()
