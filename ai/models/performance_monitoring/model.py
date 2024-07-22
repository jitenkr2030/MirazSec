import torch
import torch.nn as nn
import torch.optim as optim

class PerformanceMonitoringModel(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(PerformanceMonitoringModel, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, output_size)
        self.relu = nn.ReLU()

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

def get_model(input_size, hidden_size, output_size):
    model = PerformanceMonitoringModel(input_size, hidden_size, output_size)
    return model
