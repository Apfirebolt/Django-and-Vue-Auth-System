from rest_framework import serializers
from django.contrib.auth.models import User
from . models import DirectoryUsers
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'first_name', 'last_name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'first_name', 'last_name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class DirectoryUserSerializer(serializers.ModelSerializer):
    uploaded_by_user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = DirectoryUsers
        fields = ['id', 'title', 'body', 'uploaded_by_user']

    def get_uploaded_by_user(self, obj):
        return str(obj.uploaded_by.username)




