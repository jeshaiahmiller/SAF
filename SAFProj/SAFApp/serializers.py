from rest_framework import serializers
from .models import Budget, Expense


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Expense
    fields = ['title', 'value', 'budget']
    
    
class BudgetSerializer(serializers.HyperlinkedModelSerializer):
  expenses = serializers.StringRelatedField(many=True)
  class Meta:
    model = Budget
    fields = ['title', 'name', 'income', 'expenses']