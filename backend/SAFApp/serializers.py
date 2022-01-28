from rest_framework import serializers
from .models import Budget, Expense


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Expense
    fields = ['id', 'title', 'value', 'budget']
    
    
class BudgetSerializer(serializers.HyperlinkedModelSerializer):
  expenses = ExpenseSerializer(many=True)
  class Meta:
    model = Budget
    fields = ['id', 'title', 'name', 'income', 'expenses']
    
  def create(self, validated_data):
      expense_data = validated_data.pop('expenses')
      budget = Budget.objects.create(**validated_data)
      for expense_data in expense_data:
          Expense.objects.create(budget=budget, **expense_data)
      return budget