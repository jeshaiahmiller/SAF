from rest_framework import viewsets, permissions
from .serializers import BudgetSerializer, ExpenseSerializer
from .models import Budget, Expense

# Create your views here.

class ExpenseViewSet(viewsets.ModelViewSet):
  queryset = Expense.objects.all()
  serializer_class = ExpenseSerializer
  permission_classes = [permissions.AllowAny]


class BudgetViewSet(viewsets.ModelViewSet):
  queryset = Budget.objects.all()
  serializer_class = BudgetSerializer
  permission_classes = [permissions.AllowAny]