from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from SAFApp import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



router = routers.DefaultRouter()
router.register('budget', views.BudgetViewSet)
router.register('expense', views.ExpenseViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh-token/', TokenRefreshView.as_view()),
    path('user/signup/', views.RegisterUsersView.as_view(), name="user-signup"),
    
]
