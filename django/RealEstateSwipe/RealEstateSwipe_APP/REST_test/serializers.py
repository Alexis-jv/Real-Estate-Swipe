from rest_framework import serializers
from models import Message, Conversation, User, Property, Advantage, Picture

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'content', 'date', 'idUser']