from django.urls import path
from articles import views

urlpatterns = [

    path('articles/', views.ArticleList.as_view()),
    path('snippets/<int:pk>)/', views.ArticleDetail.as_view()),
]