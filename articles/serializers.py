from rest_framework import serializers
from articles.models import Article
from django.contrib.auth.models import User


class ArticleSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'owner', 'text', 'pub_date')


class UserSerializer(serializers.ModelSerializer):
    articles = ArticleSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'articles')

